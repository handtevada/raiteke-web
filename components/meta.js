import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

const Meta = ({ data }) => {
  const {
    title = '',
    keywords = '',
    description = '',
    image = 'https://raiteke.com/img/bg.jpg',
  } = data;

  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />

      {/* Open Graph / Facebook  */}
      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://raiteke.com/' />
      <meta property='og:title' content={`${title} | Raiteke`} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />

      {/* Twitter */}
      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content='https://raiteke.com/' />
      <meta property='twitter:title' content={`${title} | Raiteke`} />
      <meta property='twitter:description' content={description} />
      <meta property='twitter:image' content={image} />

      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <title>{`${title.toUpperCase()} | RAITEKE`}</title>
    </Head>
  );
};

Meta.propTypes = {
  data: PropTypes.object.isRequired,
};

Meta.defaultProps = {
  data: {
    title: 'Home',
    keywords: '',
    description: '',
    image: 'https://raiteke.com/img/bg.jpg',
  },
};

export default Meta;
