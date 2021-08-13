import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, ImageWrapper, NewsImage, ContentWrapper, NewsTitle, NewsContent, NewsParagraph } from './LatestNews.styles';
import { useHistory } from 'react-router-dom';

interface props {
  title: string;
  description: string;
  imageSrc: string;
  postId: string;
}

const LatestNews = ({ postId, title, description, imageSrc }: props): JSX.Element => {
  const history = useHistory();
  const postUrl = `/${postId}`;

  return (
    <Wrapper aria-label={title}>
      <ImageWrapper onClick={() => history.push(postUrl)}>
        <NewsImage src={imageSrc} alt={title} />
      </ImageWrapper>
      <ContentWrapper>
        <NewsTitle onClick={() => history.push(postUrl)}>{title}</NewsTitle>
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
  imageSrc: PropTypes.string.isRequired,
  postId: PropTypes.string.isRequired
};

export default LatestNews;
