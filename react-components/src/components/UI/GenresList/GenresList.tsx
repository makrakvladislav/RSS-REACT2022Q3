import { IGenresListProps } from 'interface/IGenresListProps';
import React from 'react';

function GenresList(props: IGenresListProps) {
  return (
    <>
      <div className="mb-5">
        {/* <p className="text-md font-bold mb-2">Genres</p> */}
        <div className="inline-flex" role="group">
          {props.items.map((item, index) => (
            <button
              key={index}
              type="button"
              className="bg-indigo-100 text-indigo-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default GenresList;
