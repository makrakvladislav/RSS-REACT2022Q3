import axios from 'axios';
import ICard from '../interface/ICard';

export default class Data {
  static async getData(): Promise<Array<ICard> | undefined> {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
