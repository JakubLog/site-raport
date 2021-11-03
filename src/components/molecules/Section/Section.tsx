import React from 'react';
import PropTypes from 'prop-types';
import { SectionBody, SectionTitle, Wrapper } from './Section.styles';

interface props {
  title: string;
  fullScreen?: boolean;
}

const Section: React.FC<props> = ({ children, fullScreen = false, title = 'Default title', ...rest }) => {
  return (
    <Wrapper fullScreen={fullScreen} {...rest}>
      <SectionTitle fullScreen={fullScreen}>{title}</SectionTitle>
      <SectionBody>{children}</SectionBody>
    </Wrapper>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  fullScreen: PropTypes.bool
};

export default Section;
