"use client";

import React, { useState, useEffect } from 'react';
// import Autosuggest from 'react-autosuggest';
import { useTranslation } from 'next-i18next';
import { forwardRef } from 'react';

// Data structure for suggestions
interface Suggestion {
  title: string;
  subtitle: string;
}

// Function to fetch suggestions from Yandex Suggest API
const fetchSuggestions = async (text: string): Promise<Suggestion[]> => {
  const apiKey = '559e1f9b-e496-40c2-9740-90d74cacebed';
  const url = `https://suggest-maps.yandex.ru/v1/suggest?apikey=${apiKey}&text=${encodeURIComponent(text)}&ll=37.6173,55.7558&spn=0.9,0.9&lang=ru_RU`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return (
      data.results?.map((result: any) => ({
        title: result.title.text,
        subtitle: result.subtitle?.text || '',
      })) || []
    );
  } catch (error) {
    console.error('Error fetching suggestions:', error);
    return [];
  }
};

// Rendering a suggestion item
const renderSuggestion = (suggestion: Suggestion) => (
  <div className="suggestion-item">
    <strong>{suggestion.title}</strong>
    {suggestion.subtitle && <p>{suggestion.subtitle}</p>}
  </div>
);

// AsyncSelectMap component
const AsyncSelectMap = React.forwardRef<HTMLInputElement, any>(
  ({ placeholder, label, error, isOpen, setIsOpen, ...props }, ref) => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');
    const [suggestions, setSuggestions] = useState<Suggestion[]>([]);

    useEffect(() => {
      if (props.value) {
        setValue(props.value);
      }
    }, [props.value]);

    const onSuggestionsFetchRequested = async ({ value }: { value: string }) => {
      const fetchedSuggestions = await fetchSuggestions(value);
      setSuggestions(fetchedSuggestions);
    };

    const onSuggestionsClearRequested = () => {
      setSuggestions([]);
    };

    const onChange = (event: React.FormEvent, { newValue }: any) => {
      setValue(newValue);
      props.onChange({ target: { name: props.name, value: newValue } });
    };

    const inputProps = {
      placeholder: placeholder,
      value,
      onChange,
      onFocus: () => setIsOpen(true),
      onBlur: () => setIsOpen(false),
      name: props.name, // Pass name for form registration
      ref, // Pass ref for form validation
    };

    return (
      <div>
        {label && (
          <label className="text-skin-base opacity-70 mb-3 cursor-pointer">
            {t(label)}
          </label>
        )}
        {/*<Autosuggest*/}
        {/*  suggestions={isOpen ? suggestions : []}*/}
        {/*  onSuggestionsFetchRequested={onSuggestionsFetchRequested}*/}
        {/*  onSuggestionsClearRequested={onSuggestionsClearRequested}*/}
        {/*  // getSuggestionValue={(suggestion: Suggestion) => suggestion.subtitle + suggestion.title}*/}
        {/*  getSuggestionValue={(suggestion: Suggestion) => `${suggestion.subtitle} ${suggestion.title}`}*/}
        {/*  renderSuggestion={renderSuggestion}*/}
        {/*  inputProps={inputProps}*/}
        {/*  theme={{*/}
        {/*    container: 'autosuggest-container',*/}
        {/*    input: 'autosuggest-input',*/}
        {/*    // suggestionsContainer: 'autosuggest-suggestions-container sevdwfbe',*/}
        {/*    suggestionsContainer: isOpen && suggestions.length > 0 */}
        {/*      ? 'autosuggest-suggestions-container sevdwfbe' */}
        {/*      : '',*/}
        {/*    suggestion: 'autosuggest-suggestion',*/}
        {/*    suggestionHighlighted: 'autosuggest-suggestion-highlighted'*/}
        {/*  }}*/}
        {/*/>*/}
        {error && <p className="my-2 text-red-600">{t(error)}</p>}
      </div>
    );
  }
);

AsyncSelectMap.displayName = 'AsyncSelectMap';

export default AsyncSelectMap;
