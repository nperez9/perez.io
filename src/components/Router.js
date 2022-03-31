import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './home/Home';
import About from './about/About';
import Portfolio from './portfolio/Portfolio';
import Contact from './contact/Contact';

const router = () => {
  return (
      <Switch>
        <Route path="/home" exact component={Home} />      
        <Route path="/about" exact component={About} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/portfolio/:id" exact component={Portfolio} />
        <Route path="/contact" exact component={Contact} />
        <Redirect exact from="/" to="/home" />
      </Switch>
  );
};

export default router;
