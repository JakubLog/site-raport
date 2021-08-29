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
import ProfileProvider from 'hooks/useProfile';

const App = (): JSX.Element => {
  const { error } = useError();
  const { authUser } = useAuth();
  return (
    <>
      <MainTemplate>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/post/:id">
            <Post />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/profile">
            {authUser ? (
              <ProfileProvider>
                <Profile />
              </ProfileProvider>
            ) : (
              <Authenticate />
            )}
          </Route>
          <Route path="/contact">Sign in</Route>
        </Switch>
      </MainTemplate>
      {error ? <Error message={error} /> : null}
    </>
  );
};

export default App;
