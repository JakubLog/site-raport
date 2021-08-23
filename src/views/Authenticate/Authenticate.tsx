import React from 'react';
import { Button } from 'components/atoms/Button/Button';
import FormField from 'components/molecules/FormField/FormField';
import SocialButtons from 'components/molecules/SocialButtons/SocialButtons';
import { useForm } from 'react-hook-form';
import { Info, StyledSubtitle, StyledForm, StyledTitle, Block } from './Authenticate.styles';

interface signInProps {
  data: {
    email: string;
    password: string;
  };
}
interface signUpProps {
  data: {
    newEmail: string;
    newPassword: string;
    confirmPassword: string;
  };
}

const Authenticate = (): JSX.Element => {
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
    console.log(data);
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
          <FormField label="E-mail" placeholder="example@email.com" id="email" {...registerSignIn('email', { required: true })} />
          {signInErrors.email && <p>Email</p>}
          <FormField label="Password" id="password" type="password" {...registerSignIn('password', { required: true, minLength: 6 })} />
          {signInErrors.password && <p>Password</p>}
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
          <FormField label="E-mail" placeholder="example@email.com" id="email" {...registerSignUp('newEmail', { required: true })} />
          {signUpErrors.newEmail && <p>newEmail</p>}
          <FormField label="Your password" id="password" type="password" {...registerSignUp('newPassword', { required: true, minLength: 6 })} />
          {signUpErrors.newPassword && <p>newPassword</p>}
          <FormField
            label="Confirm password"
            id="confirmpassword"
            type="confirmpassword"
            {...registerSignUp('confirmPassword', { required: true, minLength: 6 })}
          />
          {signUpErrors.confirmPassword && <p>confirmPassword</p>}
          <Button type="submit">Zarejestruj się</Button>
        </StyledForm>
      </Block>
    </>
  );
};

export default Authenticate;
