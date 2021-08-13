import React from 'react';
import HeroSrc from 'assets/img/hero.jpg';
import { HeroWrapper, HeroImage, HeroContent, Header, Subheader } from './Hero.styles';

const Hero = (): JSX.Element => {
  return (
    <HeroWrapper>
      <HeroImage src={HeroSrc} alt="Hero image" />
      <HeroContent>
        <Header>Raport.com</Header>
        <Subheader>Your news from Rap World</Subheader>
      </HeroContent>
    </HeroWrapper>
  );
};

export default Hero;
