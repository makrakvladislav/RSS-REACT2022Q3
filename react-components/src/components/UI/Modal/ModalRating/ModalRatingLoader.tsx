import React, { memo } from 'react';
import ContentLoader, { IContentLoaderProps } from 'react-content-loader';

const ModalRatingLoader = memo((props: JSX.IntrinsicAttributes & IContentLoaderProps) => (
  <ContentLoader
    speed={1}
    width={476}
    height={24}
    viewBox="0 0 476 24"
    backgroundColor="#f3f3f3"
    foregroundColor="#007bff"
    {...props}
  >
    <rect x="90" y="7" rx="3" ry="3" width="73" height="10" />
    <rect x="5" y="7" rx="3" ry="3" width="73" height="10" />
  </ContentLoader>
));

export default ModalRatingLoader;
