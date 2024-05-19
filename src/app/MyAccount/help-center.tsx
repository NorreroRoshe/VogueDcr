"use client"
import AccountLayout from '@/components/my-account/account-layout';
import Help from '@/components/my-account/help';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';

export default function HelpCenter() {
  return (
    <>
      {/* <Seo
        title="Help Center"
        description="Fastest E-commerce template built with React, NextJS, TypeScript, React-Query and Tailwind CSS."
        path="my-account/help-center"
      /> */}
      <AccountLayout>
        <Help />
      </AccountLayout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  if (!locale) {
    // Если locale не передан, установите значение по умолчанию
    locale = 'en'; // или другой язык по умолчанию
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'forms', 'menu', 'footer'])),
    },
  };
};