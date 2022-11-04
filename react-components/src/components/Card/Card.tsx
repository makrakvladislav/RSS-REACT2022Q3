import React, { memo, useCallback } from 'react';
import ImagePlaceholder from 'components/UI/ImagePlaceholder/ImagePlaceholder';
import { useNavigate } from 'react-router-dom';

export interface ICard {
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
}
interface ICardProps {
  item: ICard;
  setVisible: (movieId: number | null) => void;
}

const Card = memo<ICardProps>(({ item, setVisible }) => {
  const openModal = useCallback(() => setVisible(item.id), [item]);
  const navigate = useNavigate();

  return (
    <>
      <div className="card flex flex-col bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        {item.poster_path !== null ? (
          <img
            onClick={openModal}
            src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
            className="w-full rounded-t-lg object-contain max-w-md hover:cursor-pointer"
            loading="lazy"
            alt="Post img"
          />
        ) : (
          <ImagePlaceholder />
        )}

        <div className="flex flex-col h-full justify-between p-5">
          <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {item.title}
          </h3>

          {/*
          <button
            onClick={openModal}
            className="w-full mt-4 text-white right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-1"
          >
            More info
          </button>
          */}

          <button
            onClick={() => navigate(`/movie/${item.id}`)}
            className="w-full mt-4 text-white right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-1"
          >
            More info
          </button>
        </div>
      </div>
    </>
  );
});

export default Card;
