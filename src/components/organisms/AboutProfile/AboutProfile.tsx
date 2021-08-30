import React from 'react';
import Editable from '../Editable/Editable';
import { StyledWrapper, ImageWrapper, Image, StyledButton, Informations, Name, Email, ChangeImageWrapper, OldImage } from './AboutProfile.styles';
import { useAuth } from 'hooks/useAuth';
import { useProfile } from 'hooks/useProfile';
import { useModal } from 'hooks/useModal';
import { Input } from 'components/atoms/Input/Input';
import { Button } from 'components/atoms/Button/Button';

const AboutProfile = (): JSX.Element => {
  const { openModal } = useModal();
  const { logout } = useAuth();
  const { user } = useProfile();

  return (
    <StyledWrapper>
      <ImageWrapper
        onClick={() =>
          openModal(
            <ChangeImageWrapper>
              <OldImage src="https://avatars.githubusercontent.com/u/77537823?v=4" alt={`${user.name}'s image`} />
              <Input placeholder="Adres URL nowego zdjęcia" />
              <Button>Zmień zdjęcie</Button>
            </ChangeImageWrapper>,
            'Zmień zdjęcie profilowe'
          )
        }
      >
        <Image src="https://avatars.githubusercontent.com/u/77537823?v=4" alt={`${user.name}'s image`} />
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
