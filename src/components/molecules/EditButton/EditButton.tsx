import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './EditButton.styles';
import { changeEditionState, RootTypes } from 'store';
import { useSelector, useDispatch } from 'react-redux';

const EditButton = (): JSX.Element => {
  const status = useSelector((store: RootTypes) => store.edit);
  const dispatch = useDispatch();

  return <StyledButton onClick={() => dispatch(changeEditionState({}))}>{!status ? <p>✎</p> : null}</StyledButton>;
};

EditButton.propTypes = {
  isActive: PropTypes.bool
};

export default EditButton;
