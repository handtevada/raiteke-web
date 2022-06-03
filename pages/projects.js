import React from 'react';

import Paper from 'components/paper.container';
import CardProject from 'components/card.project';

import metaDictionary from 'utils/constants/meta';
import projects from 'utils/constants/project';

const Projects = () => {
  return (
    <section className='py-6'>
      <Paper title='Projects' desc='Amazing things, A little bit useful.'>
        <div className='pt-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {projects.map((project) => {
              return <CardProject key={project.title} {...project} />;
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
      meta: metaDictionary.project,
    },
  };
}

export default Projects;
