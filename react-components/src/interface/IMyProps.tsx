import ICard from './ICard';

export default interface IMyProps {
  item: ICard;
  setVisible: (movieId: number | null) => void;
}
