import React from 'react';
import { IconContext } from 'react-icons';

import Paper from 'components/paper.container';

import metaDictionary from 'utils/constants/meta';
import profileAttributes from 'utils/constants/profileAttributes';
import skills from 'utils/constants/skill';
import interests from 'utils/constants/interest';

const SubHeader = ({ children }) => {
  return <div className='mb-4 bg-gradient-to-r from-gray-300 w-full md:w-1/4 p-2'>{children}</div>;
};

const About = () => {
  const currentDate = new Date();

  return (
    <section className='py-6'>
      <Paper title='About' desc='Learn more about me.'>
        <>
          <div className='flex flex-row mb-4'>
            <div className='basis-1/2'></div>
            <div className='grow'>
              <SubHeader>
                <h4 className='text-xl font-bold'>A Software Engineer</h4>
              </SubHeader>
              <p className='font-light'>
                I started as a developer since 2013. After graduating in computer engineering at
                Naresuan University, Pitsanulok, Thailand. The coolness of programming is logical
                thinking similar to playing games. Finding answers to solve complex problems. In the
                world of programming You can learn new languages. Without having to communicate with
                real people.
              </p>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-6'>
                {profileAttributes.map((attribute) => {
                  return (
                    <p key={attribute.title}>
                      <span className='font-semibold'>{attribute.title} : </span>
                      <span className='font-light'>{attribute.desc}</span>
                    </p>
                  );
                })}
              </div>
              <p className='font-light'>
                I love to read and write blogs and diaries. I speak most Thai, I give 7.5 for my
                English. During college, I used to study Japanese. I played tennis a long time ago.
                Right now I'm interested in investing in stocks. I do not travel often. Most will
                enjoy watching Netflix. My favorite movie are About Time and Secret Life of Walter
                Mitty.
              </p>
            </div>
          </div>

          {/* PGM SKILLS */}
          <div className='mb-6'>
            <SubHeader>
              <h4>
                <span className='text-xl font-bold mr-2'>PGM SKILLS</span>
                <span>Programming skills.</span>
              </h4>
            </SubHeader>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {skills.map((skill) => {
                const powerStyle = { width: `${skill.power}%` };
                return (
                  <div key={skill.title}>
                    <p className='mb-2 font-light'>{skill.title}</p>
                    <div className='w-full bg-gray-200 h-1'>
                      <div className='bg-sky-500 h-1' style={powerStyle}></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* INTERESTS */}
          <div>
            <SubHeader>
              <h4>
                <span className='text-xl font-bold mr-2'>INTERESTS</span>
                <span>{`For ${currentDate.getFullYear()}.`}</span>
              </h4>
            </SubHeader>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
              {interests.map((interest) => {
                return (
                  <div
                    key={interest.title}
                    className='flex flex-row items-center gap-4 bg-gradient-to-r from-gray-100 p-2 rounded-xl'
                  >
                    <span>
                      <IconContext.Provider value={{ color: '#363636', size: '3em' }}>
                        {interest.icon}
                      </IconContext.Provider>
                    </span>
                    <span className='font-bold'>{interest.title}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      </Paper>
    </section>
  );
};

export async function getStaticProps() {
  return {
    props: {
      meta: metaDictionary.about,
    },
  };
}

export default About;
