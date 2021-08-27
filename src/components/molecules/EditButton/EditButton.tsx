import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './EditButton.styles';

interface props {
  isActive?: boolean;
}

const EditButton = ({ isActive = false }: props): JSX.Element => {
  return <StyledButton isActive>{isActive ? <p>Zapisz zmiany</p> : <p>✎</p>}</StyledButton>;
};

EditButton.propTypes = {
  isActive: PropTypes.bool
};

export default EditButton;
