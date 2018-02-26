import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/home';
import Suggestion from '../pages/suggestion';
import WishList from '../pages/wish-list';

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/wish-list" component={WishList} />
        <Route path="/" component={Suggestion} />
      </Switch>
    </BrowserRouter>
  );
};