import React from 'react';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';

const CardContact = ({ link, title, content, icon }) => {
  return (
    <a href={link} target='_blank'>
      <div className='group flex items-center p-4 bg-gradient-to-r from-white rounded-xl'>
        <div className='p-2 md:p-4'>
          <IconContext.Provider value={{ color: '#363636', size: '3em' }}>
            {icon}
          </IconContext.Provider>
        </div>
        <div className='grow'>
          <h4 className='font-bold group-hover:-translate-y-2 transition ease-in-out duration-700 text-xl'>
            {title}
          </h4>
          <p className='font-light'>{content}</p>
        </div>
      </div>
    </a>
  );
};

CardContact.prototype = {
  link: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  icon: PropTypes.node,
};

export default CardContact;
