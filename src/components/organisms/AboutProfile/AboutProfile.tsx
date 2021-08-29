import React from 'react';
import Editable from '../Editable/Editable';
import { StyledWrapper, ImageWrapper, Image, StyledButton, Informations, Name, Email } from './AboutProfile.styles';
import { useAuth } from 'hooks/useAuth';
import { useProfile } from 'hooks/useProfile';

const AboutProfile = (): JSX.Element => {
  const { logout } = useAuth();
  const { user } = useProfile();

  return (
    <StyledWrapper>
      <ImageWrapper>
        <Image src="https://avatars.githubusercontent.com/u/77537823?v=4" alt="#" />
      </ImageWrapper>
      <Informations>
        <Editable afterEdit={<Name>{user.name}</Name>} name="NAME" />
        <Editable afterEdit={<Email href={`emailto:${user.email}`}>{user.email}</Email>} name="EMAIL" />
      </Informations>
      <StyledButton onClick={logout}>Wyloguj się</StyledButton>
    </StyledWrapper>
  );
};

export default AboutProfile;
