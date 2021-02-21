import React from 'react';
import PropTypes from 'prop-types';

import Header from '@components/Header';
import Footer from '@components/Footer';

function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="text-gray-700 body-font overflow-hidden">
          <div className="container flex flex-col px-5 py-12 mx-auto max-w-screen-sm">
            {props.children}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {};
Layout.defaultProps = {};

export default Layout;
