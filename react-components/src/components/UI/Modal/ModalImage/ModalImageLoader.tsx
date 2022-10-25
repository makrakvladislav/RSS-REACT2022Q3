import React, { memo } from 'react';
import ContentLoader, { IContentLoaderProps } from 'react-content-loader';

const ModalImageLoader = memo((props: JSX.IntrinsicAttributes & IContentLoaderProps) => (
  <ContentLoader
    speed={1}
    width={284}
    height={426}
    viewBox="0 0 284 426"
    backgroundColor="#f3f3f3"
    foregroundColor="#007bff"
    {...props}
  >
    <rect x="67" y="75" rx="0" ry="0" width="1" height="4" />
    <rect x="6" y="0" rx="0" ry="0" width="423" height="508" />
  </ContentLoader>
));

export default ModalImageLoader;
