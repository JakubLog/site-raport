import React from 'react';
import { EditableWrapper } from './Editable.styles';
import EditButton from 'components/molecules/EditButton/EditButton';

interface props {
  children: React.ReactNode;
}

const Editable = ({ children }: props): JSX.Element => {
  return (
    <EditableWrapper>
      {children}
      <EditButton />
    </EditableWrapper>
  );
};

export default Editable;
