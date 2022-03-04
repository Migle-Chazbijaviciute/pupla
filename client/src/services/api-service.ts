import axios, { AxiosInstance } from 'axios';
import { dataFetchError } from '../helpers/data-fetch-error-helper';
import {
  Color, Size, Category, Image, Garment,
} from '../types';
import SessionService from './session-service';
import LoggedInUser from '../types/logged-in-user';
import { InitialValues } from '../pages/authorized/admin/add-product/add-item-form';

const instance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

const getColors = async (): Promise<Color[] | string> => {
  try {
    const response = await instance.get('/colors');
    return response.data.color;
  } catch (error) {
    return dataFetchError(error);
  }
};

const getSizes = async (): Promise<Size[] | string> => {
  try {
    const response = await instance.get('/sizes');
    return response.data.size;
  } catch (error) {
    return dataFetchError(error);
  }
};

const createSize = async (data: Size) => {
  try {
    const response = await instance.post<Size>('/sizes', data);
    return response.data;
  } catch (error) {
    return dataFetchError(error);
  }
};

const getCategories = async (): Promise<Category[] | string> => {
  try {
    const response = await instance.get('/categories');
    return response.data.category;
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

const getUsers = async (): Promise<LoggedInUser[] | string> => {
  const token = validateToken();
  try {
    const response = await instance.get('/users', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.users;
  } catch (error) {
    return dataFetchError(error);
  }
};

const getImages = async (): Promise<Image[] | string> => {
  try {
    const response = await instance.get('/images');
    return response.data;
  } catch (error) {
    return dataFetchError(error);
  }
};

const getGarments = async (): Promise<Garment[] | string> => {
  try {
    const response = await instance.get('/garments');
    return response.data.garment;
  } catch (error) {
    return dataFetchError(error);
  }
};

const getGarment = async (id: string): Promise<Garment | string> => {
  try {
    const response = await instance.get(`/garments/${id}`);
    return response.data;
  } catch (error) {
    return dataFetchError(error);
  }
};

const createGarment = async ({
  label,
  color,
  category,
  price,
  sizes,
  images,
  limitedEdition,
  inStock,
}: InitialValues) => {
  try {
    const response = await instance.post('/garments', {
      label, color, category, price, sizes, images, limitedEdition, inStock,
    });
    return response.data;
  } catch (error) {
    return dataFetchError(error);
  }
};

const updateGarment = async ({
  id,
  label,
  color,
  category,
  price,
  sizes,
  inStock,
  limitedEdition,
  images,
}: InitialValues) => {
  try {
    const response = await instance.patch(`/garments/${id}`, {
      label,
      color,
      category,
      price,
      sizes,
      inStock,
      limitedEdition,
      images,
    });
    return response.data;
  } catch (error) {
    return dataFetchError(error);
  }
};

const deleteGarment = async (id: string): Promise<void | string> => {
  try {
    await instance.delete(`/garments/${id}`);
    return console.log('Garment deleted successfully');
  } catch (error) {
    return dataFetchError(error);
  }
};

const getLimitedGarmentsImages = async (): Promise<Image[] | string> => {
  try {
    const garments = await getGarments();
    if (typeof garments === 'string') {
      return garments;
    }
    const filtered = garments.filter(({ limitedEdition }) => limitedEdition === true);
    const limitedImages: Image[] = [];
    filtered
      .map(({ images }) => images
        .forEach((img) => limitedImages.push(img)));

    return limitedImages as unknown as Image[];
  } catch (error) {
    return dataFetchError(error);
  }
};

const API = {
  getColors,
  getSizes,
  createSize,
  getCategories,
  getUsers,
  getImages,
  getGarments,
  getGarment,
  getLimitedGarmentsImages,
  createGarment,
  updateGarment,
  deleteGarment,
};

export default API;
