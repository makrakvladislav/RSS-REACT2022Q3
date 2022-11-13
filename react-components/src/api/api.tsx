import axios from 'axios';
import IResponse from 'interface/IResponse';
import IResponseByMovieId from 'interface/IResponseByMovieId';
export default class Data {
  static async getMovies(page: number, sortBy: string): Promise<IResponse | void> {
    return await axios
      .get('https://api.themoviedb.org/3/discover/movie?', {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          page: page,
          sort_by: sortBy + '.desc',
        },
      })
      .then((response) => {
        const data = response.data;
        const totalCount = response.data.total_results;
        return { results: data, totalCount: totalCount };
      })
      .catch((error) => console.log(error));
  }

  static async getByQuery(page: number, query: string): Promise<IResponse | void> {
    return await axios
      .get('https://api.themoviedb.org/3/search/movie?', {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          page: page,
          query: query,
        },
      })
      .then((response) => {
        const data = response.data;
        const totalCount = response.data.total_results;
        return { results: data, totalCount: totalCount };
      })
      .catch((error) => console.log(error));
  }

  static async getByMovieId(id: number): Promise<IResponseByMovieId | void> {
    return await axios
      .get(`https://api.themoviedb.org/3/movie/${id}`, {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
        },
      })
      .then((response) => {
        const data = response.data;
        return { results: data };
      })
      .catch((error) => console.log(error));
  }
}
