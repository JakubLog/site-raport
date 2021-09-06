import React from 'react';
import MainTemplate from 'components/templates/MainTemplate';
import { Switch, Route } from 'react-router-dom';
import { useError } from 'hooks/useError';
import Error from 'components/molecules/Error/Error';
import Home from './Home/Home';
import Post from './Post/Post';
import Authenticate from './Authenticate/Authenticate';
import { useAuth } from 'hooks/useAuth';
import Profile from './Profile/Profile';
import News from './News/News';
import FavoriteProvider from 'hooks/useFavorite';
import Modal from 'components/organisms/Modal/Modal';
import { usePopup } from 'hooks/usePopup';
import Popup from 'components/molecules/Popup/Popup';
import ProfileProvider from 'hooks/useProfile';

const App: React.FC = () => {
  const { error } = useError();
  const { authUser } = useAuth();
  const { popup } = usePopup();

  return (
    <>
      <MainTemplate>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/post/:id">
            <ProfileProvider errorVisible={false}>
              <FavoriteProvider>
                <Post />
              </FavoriteProvider>
            </ProfileProvider>
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/profile">
            {authUser ? (
              <ProfileProvider>
                <FavoriteProvider>
                  <Profile />
                </FavoriteProvider>
              </ProfileProvider>
            ) : (
              <Authenticate />
            )}
          </Route>
          <Route path="/contact">Sign in</Route>
        </Switch>
      </MainTemplate>
      <Modal />
      {popup ? <Popup message={popup} /> : null}
      {error ? <Error message={error} /> : null}
    </>
  );
};

export default App;
