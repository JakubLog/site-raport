import React from 'react';
import PropTypes from 'prop-types';
import { EditableWrapper } from './Editable.styles';
import EditButton from 'components/molecules/EditButton/EditButton';
import { useDispatch, useSelector } from 'react-redux';
import { changeEditionState, RootTypes } from 'store';
import ConfirmButton from 'components/molecules/ConfirmButton/ConfirmButton';
import { useForm } from 'react-hook-form';
import { useError } from 'hooks/useError';
import { TextArea, StyledInput } from './Editable.styles';
import { useProfile } from 'hooks/useProfile';
import { initialState } from 'store';

interface props {
  afterEdit: JSX.Element;
  name: keyof typeof initialState;
  isArea?: boolean;
}

const errMessage = "Something went wrong with edit protocol! Please try again! If it still doesn't work, please contact with support!";

const Editable: React.FC<props> = ({ afterEdit, name, isArea }) => {
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
          case 'name':
            updateUserData({ name: data.name });
            break;
          case 'email':
            updateUserData({ email: data.email }, true);
            break;
          case 'bio':
            updateUserData({ bio: data.bio });
            break;
          default:
            throw new Error('Cannot find this type in switch');
        }
        reloadData(2000);
      } catch (e) {
        // console.log('Error:', e.message);
        dispatchError ? dispatchError(errMessage) : console.error(errMessage);
      }
      dispatch(changeEditionState({ name }));
    };
  };

  const process = editSubmitProcess(name);

  return (
    <EditableWrapper>
      {status[name] ? (
        <form onSubmit={handleSubmit(process)}>
          {isArea ? (
            <TextArea id={name} {...register(name, { required: true })}>
              {user.bio}
            </TextArea>
          ) : (
            <StyledInput id={name} placeholder={name} {...register(name, { required: true })} isLight />
          )}
          <ConfirmButton />
        </form>
      ) : (
        { ...afterEdit }
      )}
      <EditButton name={name} />
    </EditableWrapper>
  );
};

Editable.propTypes = {
  isArea: PropTypes.bool
};

export default Editable;
