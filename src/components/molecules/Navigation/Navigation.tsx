import React from 'react';
import { Wrapper, StyledLink } from './Navigation.styles';

const Navigation: React.FC = () => {
  return (
    <Wrapper>
      <StyledLink exact to="/">
        Home
      </StyledLink>
      <StyledLink to="/news">News</StyledLink>
      <StyledLink to="/profile">Profile</StyledLink>
      <StyledLink to="/contact">Contact</StyledLink>
    </Wrapper>
  );
};

export default Navigation;
