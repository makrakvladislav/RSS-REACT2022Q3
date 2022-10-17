import { IModalProps } from 'interface/IModalProps';
import React from 'react';
import GenresList from '../GenresList/GenresList';
import ImagePlaceholder from '../ImagePlaceholder/ImagePlaceholder';
import Rating from '../Rating/Rating';
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

export default React.memo(function Modal(props: IModalProps) {
  const modalData = props.modalData[0];
  return (
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
              <h3 className="flex gap-4 items-center text-3xl font-medium text-gray-900 ">
                {modalData.title}
              </h3>

              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="medium-modal"
                onClick={() => props.setVisible!(false)}
              >
                <IconClose />
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="flex row gap-5 p-6">
              <div className="flex w-1/3 image">
                {modalData.poster_path !== null ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${modalData.poster_path}`}
                    className="h-full w-full"
                  />
                ) : (
                  <ImagePlaceholder />
                )}
              </div>
              <div className="description flex w-2/3 flex-col">
                <Rating data={modalData} />
                <GenresList items={modalData.genres} />
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  {modalData.overview}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
