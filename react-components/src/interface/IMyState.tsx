import ICard from './ICard';
import { movieById } from './IMovieById';

export default interface IMyState {
  items: Array<ICard>;
}
