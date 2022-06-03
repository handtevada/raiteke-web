import React from 'react';

import Paper from 'components/paper.container';
import CardBlog from 'components/card.blog';

import metaDictionary from 'utils/constants/meta';
import blogs from 'utils/constants/blog';

const Blogs = () => {
  return (
    <section className='py-6'>
      <Paper title='Blogs' desc='My writing channel.'>
        <div className='pt-8'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {blogs.map((blog) => {
              return <CardBlog key={blog.title} {...blog} />;
            })}
          </div>
        </div>
      </Paper>
    </section>
  );
};

export async function getStaticProps() {
  return {
    props: {
      meta: metaDictionary.blog,
    },
  };
}

export default Blogs;
