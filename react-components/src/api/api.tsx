import axios, { AxiosError } from 'axios';
import ICard from 'interface/ICard';

export default class Data {
  static async getData(): Promise<Array<ICard>> {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
