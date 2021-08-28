import React from 'react';
import Editable from '../Editable/Editable';
import { StyledWrapper, ImageWrapper, Image, StyledButton, Informations, Name, Email } from './AboutProfile.styles';
import { useAuth } from 'hooks/useAuth';

const AboutProfile = (): JSX.Element => {
  const { logout } = useAuth();

  return (
    <StyledWrapper>
      <ImageWrapper>
        <Image src="https://avatars.githubusercontent.com/u/77537823?v=4" alt="#" />
      </ImageWrapper>
      <Informations>
        <Editable afterEdit={<Name>Jakub Michał Fedoszczak</Name>} name="NAME" />
        <Editable afterEdit={<Email href="mailto:kontakt.jakubfedoszczak@gmail.com">kontakt.jakubfedoszczak@gmail.com</Email>} name="EMAIL" />
      </Informations>
      <StyledButton onClick={logout}>Wyloguj się</StyledButton>
    </StyledWrapper>
  );
};

export default AboutProfile;
