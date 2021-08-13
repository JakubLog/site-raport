import React from 'react';
import { LoadingWrapper, LoadingIcon, LoadingText } from './Loading.styles';

const Loading = (): JSX.Element => {
  return (
    <LoadingWrapper>
      <LoadingText>Loading...</LoadingText>
      <LoadingIcon />
    </LoadingWrapper>
  );
};

export default Loading;
