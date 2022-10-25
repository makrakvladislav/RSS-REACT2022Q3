import ImagePlaceholder from 'components/UI/ImagePlaceholder/ImagePlaceholder';
import React, { memo } from 'react';
import { useModalContext } from '../ModalContext';
import ModalImageLoader from './ModalImageLoader';

const ModalImage = memo(() => {
  const { modalData, isLoading } = useModalContext();

  return (
    <div className="flex w-1/3 image">
      {isLoading ? (
        <ModalImageLoader />
      ) : (
        <>
          {modalData[0].poster_path !== null ? (
            <img
              src={`https://image.tmdb.org/t/p/w500/${modalData[0].poster_path}`}
              className="h-full w-full"
            />
          ) : (
            <ImagePlaceholder />
          )}
        </>
      )}
    </div>
  );
});

export default ModalImage;
