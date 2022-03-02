import Size from './size';
import Image from './image';
import Color from './color';
import Category from './category';

type Garment = {
  id: string,
  label: string,
  color: Color,
  category: Category,
  price: string,
  sizes: Array<Size>,
  images: Array<Image>,
  limitedEdition: boolean,
  inStock: boolean,
  createdAt?: string,
  updatedAt?: string,
};

export default Garment;
