import React, { memo } from 'react';
import ContentLoader, { IContentLoaderProps } from 'react-content-loader';

const ModalGenresListLoader = memo((props: JSX.IntrinsicAttributes & IContentLoaderProps) => (
  <ContentLoader
    speed={1}
    width={476}
    height={30}
    viewBox="0 0 476 30"
    backgroundColor="#f3f3f3"
    foregroundColor="#007bff"
    {...props}
  >
    <rect x="5" y="3" rx="3" ry="3" width="73" height="24" />
    <rect x="87" y="3" rx="3" ry="3" width="73" height="24" />
    <rect x="170" y="3" rx="3" ry="3" width="73" height="24" />
  </ContentLoader>
));

export default ModalGenresListLoader;
