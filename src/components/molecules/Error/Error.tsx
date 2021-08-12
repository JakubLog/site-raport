import React from 'react';
import propTypes from 'prop-types';
import { ErrorContent, ErrorTitle, Wrapper } from './Error.styles';

interface props {
  message: string;
}

const defaultMessage = 'Something went wrong. We still trying make this site better and you can help us! Please, contact with support!';

const Error = ({ message = defaultMessage }: props): JSX.Element => {
  return (
    <Wrapper>
      <ErrorTitle>Ooops!</ErrorTitle>
      <ErrorContent>{message}</ErrorContent>
    </Wrapper>
  );
};

Error.propTypes = {
  message: propTypes.string
};

export default Error;
