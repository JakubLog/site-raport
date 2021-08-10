import React from 'react';
import MainTemplate from 'components/templates/MainTemplate';
import { Switch, Route } from 'react-router-dom';

const App = (): JSX.Element => {
  return (
    <MainTemplate>
      <Switch>
        <Route path="/" exact>
          Hello react
        </Route>
        <Route path="/news">Hello news</Route>
        <Route path="/author">Hello author</Route>
        <Route path="/contact">Hello contact</Route>
      </Switch>
    </MainTemplate>
  );
};

export default App;
