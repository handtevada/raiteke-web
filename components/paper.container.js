import React from 'react';
import PropTypes from 'prop-types';

const Paper = ({ title, desc, children }) => {
  return (
    <div className='paper__container rounded-lg p-6 overflow-scroll bg-gradient-to-b from-gray-200'>
      <h1 className='mb-2'>
        <span className='text-3xl font-semibold mr-2'>{title}</span>
        <span className='text-xl'>{desc}</span>
      </h1>
      <div>{children}</div>
    </div>
  );
};

Paper.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Paper;
