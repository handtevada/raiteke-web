import React, { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    document.title = 'HOME | RAITEKE';
  }, []);

  return (
    <>
      <section className='hero is-medium is-bold'>
        <div className='hero-body'>
          <div className='container'>
            <div>
              <h1 className='title is-size-1'>Keerati Yuonghirun</h1>
              <h2 className='subtitle'>Software Engineer (Full Stack Developer)</h2>
            </div>
            <div className='index-social'>
              <a href='https://twitter.com/Algobaleno'>
                <img src='/img/contact/twitter.svg' alt='twitter' width='50' height='50' />
              </a>
              <a href='https://www.instagram.com/directorysc/'>
                <img src='/img/contact/instagram.svg' alt='instagram' width='50' height='50' />
              </a>
              <a href='https://github.com/handtevada'>
                <img src='/img/contact/github.svg' alt='github' width='50' height='50' />
              </a>
              <a href='https://www.linkedin.com/in/keerati-yuonghirun-45a23967/'>
                <img src='/img/contact/linkedin.svg' alt='linkedin' width='50' height='50' />
              </a>
              <a href='https://www.facebook.com/directorys/'>
                <img src='/img/contact/facebook.svg' alt='facebook' width='50' height='50' />
              </a>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .index-social {
          margin-top: 40px;
        }
        .index-social a {
          padding-right: 10px;
          color: #4a4a4a;
        }
        .index-social a:hover {
          color: #3273dc;
        }
        img {
          opacity: 0.8;
        }
      `}</style>
    </>
  );
}
