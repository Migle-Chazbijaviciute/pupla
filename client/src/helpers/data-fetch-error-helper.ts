import { AxiosError } from 'axios';
import { ErrorResponse } from '../types';

export const dataFetchError = (error: unknown) => {
  if ((error as AxiosError).isAxiosError) {
    const axiosError = error as AxiosError<ErrorResponse>;
    if (axiosError.response) {
      return axiosError.response.data.message;
    }
  }
  if (error instanceof Error) return error.message;
  return error as unknown as string;
};

export default dataFetchError;
