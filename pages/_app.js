import React from 'react';
import Head from 'next/head';
import Navbar from '../components/navbar';
import '../assets/styles/styles.scss';
import '../assets/styles/timeline.scss';

export default function App({ Component, pageProps }) {
  const currentDate = new Date();
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta content='width=device-width, initial-scale=1.0' name='viewport' />
        <title>RAITEKE</title>

        <meta content='' name='description' />
        <meta content='' name='keywords' />

        <meta property='og:url' content='https://raiteke.com' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='RAITEKE - KEERATI PORTFOLIO' />
        <meta
          property='og:description'
          content="All the time traveling in the world can't make someone love you."
        />
        <meta property='og:image' content='https://raiteke.com/img/bg.jpg' />

        <meta content='summary_large_image' name='twitter:card' />
        <meta content='@Algobaleno' name='twitter:site' />
        <meta content='@Algobaleno' name='twitter:creator' />
        <meta content='RAITEKE - KEERATI PORTFOLIO' name='twitter:title' />
        <meta
          content="All the time traveling in the world can't make someone love you."
          name='twitter:description'
        />
        <meta content='https://raiteke.com/img/bg.jpg' name='twitter:image' />
      </Head>
      <section className='section'>
        <div className='container'>
          <Navbar isIndex='true' />
          <Component {...pageProps} />
        </div>
      </section>

      <footer className='web-footer is-size-6'>
        {`@${currentDate.getFullYear()} | Photo by Vincent Guth on Unsplash`}
      </footer>
    </>
  );
}
