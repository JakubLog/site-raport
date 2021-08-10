import React from 'react';
import { Wrapper, StyledLink } from './Navigation.styles';

const Navigation = (): JSX.Element => {
  return (
    <Wrapper>
      <StyledLink exact to="/">
        Home
      </StyledLink>
      <StyledLink to="/news">News</StyledLink>
      <StyledLink to="/author">Author</StyledLink>
      <StyledLink to="/contact">Contact</StyledLink>
    </Wrapper>
  );
};

export default Navigation;
