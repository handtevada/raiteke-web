import React, { useEffect } from 'react';
import CardContact from '../components/card.contact';

export default function Contact() {
  useEffect(() => {
    document.title = 'CONTACT | RAITEKE';
  }, []);

  return (
    <div className='component'>
      <div className='tile is-ancestor'>
        <div className='tile is-parent'>
          <div className='tile is-child box component-box'>
            <p className='subtitle'>
              <span className='component-title'>CONTACT</span>
              <span> | Find me if you can.</span>
            </p>
            <div className='columns'>
              <div className='column'>
                <CardContact
                  key='Twitter'
                  icon={[<i className='fab fa-twitter fa-3x' />]}
                  link='https://twitter.com/Algobaleno'
                  title='Twitter'
                  content={[
                    'I love twitter. Love to read fast news. Retweet only awesome and cute. Follow me ',
                    <a href='#'>@Algobaleno</a>,
                  ]}
                />
              </div>
              <div className='column'>
                <CardContact
                  key='Instagram'
                  icon={[<i className='fab fa-instagram fa-3x' />]}
                  link='https://www.instagram.com/directorysc/'
                  title='Instagram'
                  content={[
                    "I used to want to be a photographer. But I think i'm too lazy After that, I didn't post much.",
                  ]}
                />
              </div>
            </div>
            <div className='columns'>
              <div className='column'>
                <CardContact
                  key='GitHub'
                  icon={[<i className='fab fa-github fa-3x' />]}
                  link='https://github.com/handtevada'
                  title='GitHub'
                  content='This is the place to store all of my personal code.'
                />
              </div>
              <div className='column'>
                <CardContact
                  key='LinkedIn'
                  icon={[<i className='fab fa-linkedin fa-3x' />]}
                  link='https://www.linkedin.com/in/keerati-yuonghirun-45a23967/'
                  title='LinkedIn'
                  content='A long time ago that I had not logged in.'
                />
              </div>
            </div>
            <div className='columns'>
              <div className='column'>
                <CardContact
                  key='Facebook'
                  icon={[<i className='fab fa-facebook fa-3x' />]}
                  link='https://www.facebook.com/directorys/'
                  title='Facebook'
                  content='I stopped being a Facebook addict for a long time. 
                                    Use Facebook as a login tool, but I love Messenger.'
                />
              </div>
              <div className='column'>
                <CardContact
                  key='Email'
                  icon={[<i className='fas fa-paper-plane fa-3x' />]}
                  link='mailto:keerati.dir@gmail.com'
                  title='Email'
                  content='I actually have many emails. But this email is probably the most official'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
