import React from 'react';
import { Wrapper, AboutNewsletter } from './Newsletter.styles';
import { Button } from 'components/atoms/Button/Button';
import { Input } from 'components/atoms/Input/Input';
import { Form } from 'components/atoms/Form/Form';
import { useForm } from 'react-hook-form';

interface formProps {
  email: string;
}

const Newsletter = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const process = ({ email }: formProps) => {
    console.log(email);
  };

  return (
    <Wrapper>
      <AboutNewsletter>
        Chcesz być na bieżąco z nowościami? Chcesz codziennie dostawać dawkę informacji z RapGry? Zapisz się na nasz Newsletter!
      </AboutNewsletter>
      <Form onSubmit={handleSubmit(process)}>
        <Input
          type="email"
          placeholder={errors.email ? 'Podaj poprawny email!' : 'example@email.com'}
          id="newsletter"
          {...register('email', {
            required: true,
            // eslint-disable-next-line no-useless-escape
            pattern: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
          })}
        />
        <Button>Zapisz się</Button>
      </Form>
    </Wrapper>
  );
};

export default Newsletter;
