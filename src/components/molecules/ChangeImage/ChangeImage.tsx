import React from 'react';
import { Wrapper, Image, Form } from './ChangeImage.styles';
import { Input } from 'components/atoms/Input/Input';
import { Button } from 'components/atoms/Button/Button';
import { Title } from 'components/atoms/Title/Title';
import { useForm } from 'react-hook-form';
import { useModal } from 'hooks/useModal';

interface props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  updateUserData: any;
}

const ChangeImage: React.FC<props> = ({ user, updateUserData }) => {
  const { openModal } = useModal();
  const { register, handleSubmit } = useForm();

  const process = (data: { newImage: string }) => {
    updateUserData({ img: data.newImage });
    openModal(<Title>Możesz wyjść i odświeżyć stronę!</Title>, 'Zmieniono zdjęcie profilowe');
  };

  return (
    <Wrapper>
      <Image src={user.img} alt={`${user.name}'s image`} />
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
    </Wrapper>
  );
};

export default ChangeImage;
