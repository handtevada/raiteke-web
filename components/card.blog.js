import React from 'react';
import PropTypes from 'prop-types';

const CardBlog = ({ title, thumbnail, link, content }) => {
  return (
    <a href={link} target='_blank'>
      <div className='bg-gradient-to-r from-white p-4 rounded-md'>
        <div className='grid grid-cols-3 gap-2'>
          <img src={thumbnail} alt={title} />
          <div className='col-span-2'>
            <h4 className='font-bold'>{title}</h4>
            <p className='text-sm'>{content}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

CardBlog.prototype = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default CardBlog;
