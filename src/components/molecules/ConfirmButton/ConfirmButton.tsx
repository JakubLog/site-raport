import React from 'react';
import { StyledButton } from './ConfirmButton.styles';
import { RootTypes } from 'store';
import { useSelector } from 'react-redux';

const ConfirmButton: React.FC = () => {
  const status = useSelector((store: RootTypes) => store.edit);

  return <StyledButton type="submit">{status ? <p>✓</p> : null}</StyledButton>;
};

export default ConfirmButton;
