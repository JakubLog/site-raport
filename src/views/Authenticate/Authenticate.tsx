import React, { useState } from 'react';
import { Button } from 'components/atoms/Button/Button';
import FormField from 'components/molecules/FormField/FormField';
import SocialButtons from 'components/molecules/SocialButtons/SocialButtons';
import { useForm } from 'react-hook-form';
import { Info, StyledSubtitle, StyledForm, StyledTitle, Block } from './Authenticate.styles';
import { ErrorParagraph } from 'components/atoms/ErrorParagraph/ErrorParagraph';

interface signInProps {
  email: string;
  password: string;
}
interface signUpProps {
  newEmail: string;
  newPassword: string;
  confirmPassword: string;
}

const Authenticate = (): JSX.Element => {
  const [signInError, setSignInError] = useState<boolean | null>(null);
  const [signUpError, setSignUpError] = useState<boolean | null>(null);

  const {
    register: registerSignIn,
    handleSubmit: signInFunction,
    formState: { errors: signInErrors }
  } = useForm();

  const {
    register: registerSignUp,
    handleSubmit: signUpFunction,
    formState: { errors: signUpErrors }
  } = useForm();

  const signin = (data: signInProps) => {
    console.log(data);
  };

  const signup = (data: signUpProps) => {
    setSignUpError(null);
    try {
      if (data.newPassword !== data.confirmPassword) throw new Error('Passwords not match!');
    } catch (e) {
      setSignUpError(true);
    }
  };

  return (
    <>
      <Block>
        <Info>
          <div>
            <StyledTitle>Zaloguj się na swoje konto</StyledTitle>
            <StyledSubtitle>Śledź najlepsze playlisty, bądź na bieżąco oraz zapisuj ulubione artykuły!</StyledSubtitle>
          </div>
        </Info>
        <StyledForm onSubmit={signInFunction(signin)}>
          <FormField
            label="E-mail"
            placeholder="example@email.com"
            id="email"
            {...registerSignIn('email', {
              required: true,
              pattern:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            })}
          />
          {signInErrors.email && <ErrorParagraph>To pole jest wymagane!</ErrorParagraph>}
          <FormField label="Password" id="password" type="password" {...registerSignIn('password', { required: true, minLength: 6 })} />
          {signInErrors.password && <ErrorParagraph>To pole jest wymagane!</ErrorParagraph>}
          {signInError && <ErrorParagraph>Podano złe dane logowania!</ErrorParagraph>}
          <Button type="submit">Zaloguj się</Button>
        </StyledForm>
      </Block>
      <Block>
        <Info>
          <div>
            <StyledTitle>Użyj social media'ów!</StyledTitle>
            <StyledSubtitle>Nie męcz się z loginami i hasłami, użyj już istniejących serwisów!</StyledSubtitle>
          </div>
        </Info>
        <SocialButtons />
      </Block>
      <Block>
        <Info>
          <div>
            <StyledTitle>Załóż swoje własne konto</StyledTitle>
            <StyledSubtitle>Już dzisiaj zacznij śledzić polski rap i bądź na bieżąco!</StyledSubtitle>
          </div>
        </Info>
        <StyledForm onSubmit={signUpFunction(signup)}>
          <FormField
            label="E-mail"
            placeholder="example@email.com"
            id="email"
            {...registerSignUp('newEmail', {
              required: true,
              pattern:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            })}
          />
          {signUpErrors.newEmail && <ErrorParagraph>Podaj poprawny adres e-mail!</ErrorParagraph>}
          <FormField label="Your password" id="password" type="password" {...registerSignUp('newPassword', { required: true, minLength: 6 })} />
          {signUpErrors.newPassword && <ErrorParagraph>Hasło powinno zawierać conajmniej 6 znaków!</ErrorParagraph>}
          <FormField
            label="Confirm password"
            id="confirmpassword"
            type="password"
            {...registerSignUp('confirmPassword', { required: true, minLength: 6 })}
          />
          {signUpErrors.confirmPassword && <ErrorParagraph>To pole jest wymagane!</ErrorParagraph>}
          {signUpError && <ErrorParagraph>Hasła nie są takie same!</ErrorParagraph>}
          <Button type="submit">Zarejestruj się</Button>
        </StyledForm>
      </Block>
    </>
  );
};

export default Authenticate;
