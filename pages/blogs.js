import React, { useEffect } from 'react';
import CardBlog from '../components/card.blog';

export default function Blogs() {
  useEffect(() => {
    document.title = 'BLOG | RAITEKE';
  }, []);

  return (
    <div className='component'>
      <div className='tile is-ancestor'>
        <div className='tile is-parent'>
          <div className='tile is-child box component-box'>
            <p className='subtitle'>
              <span className='component-title'>BLOGS</span>
              <span> | My writing channel.</span>
            </p>
            <div className='columns'>
              <div className='column'>
                <CardBlog
                  key='Engineer Indy'
                  title='Engineer Indy'
                  link='https://www.engineerindy.com'
                  thumbnail='/img/blog-engineer-indy2.png'
                  content="This blog is about my interest. Ex. Technology, Programming, Engineer, Philosophy, Favorite movie, Reviews. It's my experience."
                />
              </div>
              <div className='column'>
                <CardBlog
                  key='Medium'
                  title='Medium'
                  link='https://medium.com/@directorys'
                  thumbnail='/img/blog-medium2.png'
                  content='This blog is about my programming experiment. I write it when i build some web or when i have the idea about software development.'
                />
              </div>
              <div className='column'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
