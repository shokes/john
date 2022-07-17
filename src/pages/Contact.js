import React from 'react';
import Navigation from '../components/Navigation';
import Socials from '../components/socials';
import '../index.css';

export const Contact = () => {
  return (
    <>
      <div className='container text-center'>
        <h3 className='animate__animated animate__zoomIn heading'>
          <span className='opacity-50'> Con</span>
          tact
        </h3>
      </div>
      <section className='container text-center mt-28 animate__animated animate__fadeInUp'>
        <h3 className=' uppercase text-xl text-text-color mb-2'>
          Send me a message
        </h3>
        <a
          className=' text-5xl lg:text-6xl font-semibold text-text-color underline underline-offset-4 mail '
          href='mailto:john.osezei@yahoo.com'
          target='_blank'
          rel='noreferrer'
        >
          john.osezei@yahoo.com
        </a>
        <h3 className=' uppercase text-xl text-text-color mt-14 mb-2'>
          OR CONNECT WITH ME ON SOCIALS
        </h3>
        <div className='w-max  mr-auto ml-auto text-2xl'>
          <Socials />
        </div>
      </section>
      <Navigation />
    </>
  );
};
