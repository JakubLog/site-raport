import React, { useState } from 'react';
import { Wrapper, AboutNewsletter } from './Newsletter.styles';
import { Button } from 'components/atoms/Button/Button';
import { Input } from 'components/atoms/Input/Input';
import { Form } from 'components/atoms/Form/Form';
import { useForm } from 'react-hook-form';

interface formProps {
  email: string;
}

const Newsletter = (): JSX.Element => {
  const [isAdded, setIsAddedState] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const process = ({ email }: formProps) => {
    setIsAddedState(true);
  };

  return (
    <Wrapper>
      <AboutNewsletter>
        Chcesz być na bieżąco z nowościami? Chcesz codziennie dostawać dawkę informacji z RapGry? Zapisz się na nasz Newsletter!
      </AboutNewsletter>
      <Form onSubmit={handleSubmit(process)}>
        <Input
          type="email"
          placeholder={errors.email && !isAdded ? 'Podaj poprawny email!' : 'example@email.com'}
          id="newsletter"
          {...register('email', {
            required: true,
            // eslint-disable-next-line no-useless-escape
            pattern: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
          })}
        />
        <Button aria-label="Zapisz się do newsletter'a" isDisabled={isAdded} disabled={isAdded ? true : false}>
          {isAdded ? 'Dodano!' : 'Zapisz się'}
        </Button>
      </Form>
    </Wrapper>
  );
};

export default Newsletter;
