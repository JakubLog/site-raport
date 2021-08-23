import React from 'react';
import { SocialButtons as SocialButtonsWrapper } from './SocialButtons.styles';
import { SocialButton } from 'components/atoms/SocialButton/SocialButton';

const SocialButtons = (): JSX.Element => {
  return (
    <SocialButtonsWrapper>
      <SocialButton>Google</SocialButton>
    </SocialButtonsWrapper>
  );
};

export default SocialButtons;
