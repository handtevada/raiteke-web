import React from 'react';
import { IconContext } from 'react-icons';

import metaDictionary from 'utils/constants/meta';
import socialList from 'utils/constants/social';

const Home = () => {
  return (
    <section className='px-8 py-64'>
      <div className='flex flex-col justify-center'>
        <div>
          <h1 className='text-4xl font-semibold mb-2'>Keerati Yuonghirun</h1>
          <h2 className='text-md'>Software Engineer (Full Stack Developer)</h2>
        </div>
        <div className='flex py-6'>
          {socialList.map((social) => {
            return (
              <a key={social.link} href={social.link} className='pr-3'>
                <IconContext.Provider value={{ color: '#363636', size: '3em' }}>
                  {social.icon}
                </IconContext.Provider>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export async function getStaticProps() {
  return {
    props: {
      meta: metaDictionary.home,
    },
  };
}

export default Home;
