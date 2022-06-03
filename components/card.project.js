import React from 'react';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';

const CardProject = ({ title, github, demo, blog, icon, content }) => {
  return (
    <div>
      <div className='bg-gradient-to-r from-white p-4 rounded-md'>
        <div className='flex flex-row h-20'>
          <div className='flex-none pr-2'>
            <IconContext.Provider value={{ color: '#363636', size: '3em' }}>
              {icon}
            </IconContext.Provider>
          </div>
          <div className='grow'>
            <h4 className='font-bold'>{title}</h4>
            <p className='text-sm'>{content}</p>
          </div>
        </div>
        <div className='flex justify-left gap-4'>
          {blog && (
            <a href={blog} target='_blank'>
              <button className='hover:text-sky-500 font-medium'>Blog</button>
            </a>
          )}

          {github && (
            <a href={github} target='_blank'>
              <button className='hover:text-sky-500 font-medium'>Github</button>
            </a>
          )}
          {demo && (
            <a href={demo} target='_blank'>
              <button className='hover:text-sky-500 font-medium'>Demo</button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

CardProject.prototype = {
  title: PropTypes.string.isRequired,
  github: PropTypes.string,
  demo: PropTypes.string,
  blog: PropTypes.string,
  icon: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default CardProject;
