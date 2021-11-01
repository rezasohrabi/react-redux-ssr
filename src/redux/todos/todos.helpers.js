import axios from 'axios';
import { API_BASE_URL } from '../../utils/constants';

export const handleFetchTodos = async () => {
  const response = await axios({
    method: 'get',
    baseURL: API_BASE_URL,
    url: '/users',
  });
  return response.data;
};
