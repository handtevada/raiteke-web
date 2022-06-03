import React from 'react';

import Paper from 'components/paper.container';
import CardContact from 'components/card.contact';

import metaDictionary from 'utils/constants/meta';
import contact from 'utils/constants/contact';

const Contact = () => {
  return (
    <section className='py-6'>
      <Paper title='Contact' desc='Find me if you can.'>
        <div className='pt-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {contact.map((contact) => {
              return <CardContact key={contact.title} {...contact} />;
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
      meta: metaDictionary.contact,
    },
  };
}

export default Contact;
