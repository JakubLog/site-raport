import React from 'react';
import PropTypes from 'prop-types';
import { SectionBody, SectionTitle, Wrapper } from './Section.styles';

interface props {
  children: React.ReactNode;
  title: string;
  fullScreen?: boolean;
}

const Section = ({ children, fullScreen = false, title = 'Default title', ...rest }: props): JSX.Element => {
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
