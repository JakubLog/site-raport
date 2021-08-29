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
import { useProfile } from 'hooks/useProfile';

interface props {
  afterEdit: JSX.Element;
  name: string;
  isArea?: boolean;
}

const errMessage = "Something went wrong with edit protocol! Please try again! If it still doesn't work, please contact with support!";

const Editable = ({ afterEdit, name, isArea }: props): JSX.Element => {
  const status = useSelector((store: RootTypes) => store.edit);
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const { dispatchError } = useError();
  const { user, updateUserData, reloadData } = useProfile();

  const editSubmitProcess = (type = name) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return async (data: any) => {
      try {
        switch (type) {
          case 'NAME':
            updateUserData({ name: data.NAME });
            break;
          case 'EMAIL':
            updateUserData({ email: data.EMAIL }, true);
            break;
          case 'BIO':
            updateUserData({ bio: data.BIO });
            break;
          default:
            throw new Error('Cannot find this type in switch');
        }
        reloadData(2000);
      } catch (e) {
        // console.log('Error:', e.message);
        dispatchError ? dispatchError(errMessage) : console.error(errMessage);
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
            <TextArea id={name} {...register(name, { required: true })}>
              {user.bio}
            </TextArea>
          ) : (
            <Input id={name} placeholder={`sd`} {...register(name, { required: true })} isLight />
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
