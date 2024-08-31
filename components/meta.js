import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

const defaultData = {
  title: 'Home',
  keywords: '',
  description: '',
  image: 'https://raiteke.com/img/bg.jpg',
};

const Meta = ({ data = defaultData }) => {
  const {
    title = '',
    keywords = '',
    description = '',
    image = 'https://raiteke.com/img/bg.jpg',
  } = data;
  const websiteUrl = 'https://keerati.xyz/';

  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />

      {/* Open Graph / Facebook  */}
      <meta property='og:type' content='website' />
      <meta property='og:url' content={`${websiteUrl}`} />
      <meta property='og:title' content={`${title} | Keerati`} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />

      {/* Twitter */}
      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content={`${websiteUrl}`} />
      <meta property='twitter:title' content={`${title} | Keerati`} />
      <meta property='twitter:description' content={description} />
      <meta property='twitter:image' content={image} />

      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <title>{`${title.toUpperCase()} | KEERATI`}</title>
    </Head>
  );
};

Meta.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Meta;
