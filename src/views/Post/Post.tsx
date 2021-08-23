import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'graphql-hooks';
import Loading from 'components/molecules/Loading/Loading';
import { Image, StyledTitle, Description, Author } from './Post.styles';

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
