import Card from 'components/Card/Card';
import React, { memo } from 'react';

interface ICardListProps {
  items: {
    adult: boolean;
    backdrop_path: string;
    genre_ids: Array<number>;
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }[];
  setVisible: (movieId: number | null) => void;
}

const CardsList = memo((props: ICardListProps) => {
  return (
    <>
      <div className="grid mb-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 grid-cols-1 grid-flow-row gap-4">
        {props.items.map((item, index) => (
          <Card key={index} item={item} setVisible={props.setVisible} />
        ))}
      </div>
    </>
  );
});

export default CardsList;
