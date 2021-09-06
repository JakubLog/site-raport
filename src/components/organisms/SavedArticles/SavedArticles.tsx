import React, { useEffect, useState } from 'react';
import { StyledWrapper, Header, StyledTitle, StyledSubTitle, Content, Fav } from './SavedArticles.styles';
import { useFavorite } from 'hooks/useFavorite';
import { useProfile } from 'hooks/useProfile';
import Loading from 'components/molecules/Loading/Loading';
import Favorite from 'components/molecules/Favorite/Favorite';

const SavedArticles = (): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [favorite, setFavorite] = useState<any[]>([]);
  const [isLoading, setLoadingState] = useState(true);
  const { user } = useProfile();
  const { getAllFavorite } = useFavorite();

  useEffect(() => {
    setLoadingState(true);
    (async () => {
      if (user.id) {
        try {
          const response = await getAllFavorite(user.id);
          if (response === undefined) throw new Error('Response is not an array. Type of response is undefined.');
          setFavorite(response.reverse());
          setLoadingState(false);
        } catch (e) {
          console.error(e);
        }
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <StyledWrapper>
      <Header>
        <StyledTitle>Ulubione artykuły</StyledTitle>
        <StyledSubTitle>
          Obecnie posiadasz <Fav>{isLoading ? 'ładowanie...' : favorite.length}</Fav> postów w swoim przenośnym schowku. Zostaną one tu tak długo jak
          tylko będziesz chciał, a jeżeli ci się już znudzą, możesz je usunąć i zastąpić nowymi!
        </StyledSubTitle>
      </Header>
      <Content>
        {favorite.length === 0 ? (
          'Obecnie nie masz zapisanych żadnych postów, zmień to!'
        ) : isLoading ? (
          <Loading />
        ) : (
          favorite.map((id, i) => <Favorite postId={id} iteration={i} />)
        )}
      </Content>
    </StyledWrapper>
  );
};

export default SavedArticles;
