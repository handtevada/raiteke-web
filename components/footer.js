import React from 'react';

const Footer = () => {
  const currentDate = new Date();
  return (
    <footer className='fixed bottom-2 w-full'>
      <div className='flex justify-center'>
        <p>{`@${currentDate.getFullYear()} | Photo by Vincent Guth on Unsplash`}</p>
      </div>
    </footer>
  );
};

export default Footer;
