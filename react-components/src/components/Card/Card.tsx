import IMyProps from '../../interface/IMyProps';
import React, { memo } from 'react';
import ImagePlaceholder from 'components/UI/ImagePlaceholder/ImagePlaceholder';

const Card = memo((props: IMyProps) => {
  return (
    <>
      <div className="card flex flex-col bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        {props.item.poster_path !== null ? (
          <img
            src={`https://image.tmdb.org/t/p/w500/${props.item.poster_path}`}
            className="w-full rounded-t-lg object-contain max-w-md"
            alt="Post img"
          />
        ) : (
          <ImagePlaceholder />
        )}

        <div className="flex flex-col h-full justify-between p-5">
          <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.item.title}
          </h3>
          <button
            onClick={() => props!.setVisible!(true, props.item.id)}
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
