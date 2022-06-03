import React from 'react';

// Components
import Navbar from 'components/navbar';
import Meta from 'components/meta';
import Footer from 'components/footer';

// Styles
import 'styles/globals.css';
import 'react-vertical-timeline-component/style.min.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Meta data={pageProps.meta} />
      <div className='container mx-auto p-4'>
        <Navbar />
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}
