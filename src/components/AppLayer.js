import React from 'react';

import Header from './Header/Header';
import Footer from './Footer/Footer';

const AppLayer = (props) => {
  return (
    <React.Fragment>
      <Header />
      {props.children}
      <Footer />
    </React.Fragment>
  );
};

export default AppLayer;
