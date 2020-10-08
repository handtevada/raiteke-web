import React, { useEffect } from 'react';

export default function NotFound() {
  useEffect(() => {
    document.title = '404 | RAITEKE';
  }, []);

  return (
    <section className='hero is-medium is-bold'>
      <div className='hero-body'>
        <div className='container has-text-centered is-size-4'>
          <h1>404 | This page could not be found.</h1>
        </div>
      </div>
    </section>
  );
}
