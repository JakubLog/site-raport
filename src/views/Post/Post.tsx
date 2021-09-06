import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'graphql-hooks';
import Loading from 'components/molecules/Loading/Loading';
import { Image, StyledTitle, Description, Author, Favorite } from './Post.styles';
import Share from 'components/molecules/Share/Share';
import { useError } from 'hooks/useError';
import { useProfile } from 'hooks/useProfile';
import { useFavorite } from 'hooks/useFavorite';
import { usePopup } from 'hooks/usePopup';

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

const Post: React.FC = () => {
  // Global variables, hooks
  const { dispatchError } = useError();

  // Post getting mechanisms
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

  // Post favorite adding mechanism
  const [isActive, setActiveState] = useState(false);
  const [favoriteLoading, setFavoriteLoading] = useState(true);
  const { user } = useProfile();
  const { isFavoritePost, addFavoritePost, removeFavoritePost } = useFavorite();
  const { displayPopup } = usePopup();

  useEffect(() => {
    (async () => {
      setFavoriteLoading(true);
      if (user.email !== undefined) {
        setActiveState(false);
        const response = await isFavoritePost(postId, user.id);
        response && setActiveState(response);
      }
      setFavoriteLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, postId]);

  const changingFavorite = useCallback(() => {
    setActiveState((prev) => {
      try {
        if (prev === true) {
          removeFavoritePost(postId, user.id);
          displayPopup('Usunięto artykuł z ulubionych!');
        }
        if (prev === false) {
          addFavoritePost(postId, user.id);
          displayPopup('Dodano artykuł do ulubionych!');
        }
      } catch (err) {
        // console.error(err.message);
        const errMessage = 'Something went wrong with adding this post to your profile. Please try again or contact with us!';
        dispatchError ? dispatchError(errMessage) : console.error(errMessage);
      }
      return !prev;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId, user, dispatchError]);

  // Error handling
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
      {postLoading || favoriteLoading ? (
        <Loading />
      ) : (
        postInfo.articles.map(({ title, description, createdBy: { name }, id, image: { url } }: postProps) => (
          <div key={id} style={{ position: 'relative' }}>
            <Image src={url} alt={title} />
            <StyledTitle>{title}</StyledTitle>
            <Description>{description}</Description>
            <Author>
              {name} | {postTime}
            </Author>
            <Share url={window.location.href} />
            {user.email && <Favorite isActive={isActive} onClick={changingFavorite} />}
          </div>
        ))
      )}
    </div>
  );
};

export default Post;
