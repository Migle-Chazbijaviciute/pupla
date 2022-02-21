import axios from 'axios';
import { dataFetchError } from '../helpers/data-fetch-error-helper';
import SessionService from './session-service';

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
  const token = SessionService.get('auth_token');

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

const getGarment = async (id) => {
  try {
    const response = await instance.get(`/garments/${id}`);
    return response.data;
  } catch (error) {
    return dataFetchError(error);
  }
};

const getLimitedGarmentsImages = async () => {
  try {
    const { garment } = await getGarments();
    const filtered = garment.filter(({ limitedEdition }) => limitedEdition === true);
    const limitedImages = filtered.map((x) => x.images);
    return limitedImages;
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
  getGarment,
  getLimitedGarmentsImages,
};

export default API;
