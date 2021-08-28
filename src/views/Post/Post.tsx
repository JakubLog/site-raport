import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'graphql-hooks';
import Loading from 'components/molecules/Loading/Loading';
import { Image, StyledTitle, Description, Author } from './Post.styles';
import Share from 'components/molecules/Share/Share';

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
  const { data: postInfo, loading: postLoading, error: postError } = useQuery(query);

  const [postTime, setPostTime] = useState('Loading...');
  useEffect(() => {
    if (!postLoading && !postError) {
      const UNIX = Date.parse(postInfo.articles[0]?.createdBy.createdAt);
      const time = new Date(UNIX);
      const parsed = `${time.getDay()}.${time.getMonth()}.${time.getFullYear()} - ${time.getHours()}:${time.getMinutes()}`;
      setPostTime(parsed);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postLoading, postError]);

  if (postError || postInfo?.articles.length === 0)
    return (
      <div>
        <Image src="https://i.pinimg.com/originals/0e/3f/db/0e3fdbd5361db78ff5c9d15c5c50bb53.jpg" alt="Not found post! Error 404" />
        <StyledTitle>Error 404 - Post not found</StyledTitle>
        <Description>We have not post with id like this! Check it or contact with us!</Description>
        <Author>Administration | We so sorry!</Author>
      </div>
    );

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
            <Share url={window.location.href} />
          </div>
        ))
      )}
    </div>
  );
};

export default Post;
