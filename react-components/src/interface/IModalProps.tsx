import { movieById } from './IMovieById';

export interface IModalProps {
  modalData: Array<movieById>;
  isVisible: boolean;
  setVisible?: (isVisible: boolean, movieId?: number) => void;
}
