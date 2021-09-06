import React from 'react';
import PropTypes from 'prop-types';
import { LoadingWrapper, LoadingIcon, LoadingText } from './Loading.styles';

interface props {
  autoSize?: boolean;
  fullScreen?: boolean;
}

const Loading: React.FC<props> = ({ autoSize = false, fullScreen = false }) => {
  return (
    <LoadingWrapper autoSize={autoSize} fullScreen={fullScreen}>
      {!autoSize && <LoadingText>Loading...</LoadingText>}
      <LoadingIcon />
    </LoadingWrapper>
  );
};

Loading.propTypes = {
  autoSize: PropTypes.bool,
  fullScreen: PropTypes.bool
};

export default Loading;
