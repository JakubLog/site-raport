import React, { useEffect, useState } from 'react';
import PostSpoiler from 'components/molecules/PostSpoiler/PostSpoiler';
import { useQuery } from 'graphql-hooks';
import Loading from 'components/molecules/Loading/Loading';

interface article {
  id: string;
  title: string;
  description: string;
  image: {
    url: string;
  };
}

const PostSpoilers = (): JSX.Element => {
  // States
  const [articles, setArticles] = useState([]);

  // Query handling
  const query = `{articles(last: 5){id,title,description,image{url}}}`;
  const { data, loading } = useQuery(query);

  useEffect(() => {
    if (!loading) {
      const { articles } = data;
      setArticles(articles);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        articles.map(({ id, title, description, image: { url: src } }: article) => (
          <PostSpoiler key={id} title={title} postUrl={`/post/${id}`} description={description} imageSrc={src} />
        ))
      )}
    </div>
  );
};

export default PostSpoilers;
