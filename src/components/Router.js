import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';

const router = () => {
  return (
      <Switch>
        <Route path="/home" exact component={Home} />      
        <Route path="/about" exact component={About} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/contact" exact component={Contact} />
        <Redirect exact from="/" to="/home" />
      </Switch>
  );
};

export default router;
