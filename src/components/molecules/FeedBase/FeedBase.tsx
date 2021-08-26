import React from 'react';
import PropTypes from 'prop-types';
import { StyledWrapper, Header, Title, Content } from './FeedBase.styles';

interface props {
  children: React.ReactNode;
  height: string;
  bgColor: string;
  title: string;
}

const FeedBase = ({ children, height, bgColor, title }: props): JSX.Element => {
  return (
    <StyledWrapper bgColor={bgColor} height={height}>
      <Header>
        <Title>{title}</Title>
      </Header>
      <Content>{children}</Content>
    </StyledWrapper>
  );
};

FeedBase.propTypes = {
  bgColor: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default FeedBase;
