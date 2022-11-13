import React, { memo, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppselector } from 'store/hooks/redux';
import ImagePlaceholder from 'components/UI/ImagePlaceholder/ImagePlaceholder';

const IconArrow = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M10 19l-7-7m0 0l7-7m-7 7h18"
    ></path>
  </svg>
);

const Movie = memo(() => {
  const navigate = useNavigate();
  const params = useParams();
  const { cards } = useAppselector((state) => state.cache);
  const card = cards.length ? cards.find((item) => item.id === +params.id!) : null;

  useEffect(() => {
    if (!card) {
      return navigate('/');
    }
  }, [card, navigate]);

  return (
    <>
      {card && (
        <div className="relative p-4 w-full h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow">
            <h1 className="flex justify-between items-center p-5 rounded-t border-b">
              {card.title}
              <button
                onClick={() => navigate(-1)}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2"
              >
                <IconArrow />
              </button>
            </h1>
            <div className="flex row gap-5 p-6">
              {card.poster_path !== null ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${card.poster_path}`}
                  className="h-full max-h-96 object-contain"
                />
              ) : (
                <ImagePlaceholder />
              )}
              <div className="description flex w-2/3 flex-col">{card.overview}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
});

export default Movie;
