import React from 'react';
import { Route, BrowserRouter, Navigate } from 'react-router-dom';

import Home from './Home/Home';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import Detail from './Detail/Detail';

const router = () => {
  return (
    <BrowserRouter>
      <Route path="/home" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/portfolio" exact component={Portfolio} />
      <Route path="/portfolio/detail/:id" exact component={Detail} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </BrowserRouter>
  );
};

export default router;
