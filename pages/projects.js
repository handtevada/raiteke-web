import React, { useEffect } from 'react';
import CardProject from '../components/card.project';

export default function Projects() {
  useEffect(() => {
    document.title = 'PROJECTS | RAITEKE';
  }, []);

  const projectList = [
    {
      title: 'Terminal Portfolio',
      github: 'https://github.com/handtevada/portfolio',
      demo: 'https://portfolio.raiteke.com/',
      blog: 'https://medium.com/@directorys/%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87-portfolio-web-app-%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B9%80%E0%B8%81%E0%B8%A3%E0%B9%8B%E0%B9%86-%E0%B8%AA%E0%B9%84%E0%B8%95%E0%B8%A5%E0%B9%8C%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B8%A1%E0%B9%80%E0%B8%A1%E0%B8%AD%E0%B8%A3%E0%B9%8C-8c82175a71bb',
      icon: '/img/projects/profiles.svg',
      content: ['My portfolio, Present by terminal command like a developer style.'],
    },
    {
      title: 'History Timelines',
      github: 'https://github.com/handtevada/timelines',
      demo: 'https://timelines.raiteke.com/',
      blog: 'https://medium.com/@directorys/%E0%B9%81%E0%B8%81%E0%B9%89%E0%B8%9B%E0%B8%B1%E0%B8%8D%E0%B8%AB%E0%B8%B2%E0%B8%8A%E0%B8%A7%E0%B8%99%E0%B8%AA%E0%B8%87%E0%B8%AA%E0%B8%B1%E0%B8%A2-%E0%B9%83%E0%B8%84%E0%B8%A3%E0%B9%80%E0%B8%81%E0%B8%B4%E0%B8%94%E0%B8%81%E0%B9%88%E0%B8%AD%E0%B8%99%E0%B9%83%E0%B8%84%E0%B8%A3%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B9%81%E0%B8%99%E0%B9%88-42f72e1c6d79',
      icon: '/img/projects/timeline.svg',
      content: ['Age range timeline of people in history. Can compared multiple people.'],
    },
    {
      title: 'Salary Calculator',
      github: 'https://github.com/handtevada/my-salary',
      demo: 'https://my-salary.raiteke.com/',
      blog: 'https://medium.com/@directorys/%E0%B8%84%E0%B8%B8%E0%B8%93%E0%B8%97%E0%B8%B3%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99%E0%B9%84%E0%B8%94%E0%B9%89%E0%B9%80%E0%B8%97%E0%B9%88%E0%B8%B2%E0%B9%84%E0%B8%AB%E0%B8%A3%E0%B9%88%E0%B9%83%E0%B8%99-1-%E0%B8%99%E0%B8%B2%E0%B8%97%E0%B8%B5-web-app-calculate-income-53dc6a3cac6b',
      icon: '/img/projects/calculator.svg',
      content: ['Salary Calculator in part of time. Ex. Days, Hours, Minute, Second.'],
    },
    {
      title: 'Samart Nursery Static Web',
      github: 'https://github.com/handtevada/samart-web-app',
      demo: 'https://samarteducarenursery.com/',
      blog: '#',
      icon: '/img/projects/daycare-center.svg',
      content: ['Static web. Build on Next JS.'],
    },
    {
      title: 'Average Stock Web App',
      github: 'https://github.com/handtevada/average-stock',
      demo: 'https://average-stock.raiteke.com/',
      blog: '#',
      icon: '/img/projects/stocks.png',
      content: ['Calculate average stock price.'],
    },
  ];

  return (
    <div className='component'>
      <div className='tile is-ancestor'>
        <div className='tile is-parent'>
          <div className='tile is-child box component-box'>
            <p className='subtitle'>
              <span className='component-title'>PROJECTS</span>
              <span> | Cool things I am working on.</span>
            </p>
            <div className='columns'>
              {projectList.map((item) => {
                return (
                  <div key={item.title} className='column'>
                    <CardProject
                      key={item.title}
                      title={item.title}
                      github={item.github}
                      demo={item.demo}
                      blog={item.blog}
                      icon={item.icon}
                      content={item.content}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
