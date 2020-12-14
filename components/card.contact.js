import React from 'react';

export default function CardContact(props) {
  return (
    <>
      <a className='card-contact' href={props.link} target='_blank'>
        <div className='card'>
          <div className='card-content'>
            <div className='content'>
              <div className='columns'>
                <div className='column is-one-fifth align-center card-contact-icon'>
                  <img src={props.icon} alt={props.title} />
                </div>
                <div className='column'>
                  <h1>{props.title}</h1>
                  <p>{props.content}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
      <style jsx>{`
        .card {
          border-radius: 10px;
          min-height: 150px;
        }
        .card-contact-icon {
          color: #4a4a4a;
          max-width: 100px;
        }
        .card-content:hover {
          background-color: #f1f1f1;
          border-radius: 10px;
        }
      `}</style>
    </>
  );
}
