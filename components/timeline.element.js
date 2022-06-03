import React from 'react';
import { IconContext } from 'react-icons';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

const TimelineElement = ({ title, desc, image, date, iconStyle, icon }) => {
  return (
    <VerticalTimelineElement
      date={date}
      iconStyle={iconStyle}
      icon={
        <IconContext.Provider value={{ color: '#363636', size: '2em' }}>
          {icon}
        </IconContext.Provider>
      }
    >
      <h4 className='text-xl font-bold'>{title}</h4>
      {image && (
        <div className='flex justify-center my-4'>
          <img src={image} alt={title} className='max-h-64' />
        </div>
      )}
      <p className='text-sm'>{desc}</p>
    </VerticalTimelineElement>
  );
};

export default TimelineElement;
