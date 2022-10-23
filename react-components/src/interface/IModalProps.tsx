export interface IModalProps {
  movieId: number;
  isVisible: boolean;
  setVisible?: (isVisible: boolean, movieId?: number) => void;
}
