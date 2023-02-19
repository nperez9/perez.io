import React, { Fragment } from 'react';

import Header from './Header';
import Footer from './Footer';
import SideMenu from './SideMenu';

const Layout = ({ children }) => (
  <Fragment>
    <SideMenu />
    <Header />
      {children}
    <Footer />
  </Fragment>
);

export default Layout;