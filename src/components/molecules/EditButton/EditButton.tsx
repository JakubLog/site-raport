import React from 'react';
import { StyledButton } from './EditButton.styles';
import { changeEditionState, RootTypes } from 'store';
import { useSelector, useDispatch } from 'react-redux';
import { initialState } from 'store';

interface props {
  name: keyof typeof initialState;
}

const EditButton: React.FC<props> = ({ name }) => {
  const status = useSelector((store: RootTypes) => store.edit);
  const dispatch = useDispatch();

  return <StyledButton onClick={() => dispatch(changeEditionState({ name }))}>{!status[name] ? <p>✎</p> : null}</StyledButton>;
};

export default EditButton;
