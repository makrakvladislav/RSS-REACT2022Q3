import React, { memo, useContext } from 'react';
import ModalContext from '../ModalContext';
import ModalTitleLoader from './ModalTitleLoader';

const ModatlTitle = memo(() => {
  const { modalData, isLoading } = useContext(ModalContext);
  return (
    <h3 className="flex gap-4 items-center text-3xl font-medium text-gray-900 ">
      {isLoading ? <ModalTitleLoader /> : <>{modalData[0].title} </>}
    </h3>
  );
});

export default ModatlTitle;
