import React, { memo, useContext } from 'react';
import ModalContentLoader from './ModalContentLoader';
import ModalContext from '../ModalContext';

const ModalContent = memo(() => {
  const { modalData, isLoading } = useContext(ModalContext);
  return (
    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      {isLoading ? <ModalContentLoader /> : <>{modalData[0].overview}</>}
    </p>
  );
});

export default ModalContent;
