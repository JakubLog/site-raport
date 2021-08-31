import React from 'react';
import Editable from '../Editable/Editable';
import {
  StyledWrapper,
  ImageWrapper,
  Image,
  StyledButton,
  Informations,
  ImagesWrapper,
  Name,
  Email,
  ChangeImageWrapper,
  ChangeImage,
  Form
} from './AboutProfile.styles';
import { useAuth } from 'hooks/useAuth';
import { useProfile } from 'hooks/useProfile';
import { useModal } from 'hooks/useModal';
import { Input } from 'components/atoms/Input/Input';
import { Button } from 'components/atoms/Button/Button';
import { useForm } from 'react-hook-form';
import { Title } from 'components/atoms/Title/Title';

const AboutProfile = (): JSX.Element => {
  const { openModal } = useModal();
  const { logout } = useAuth();
  const { user, updateUserData } = useProfile();

  const { register, handleSubmit } = useForm();

  const process = (data: { newImage: string }) => {
    updateUserData({ img: data.newImage });
    openModal(<Title>Możesz wyjść i odświeżyć stronę!</Title>, 'Zmieniono zdjęcie profilowe');
  };

  return (
    <StyledWrapper>
      <ImageWrapper
        onClick={() =>
          openModal(
            <ChangeImageWrapper>
              <ImagesWrapper>
                <ChangeImage src={user.img} alt={`${user.name}'s image`} />
              </ImagesWrapper>
              <Form onSubmit={handleSubmit(process)}>
                <Input
                  placeholder="Adres URL nowego zdjęcia"
                  {...register('newImage', {
                    required: true,
                    pattern:
                      // eslint-disable-next-line no-useless-escape
                      /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gi
                  })}
                />
                <Button>Zmień zdjęcie</Button>
              </Form>
            </ChangeImageWrapper>,
            'Zmień zdjęcie profilowe'
          )
        }
      >
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
