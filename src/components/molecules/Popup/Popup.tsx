import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, StyledTitle, Content, Paragraph } from './Popup.styles';

interface props {
  message: string;
}

const defaultMessage = 'Chcemy tylko powiedzieć... że jesteś najlepszy!';

const Popup: React.FC<props> = ({ message = defaultMessage }) => {
  return (
    <Wrapper>
      <StyledTitle>Uwaga!</StyledTitle>
      <Content>
        <Paragraph>{message}</Paragraph>
      </Content>
    </Wrapper>
  );
};

Popup.propTypes = {
  message: PropTypes.string.isRequired
};

export default Popup;
