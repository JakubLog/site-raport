import React from 'react';
import Section from 'components/molecules/Section/Section';
import { Wrapper } from './News.styles';
import PostSpoilers from 'components/organisms/PostSpoilers/PostSpoilers';
import Feeds from 'components/templates/Feeds/Feeds';

const News = (): JSX.Element => {
  return (
    <Wrapper>
      <Section title="News📰" fullScreen>
        <PostSpoilers />
      </Section>
      <Feeds />
    </Wrapper>
  );
};

export default News;
