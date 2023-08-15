import { StatusCodes } from '@/common/enums/status-codes';
import axios from 'axios';

export type ErrorResponse = {
  error: string;
  status: StatusCodes;
};

export const clientAPI = axios.create({ baseURL: '/api' });

export const fetcher = (url: string) =>
  clientAPI.get(url).then((res) => res.data);
