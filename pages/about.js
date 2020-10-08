import React, { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    document.title = 'ABOUT | RAITEKE';
  }, []);

  return (
    <div className='component'>
      <div className='tile is-ancestor'>
        <div className='tile is-parent'>
          <div className='tile is-child box component-box'>
            <p className='subtitle'>
              <span className='component-title'>ABOUT</span>
              <span> | Learn more about me.</span>
            </p>
            <div className='columns'>
              <div className='column is-one-third' />
              <div className='column'>
                <div className='is-size-4'>A Software Engineer</div>
                <div>
                  I started as a developer since 2013. After graduating in computer engineering at
                  Naresuan University, Pitsanulok, Thailand. The coolness of programming is logical
                  thinking similar to playing games. Finding answers to solve complex problems. In
                  the world of programming You can learn new languages. Without having to
                  communicate with real people.
                </div>
                <div className='columns margin-top-10'>
                  <div className='column'>
                    <span className='icon margin-right-5'>
                      <i className='fas fa-angle-right' />
                    </span>
                    <strong className='margin-right-5'>Born :</strong>
                    <span>Nov 1990</span>
                  </div>
                  <div className='column'>
                    <span className='icon margin-right-5'>
                      <i className='fas fa-angle-right' />
                    </span>
                    <strong className='margin-right-5'>Degree :</strong>
                    <span>Bachelor of Computer Engineering</span>
                  </div>
                </div>
                <div className='columns'>
                  <div className='column'>
                    <span className='icon margin-right-5'>
                      <i className='fas fa-angle-right' />
                    </span>
                    <strong className='margin-right-5'>City :</strong>
                    <span>Bangkok, Thailand</span>
                  </div>
                  <div className='column'>
                    <span className='icon margin-right-5'>
                      <i className='fas fa-angle-right' />
                    </span>
                    <strong className='margin-right-5'>Freelance :</strong>
                    <span>Available</span>
                  </div>
                </div>
                <div>
                  I love to read and write blogs and diaries. I speak most Thai, I give 7.5 for my
                  English. During college, I used to study Japanese. I played tennis a long time
                  ago. Right now I'm interested in investing in stocks. I do not travel often. Most
                  will enjoy watching Netflix. My favorite movie are About Time and Secret Life of
                  Walter Mitty.
                </div>
              </div>
            </div>
            <p className='subtitle'>
              <span className='component-title'>PGM SKILLS</span>
              <span> | Programming skills.</span>
            </p>
            <div className='columns'>
              <div className='column'>
                <div>HTML &amp; CSS &amp; JAVASCRIPT (ES7)</div>
                <progress className='progress is-primary is-small' value={90} max={100}>
                  45%
                </progress>
              </div>
              <div className='column'>
                <div>.Net C#, C++, Node JS, Java, PHP</div>
                <progress className='progress is-primary is-small' value={95} max={100}>
                  45%
                </progress>
              </div>
            </div>
            <div className='columns'>
              <div className='column'>
                <div>React, JQuery, Lumen, Bootstrap, Bluma</div>
                <progress className='progress is-primary is-small' value={80} max={100}>
                  45%
                </progress>
              </div>
              <div className='column'>
                <div>Docker, K8s</div>
                <progress className='progress is-primary is-small' value={90} max={100}>
                  45%
                </progress>
              </div>
            </div>
            <div className='columns'>
              <div className='column'>
                <div>SQLServer, MySql, MongoDB, Firebase</div>
                <progress className='progress is-primary is-small' value={95} max={100}>
                  45%
                </progress>
              </div>
              <div className='column'>
                <div>UX & UI Design</div>
                <progress className='progress is-primary is-small' value={85} max={100}>
                  45%
                </progress>
              </div>
            </div>
            <div className='columns'>
              <div className='column'>
                <div>Dev Ops (Windows & Linux)</div>
                <progress className='progress is-primary is-small' value={70} max={100}>
                  45%
                </progress>
              </div>
              <div className='column'>
                <div>Cloud Server (GCP, AWS, Azure)</div>
                <progress className='progress is-primary is-small' value={80} max={100}>
                  45%
                </progress>
              </div>
            </div>
            <p className='subtitle'>
              <span className='component-title'>INTERESTS</span>
              <span> | For 2020.</span>
            </p>
            <div className='columns'>
              <div className='column' style={{ display: 'flex' }}>
                <i className='fab fa-bitcoin fa-3x margin-right-5'></i>
                <span style={{ padding: '10px' }}>Blockchain</span>
              </div>
              <div className='column' style={{ display: 'flex' }}>
                <i className='fas fa-robot fa-3x margin-right-5'></i>
                <span style={{ padding: '10px' }}>Artificial intelligence</span>
              </div>
              <div className='column' style={{ display: 'flex' }}>
                <i className='fas fa-gavel fa-3x margin-right-5'></i>
                <span style={{ padding: '10px' }}>Politics</span>
              </div>
              <div className='column' style={{ display: 'flex' }}>
                <i className='fas fa-utensils fa-3x margin-right-5'></i>
                <span style={{ padding: '10px' }}>Foods</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
