import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';

const router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" exact component={Home} />      
        <Route path="/about" exact component={About} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/contact" exact component={Contact} />
        <Redirect exact from="/" to="/home" />
      </Switch>
    </BrowserRouter>
  );
};

export default router;
