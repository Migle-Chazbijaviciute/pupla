import axios from 'axios';
import { dataFetchError } from '../helpers/data-fetch-error-helper';
import AuthService from './auth-service';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

const getColors = async () => {
  try {
    const { data } = await instance.get('/colors');
    return data;
  } catch (error) {
    return dataFetchError(error);
  }
};

const getSizes = async () => {
  try {
    const response = await instance.get('/sizes');
    return response.data;
  } catch (error) {
    return dataFetchError(error);
  }
};

const getCategories = async () => {
  try {
    const response = await instance.get('/categories');
    return response.data;
  } catch (error) {
    return dataFetchError(error);
  }
};

const validateToken = () => {
  const token = AuthService.getToken();
  if (!token) {
    throw new Error('Not authentificated');
  }

  return token;
};

const getUsers = async () => {
  const token = validateToken();
  try {
    const { data } = await instance.get('/users', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    return dataFetchError(error);
  }
};

const getImages = async () => {
  try {
    const response = await instance.get('/images');
    return response.data;
  } catch (error) {
    return dataFetchError(error);
  }
};

const getGarments = async () => {
  try {
    const response = await instance.get('/garments');
    return response.data;
  } catch (error) {
    return dataFetchError(error);
  }
};

const API = {
  getColors,
  getSizes,
  getCategories,
  getUsers,
  getImages,
  getGarments,
};

export default API;
