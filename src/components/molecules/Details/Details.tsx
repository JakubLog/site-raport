import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Summary, Content } from './Details.styles';

interface props {
  title: string;
  content: string;
}

const Details: React.FC<props> = ({ title, content }) => {
  return (
    <Wrapper>
      <Summary>{title}</Summary>
      <Content>
        <p>{content}</p>
      </Content>
    </Wrapper>
  );
};

Details.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default Details;
