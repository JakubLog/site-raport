import React from 'react';
import MainTemplate from 'components/templates/MainTemplate';
import { Switch, Route } from 'react-router-dom';
import { useError } from 'hooks/useError';
import Error from 'components/molecules/Error/Error';
import Home from './Home/Home';
import Post from './Post/Post';
import Authenticate from './Authenticate/Authenticate';

const App = (): JSX.Element => {
  const { error } = useError();
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
          <Route path="/news">Hello news</Route>
          <Route path="/profile">
            <Authenticate />
          </Route>
          <Route path="/contact">Sign in</Route>
        </Switch>
      </MainTemplate>
      {error ? <Error message={error} /> : null}
    </>
  );
};

export default App;
