import React from 'react';
import PropTypes from 'prop-types';
import { SectionBody, SectionTitle, Wrapper } from './Section.styles';

interface props {
  children: React.ReactNode;
  title: string;
}

const Section = ({ children, title = 'Default title' }: props) => {
  return (
    <Wrapper>
      <SectionTitle>{title}</SectionTitle>
      <SectionBody>{children}</SectionBody>
    </Wrapper>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired
};

export default Section;
