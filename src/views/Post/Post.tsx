import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'graphql-hooks';
import Loading from 'components/molecules/Loading/Loading';
import styled from 'styled-components';
import { themeProps } from 'assets/css/theme';
import { Title } from 'components/atoms/Title/Title';

export const Image = styled.img`
  width: 100%;
  border-radius: 20px;
  box-shadow: ${({ theme }: themeProps) => theme.shadows.primary};
`;

export const StyledTitle = styled(Title)`
  margin-top: 15px;
  text-align: center;
  font-size: 35px;
`;
export const Description = styled.p`
  text-align: justify;
  font-size: 20px;
  letter-spacing: 1px;
`;
export const Author = styled.div`
  width: fit-content;
  margin: 0 auto;
  opacity: 0.7;
`;

interface postProps {
  id: string;
  title: string;
  description: string;
  createdBy: {
    name: string;
    createdAt: string;
  };
  image: {
    url: string;
  };
}

const Post = (): JSX.Element => {
  const { id: postId } = useParams<{ id: string }>();
  const query = `{
    articles(where: {id: "${postId}"}) {
      description
      createdBy {
        name
        createdAt
      }
      title
      id
      image {
        url
      }
    }
  }
  `;
  const { data: postInfo, loading: postLoading } = useQuery(query);

  const [postTime, setPostTime] = useState('Loading...');
  useEffect(() => {
    if (!postLoading) {
      const UNIX = Date.parse(postInfo.articles[0].createdBy.createdAt);
      const time = new Date(UNIX);
      const parsed = `${time.getDay()}.${time.getMonth()}.${time.getFullYear()} - ${time.getHours()}:${time.getMinutes()}`;
      setPostTime(parsed);
    }
  }, [postLoading]);

  return (
    <div>
      {postLoading ? (
        <Loading />
      ) : (
        postInfo.articles.map(({ title, description, createdBy: { name }, id, image: { url } }: postProps) => (
          <div key={id}>
            <Image src={url} alt={title} />
            <StyledTitle>{title}</StyledTitle>
            <Description>{description}</Description>
            <Author>
              {name} | {postTime}
            </Author>
          </div>
        ))
      )}
    </div>
  );
};

export default Post;
