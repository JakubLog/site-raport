import React from 'react';
import Editable from '../Editable/Editable';
import { StyledWrapper, ImageWrapper, Image, StyledButton, Informations, Name, Email } from './AboutProfile.styles';
import { useAuth } from 'hooks/useAuth';
import { useProfile } from 'hooks/useProfile';
import ChangeImage from 'components/molecules/ChangeImage/ChangeImage';
import { useModal } from 'hooks/useModal';

const AboutProfile = (): JSX.Element => {
  const { logout } = useAuth();
  const { user, updateUserData } = useProfile();
  const { openModal } = useModal();

  return (
    <StyledWrapper>
      <ImageWrapper onClick={() => openModal(<ChangeImage user={user} updateUserData={updateUserData} />, 'Zmień zdjęcie profilowe')}>
        <Image src={user.img} alt={`${user.name}'s image`} />
      </ImageWrapper>
      <Informations>
        <Editable afterEdit={<Name>{user.name}</Name>} name="NAME" />
        <Editable afterEdit={<Email href={`mailto:${user.email}`}>{user.email}</Email>} name="EMAIL" />
      </Informations>
      <StyledButton onClick={logout}>Wyloguj się</StyledButton>
    </StyledWrapper>
  );
};

export default AboutProfile;
