import React, { Fragment } from 'react';

import Header from './Header';
import Footer from './Footer';
import SideMenu from './SideMenu';

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <Fragment>
    <SideMenu />
    <Header />
    {children}
    <Footer />
  </Fragment>
);

export default Layout;
