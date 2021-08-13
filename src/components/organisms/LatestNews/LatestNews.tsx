import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, ImageWrapper, NewsImage, ContentWrapper, NewsTitle, NewsContent, NewsParagraph } from './LatestNews.styles';

interface props {
  title: string;
  description: string;
  imageSrc: string;
}

const LatestNews = ({ title, description, imageSrc }: props): JSX.Element => {
  return (
    <Wrapper aria-label={title}>
      <ImageWrapper>
        <NewsImage src={imageSrc} alt={title} />
      </ImageWrapper>
      <ContentWrapper>
        <NewsTitle>{title}</NewsTitle>
        <NewsContent>
          <NewsParagraph>{description}</NewsParagraph>
        </NewsContent>
      </ContentWrapper>
    </Wrapper>
  );
};

LatestNews.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired
};

export default LatestNews;
