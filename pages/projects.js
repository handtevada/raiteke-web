import React, { useEffect } from 'react';
import CardProject from '../components/card.project';

export default function Projects() {
  useEffect(() => {
    document.title = 'PROJECTS | RAITEKE';
  }, []);

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
              <div className='column'>
                <CardProject
                  key={'TerminalPortfolio'}
                  title='Terminal Portfolio'
                  github='https://github.com/handtevada/portfolio'
                  demo='https://portfolio.raiteke.com/'
                  blog='https://medium.com/@directorys/%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87-portfolio-web-app-%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B9%80%E0%B8%81%E0%B8%A3%E0%B9%8B%E0%B9%86-%E0%B8%AA%E0%B9%84%E0%B8%95%E0%B8%A5%E0%B9%8C%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B8%A1%E0%B9%80%E0%B8%A1%E0%B8%AD%E0%B8%A3%E0%B9%8C-8c82175a71bb'
                  icon={<i className='fas fa-user-tie fa-3x'></i>}
                  content={[
                    'My portfolio, Present by terminal command like a developer style.',
                    '',
                    <br />,
                    <a href='#'>#webapp</a>,
                    ' ',
                    <a href='#'>#firebase</a>,
                    ' ',
                    <a href='#'>#reactjs</a>,
                  ]}
                />
              </div>
              <div className='column'>
                <CardProject
                  key={'HistoryTimelines'}
                  title='History Timelines'
                  github='https://github.com/handtevada/timelines'
                  demo='https://timelines.raiteke.com/'
                  blog='https://medium.com/@directorys/%E0%B9%81%E0%B8%81%E0%B9%89%E0%B8%9B%E0%B8%B1%E0%B8%8D%E0%B8%AB%E0%B8%B2%E0%B8%8A%E0%B8%A7%E0%B8%99%E0%B8%AA%E0%B8%87%E0%B8%AA%E0%B8%B1%E0%B8%A2-%E0%B9%83%E0%B8%84%E0%B8%A3%E0%B9%80%E0%B8%81%E0%B8%B4%E0%B8%94%E0%B8%81%E0%B9%88%E0%B8%AD%E0%B8%99%E0%B9%83%E0%B8%84%E0%B8%A3%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B9%81%E0%B8%99%E0%B9%88-42f72e1c6d79'
                  icon={<i className='fas fa-clock fa-3x'></i>}
                  content={[
                    'Age range timeline of Important people in history. Can compared multiple people.',
                    '',
                    <br />,
                    <a href='#'>#webapp</a>,
                    ' ',
                    <a href='#'>#firebase</a>,
                    ' ',
                    <a href='#'>#reactjs</a>,
                  ]}
                />
              </div>
              <div className='column'>
                <CardProject
                  key={'SalaryCalculator'}
                  title='Salary Calculator'
                  github='https://github.com/handtevada/my-salary'
                  demo='https://my-salary.raiteke.com/'
                  blog='https://medium.com/@directorys/%E0%B8%84%E0%B8%B8%E0%B8%93%E0%B8%97%E0%B8%B3%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99%E0%B9%84%E0%B8%94%E0%B9%89%E0%B9%80%E0%B8%97%E0%B9%88%E0%B8%B2%E0%B9%84%E0%B8%AB%E0%B8%A3%E0%B9%88%E0%B9%83%E0%B8%99-1-%E0%B8%99%E0%B8%B2%E0%B8%97%E0%B8%B5-web-app-calculate-income-53dc6a3cac6b'
                  icon={<i className='fas fa-hand-holding-usd fa-3x'></i>}
                  content={[
                    'Salary Calculator in part of time. Ex. Days, Hours, Minute, Second.',
                    '',
                    <br />,
                    <a href='#'>#webapp</a>,
                    ' ',
                    <a href='#'>#firebase</a>,
                    ' ',
                    <a href='#'>#reactjs</a>,
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
