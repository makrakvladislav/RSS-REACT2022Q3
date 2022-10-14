import axios from 'axios';
import IResponse from 'interface/IResponse';
export default class Data {
  static async getMovies(page: number): Promise<IResponse | void> {
    return await axios
      .get('https://api.themoviedb.org/3/discover/movie?', {
        params: {
          api_key: '1939abe3d00976407f86acd63c341f94',
          page: page,
        },
      })
      .then((response) => {
        const data = response.data;
        const totalCount: string = response.data.total_results;
        return { results: data, totalCount: totalCount };
      })
      .catch((error) => console.log(error));
  }

  static async getByQuery(page: number, query: string): Promise<IResponse | void> {
    return await axios
      .get('https://api.themoviedb.org/3/search/movie?', {
        params: {
          api_key: '1939abe3d00976407f86acd63c341f94',
          page: page,
          query: query,
        },
      })
      .then((response) => {
        const data = response.data;
        const totalCount: string = response.data.total_results;
        return { results: data, totalCount: totalCount };
      })
      .catch((error) => console.log(error));
  }
}
