import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'graphql-hooks';
import Loading from 'components/molecules/Loading/Loading';

interface postProps {
  id: string;
  title: string;
  description: string;
  createdBy: {
    name: string;
    publishedAt: string;
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
        publishedAt
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

  return (
    <div>
      {postLoading ? (
        <Loading />
      ) : (
        postInfo.articles.map(({ title, description, createdBy: { name, publishedAt }, id, image: { url } }: postProps) => (
          <div key={id}>
            <img src={url} alt={title} />
            <h1>{title}</h1>
            <p>{description}</p>
            <p>
              Autor - {name} | {publishedAt}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default Post;
