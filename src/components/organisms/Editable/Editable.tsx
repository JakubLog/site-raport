import React from 'react';
import PropTypes from 'prop-types';
import { EditableWrapper } from './Editable.styles';
import EditButton from 'components/molecules/EditButton/EditButton';
import { useDispatch, useSelector } from 'react-redux';
import { changeEditionState, RootTypes } from 'store';
import ConfirmButton from 'components/molecules/ConfirmButton/ConfirmButton';
import { useForm } from 'react-hook-form';
import { useError } from 'hooks/useError';
import { Input } from 'components/atoms/Input/Input';
import { TextArea } from './Editable.styles';
interface props {
  afterEdit: JSX.Element;
  name: string;
  isArea?: boolean;
}

const Editable = ({ afterEdit, name, isArea }: props): JSX.Element => {
  const status = useSelector((store: RootTypes) => store.edit);
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const { dispatchError } = useError();

  const editSubmitProcess = (type = name) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (data: any) => {
      switch (type) {
        case 'NAME':
          console.log(`Name: ${data.NAME} has been changed!`);
          break;
        case 'EMAIL':
          console.log(`Email: ${data.EMAIL} has been changed!`);
          break;
        case 'BIO':
          console.log(`BIO: ${data.BIO} has been changed!`);
          break;
        default:
          const errMessage = "Something went wrong with edit protocol! Please try again! If it still doesn't work, please contact with support!";
          return dispatchError ? dispatchError(errMessage) : console.error(errMessage);
      }
      dispatch(changeEditionState({}));
    };
  };

  const process = editSubmitProcess(name);

  return (
    <EditableWrapper>
      {status ? (
        <form onSubmit={handleSubmit(process)}>
          {isArea ? (
            <TextArea id={name} {...register(name, { required: true })}></TextArea>
          ) : (
            <Input id={name} placeholder={`Editing: ${name}`} {...register(name, { required: true })} isLight />
          )}
          <ConfirmButton />
        </form>
      ) : (
        { ...afterEdit }
      )}
      <EditButton />
    </EditableWrapper>
  );
};

Editable.propTypes = {
  name: PropTypes.string.isRequired,
  isArea: PropTypes.bool
};

export default Editable;
