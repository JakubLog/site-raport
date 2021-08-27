import React from 'react';
import { useHistory } from 'react-router';
import { StyledWrapper, LogoBefore, Logo } from './NavBar.styles';
import Navigation from 'components/molecules/Navigation/Navigation';

const NavBar = (): JSX.Element => {
  const history = useHistory();
  return (
    <StyledWrapper>
      <LogoBefore>
        <Logo onClick={() => history.push('/')}>
          <span style={{ color: '#C7C4DE' }}>Rap</span>ort.com
        </Logo>
      </LogoBefore>
      <Navigation />
    </StyledWrapper>
  );
};

export default NavBar;
