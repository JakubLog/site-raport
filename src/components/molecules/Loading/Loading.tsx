import React from 'react';
import PropTypes from 'prop-types';
import { LoadingWrapper, LoadingIcon, LoadingText } from './Loading.styles';

interface props {
  autoSize?: boolean;
}

const Loading = ({ autoSize = false }: props): JSX.Element => {
  return (
    <LoadingWrapper autoSize>
      {!autoSize && <LoadingText>Loading...</LoadingText>}
      <LoadingIcon />
    </LoadingWrapper>
  );
};

Loading.propTypes = {
  autoSize: PropTypes.bool
};

export default Loading;
