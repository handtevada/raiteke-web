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
                  icon='/img/contact/twitter.svg'
                  link='https://twitter.com/Algobaleno'
                  title='Twitter'
                  content={[
                    'I love twitter. Love to read fast news. Retweet only awesome and cute.',
                  ]}
                />
              </div>
              <div className='column'>
                <CardContact
                  key='Instagram'
                  icon='/img/contact/instagram.svg'
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
                  icon='/img/contact/github.svg'
                  link='https://github.com/handtevada'
                  title='GitHub'
                  content='This is the place to store all of my personal code.'
                />
              </div>
              <div className='column'>
                <CardContact
                  key='LinkedIn'
                  icon='/img/contact/linkedin.svg'
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
                  icon='/img/contact/facebook.svg'
                  link='https://www.facebook.com/directorys/'
                  title='Facebook'
                  content='I stopped being a Facebook addict for a long time. 
                                    Use Facebook as a login tool, but I love Messenger.'
                />
              </div>
              <div className='column'>
                <CardContact
                  key='Email'
                  icon='/img/contact/email.svg'
                  link='mailto:keerati.dir@gmail.com'
                  title='Email'
                  content='I have many emails. But this email is probably the most official'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
