import axios, { AxiosInstance } from 'axios';
import { Image } from '../types';

const ImageService = new (class ImageService {
  private requester: AxiosInstance;

  constructor() {
    this.requester = axios.create({
      baseURL: 'http://localhost:5000/api/images',
      headers: { 'Content-Type': 'application/json' },
    });
  }

  async getImages() {
    const { data } = await this.requester.get('/');
    return data.images;
  }

  async uploadImages(files: FileList): Promise<Image[]> {
    const formData = new FormData();
    for (let i = 0; i < files.length; i += 1) {
      formData.append('files', files[i]);
    }

    const { data } = await this.requester.post('/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return data.images;
  }

  async deleteImage(id: string) {
    await this.requester.delete(`/${id}`, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }
})();

export default ImageService;
