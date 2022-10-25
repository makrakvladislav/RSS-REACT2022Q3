import React, { memo } from 'react';
import ContentLoader, { IContentLoaderProps } from 'react-content-loader';

const ModalContentLoader = memo((props: JSX.IntrinsicAttributes & IContentLoaderProps) => (
  <ContentLoader
    speed={1}
    width={570}
    height={160}
    viewBox="0 0 570 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#007bff"
    {...props}
  >
    <rect x="0" y="5" rx="3" ry="3" width="200" height="8" />
    <rect x="0" y="30" rx="3" ry="3" width="400" height="8" />
    <rect x="0" y="55" rx="3" ry="3" width="380" height="9" />
    <rect x="0" y="80" rx="3" ry="3" width="330" height="8" />
    <rect x="0" y="105" rx="3" ry="3" width="230" height="8" />
    <rect x="0" y="130" rx="3" ry="3" width="130" height="8" />
  </ContentLoader>
));

export default ModalContentLoader;
