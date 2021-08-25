import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { themeProps } from 'assets/css/theme';

export const Wrapper = styled.div<{ height: string; bgColor: string }>`
  width: 100%;
  height: ${({ height }) => height}px;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 20px;
  display: grid;
  grid-template-rows: 50px auto;
  box-shadow: ${({ theme }: themeProps) => theme.shadows.primary};
  overflow: hidden;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 25px;
  color: ${({ theme }: themeProps) => theme.colors.purpleLighten};
  font-weight: 400;
  letter-spacing: 1px;
`;

export const Content = styled.div`
  position: relative;
`;

interface props {
  children: React.ReactNode;
  height: string;
  bgColor: string;
  title: string;
}

const FeedBase = ({ children, height, bgColor, title }: props): JSX.Element => {
  return (
    <Wrapper bgColor={bgColor} height={height}>
      <Header>
        <Title>{title}</Title>
      </Header>
      <Content>{children}</Content>
    </Wrapper>
  );
};

FeedBase.propTypes = {
  bgColor: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default FeedBase;
