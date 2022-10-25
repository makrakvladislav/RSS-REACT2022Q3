import React, { memo } from 'react';
import ContentLoader, { IContentLoaderProps } from 'react-content-loader';

const ModalTitleLoader = memo((props: JSX.IntrinsicAttributes & IContentLoaderProps) => (
  <ContentLoader
    speed={2}
    width={500}
    height={30}
    viewBox="0 0 500 30"
    backgroundColor="#f3f3f3"
    foregroundColor="#007bff"
    {...props}
  >
    <rect x="67" y="75" rx="0" ry="0" width="1" height="4" />
    <rect x="5" y="19" rx="3" ry="3" width="321" height="11" />
    <rect x="5" y="3" rx="3" ry="3" width="384" height="11" />
  </ContentLoader>
));

export default ModalTitleLoader;
