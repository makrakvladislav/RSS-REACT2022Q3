import axios from 'axios';
import IResponse from 'interface/IResponse';
import ICard from '../interface/ICard';

export default class Data {
  static async getData(limit: number, page: number): Promise<IResponse | void> {
    /*
    try {
      const response = await axios.get('https://makeup-api.herokuapp.com/api/v1/products.json /// https://jsonplaceholder.typicode.com/photos');
      return response.data;
    } catch (error) {
      console.log(error);
    }
    */
    return await axios
      .get('https://jsonplaceholder.typicode.com/photos', {
        params: {
          _limit: limit,
          _page: page,
        },
      })
      .then((response) => {
        const data: Array<ICard> = response.data;
        const totalCount: string = response.headers['x-total-count'];
        return { items: data, totalCount: totalCount };
      })
      .catch((error) => console.log(error));
  }
}
