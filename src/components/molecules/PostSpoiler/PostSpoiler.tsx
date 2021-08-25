import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Header, Image, Title, Snippet, Content } from './PostSpoiler.styles';
import { useHistory } from 'react-router-dom';

interface props {
  title: string;
  description: string;
  postUrl: string;
  imageSrc?: string;
}

const PostSpoiler = ({
  title,
  postUrl,
  description,
  imageSrc = 'https://img.freepik.com/darmowe-zdjecie/ludzie-w-festiwalu_1160-736.jpg?size=626&ext=jpg&ga=GA1.2.2140585734.1629504000'
}: props): JSX.Element => {
  const history = useHistory();

  return (
    <Wrapper>
      <Header onClick={() => history.push(postUrl)}>
        <Image src={imageSrc} alt={title} />
        <Title>{title}</Title>
      </Header>
      <Snippet>
        <Content>
          <p>{description}</p>
        </Content>
      </Snippet>
    </Wrapper>
  );
};

PostSpoiler.propTypes = {
  title: PropTypes.string.isRequired,
  postUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string
};

export default PostSpoiler;
