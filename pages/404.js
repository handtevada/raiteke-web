import React from 'react';

import metaDictionary from 'utils/constants/meta';

const NotFound = () => {
  return (
    <section className='py-64'>
      <div className='flex justify-center items-center h-5/6'>
        <h1 className='text-2xl'>404 | This page could not be found.</h1>
      </div>
    </section>
  );
};

export async function getStaticProps() {
  return {
    props: {
      meta: metaDictionary.notfound,
    },
  };
}

export default NotFound;
