import React, { memo, useContext } from 'react';
import ModalContext from '../ModalContext';
import ModalGenresListLoader from './ModalGenresListLoader';

const ModalGenresList = memo(() => {
  const { modalData, isLoading } = useContext(ModalContext);
  return (
    <div className="mb-5">
      <div className="inline-flex" role="group">
        {isLoading ? (
          <ModalGenresListLoader />
        ) : (
          <>
            {modalData[0].genres.map((item, index) => (
              <button
                key={index}
                type="button"
                className="bg-indigo-100 text-indigo-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded"
              >
                {item.name}
              </button>
            ))}
          </>
        )}
      </div>
    </div>
  );
});

export default ModalGenresList;
