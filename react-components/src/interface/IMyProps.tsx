import ICard from './ICard';

export default interface IMyProps {
  item: ICard;
  setVisible?: (isVisible: boolean, movieId: number) => void;
}
