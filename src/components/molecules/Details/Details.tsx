import React from 'react';
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

export default Details;
