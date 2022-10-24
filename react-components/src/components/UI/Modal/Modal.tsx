import Data from 'api/api';
import { IModalProps } from 'interface/IModalProps';
import React, { memo, useEffect, useState } from 'react';
import ModalGenresList from './ModalGenresList/ModalGenresList';
import ModalRating from './ModalRating/ModalRating';
import ModalImage from './ModalImage/ModalImage';
import ModatlTitle from './ModalTitle/ModatlTitle';
import ModalContent from './ModalContent/ModalContent';
import { IModalState } from 'interface/IModalState';
import ModalContext from './ModalContext';
import './Modal.css';

const IconClose = () => (
  <svg
    aria-hidden="true"
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default memo(function Modal(props: IModalProps) {
  const [modalData, setModalData] = useState<IModalState>({ modalData: [] });
  const [isLoading, setIsLoading] = useState(true);

  const getModalData = async (movieId?: number) => {
    setTimeout(async () => {
      const response = await Data.getByMovieId(movieId!);
      if (response !== undefined) {
        setModalData({
          modalData: [response.results],
        });
        setIsLoading(false);
      }
    }, 2000);
  };

  useEffect(() => {
    getModalData(props.movieId);
  }, []);

  const data = {
    ...modalData,
    isLoading,
  };

  return (
    <ModalContext.Provider value={data}>
      <>
        <div
          onClick={() => props.setVisible!(false)}
          className={
            props.isVisible
              ? 'fixed inset-0 bg-gray-500 bg-opacity-75'
              : 'hidden fixed inset-0 bg-gray-500 bg-opacity-75'
          }
        ></div>
        <div
          className={
            props.isVisible
              ? 'modal-wrapper overflow-y-auto overflow-x-hidden'
              : 'hidden overflow-y-auto overflow-x-hidden'
          }
        >
          <div className="relative p-4 w-full max-w-6xl h-full md:h-auto">
            <div className="relative bg-white rounded-lg shadow">
              <div className="flex justify-between items-center p-5 rounded-t border-b">
                <ModatlTitle />
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-toggle="medium-modal"
                  onClick={() => props.setVisible!(false)}
                >
                  <IconClose />
                </button>
              </div>
              <div className="flex row gap-5 p-6">
                <ModalImage />
                <div className="description flex w-2/3 flex-col">
                  <ModalRating />
                  <ModalGenresList />
                  <ModalContent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </ModalContext.Provider>
  );
});
