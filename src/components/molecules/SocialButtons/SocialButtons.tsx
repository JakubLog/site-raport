import React from 'react';
import { SocialButtons as SocialButtonsWrapper } from './SocialButtons.styles';
import { SocialButton } from 'components/atoms/SocialButton/SocialButton';
import { useAuth } from 'hooks/useAuth';

const SocialButtons: React.FC = () => {
  const { loginWithGoogle } = useAuth();
  return (
    <SocialButtonsWrapper>
      <SocialButton onClick={loginWithGoogle}>Google</SocialButton>
    </SocialButtonsWrapper>
  );
};

export default SocialButtons;
