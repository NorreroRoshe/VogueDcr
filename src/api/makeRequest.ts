"use client"
import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
interface TMakeRequestParams extends AxiosRequestConfig {
  authToken?: boolean;
}
export type APIError = {
  errors: {
    [key: string]: string[] | object[];
  };
  status: number;
};

type APIResponse<Type> = Promise<AxiosResponse<Type> | APIError>;
const makeRequest = <Type>({
  url = 'http://localhost:7217/api',
  method = 'GET',
  authToken = false,
  headers = {},
  params = {},
  data = {},
}: TMakeRequestParams): APIResponse<Type> => {
  url = `${process.env.NEXT_PUBLIC_BACKEND_URL}${url}`;

  // headers.append("Content-Type", "application/json");
  // headers.append("Accept", "application/json");
  headers.authorization = (
    "Authorization",
    `Bearer ${localStorage.getItem("access_token") || ""}`
  );

  return axios
  .request<Type>({
    url,
    method,
    headers,
    params,
    data,
  })
  .catch((errors) => {
    const responseErrors = errors.response?.data?.errors;
    const status = errors?.response?.status as number;
    const meta = errors?.response?.data?.meta;

    return { errors: responseErrors, status };
  });
};

export default makeRequest;