import React from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';

import Paper from 'components/paper.container';
import TimelineElement from 'components/timeline.element';

import metaDictionary from 'utils/constants/meta';
import events from 'utils/constants/event';

const Resume = () => {
  return (
    <section className='py-6'>
      <Paper title='Resume' desc='Experience timeline.'>
        <div className='pt-8'>
          <VerticalTimeline>
            {events.map((event) => {
              return <TimelineElement key={event.title} {...event} />;
            })}
          </VerticalTimeline>
        </div>
      </Paper>
    </section>
  );
};

export async function getStaticProps() {
  return {
    props: {
      meta: metaDictionary.resume,
    },
  };
}

export default Resume;
