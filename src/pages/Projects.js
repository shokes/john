import React from 'react';

import Bud from '../images/bud.png';
import Takestudio from '../images/PROJECT2.png';
import Gym from '../images/PROJECT1.png';
import Quote from '../images/quotees.png';
import Navigation from '../components/Navigation';
import '../index.css';

const works = [
  {
    id: 1,
    stack: 'HTML 5, CSS 3, JAVASCRIPT',
    url: 'https://takestudio.netlify.app/',
    github: 'https://github.com/Osezei/TakeStudios',
    picture: Takestudio,
    title: 'TakeStudio',
  },
  {
    id: 2,
    stack: 'HTML 5, CSS 3, JAVASCRIPT',
    url: 'https://prognexgym.netlify.app/',
    github: 'https://github.com/Osezei/Gym-site',
    picture: Gym,
    title: 'Progenex',
  },
  {
    id: 3,
    stack: 'REACTJS, CSS 3',
    url: 'https://quotess-five.vercel.app/',
    github: 'https://github.com/Osezei/Quotess',
    picture: Quote,
    title: 'Quotes',
  },
  {
    id: 4,
    stack: 'REACTJS, TAILWIND',
    url: 'https://grocery-assistant.vercel.app/',
    github: 'www.google.com',
    picture: Bud,
    title: 'Grocery Assistant',
  },
];
export const Projects = () => {
  return (
    <section className='overflow-x-hidden'>
      <div className='container text-center '>
        <h3 className=' heading'>
          <span className='opacity-50'>Pro</span>jects
        </h3>
      </div>
      <section className='container mt-6 md:block lg:grid grid-cols-2 gap-4 place-items-center '>
        {works.map((work) => {
          const { id, stack, url, github, picture, title } = work;
          return (
            <div className='pb-20'>
              <article key={id} className='items-center'>
                <div className='picture-container md:mt-2'>
                  <img src={picture} className='picture mb-2' />

                  <a
                    href={url}
                    className='overlay font-bold text-2xl text-[#fff]'
                    target='_blank'
                  >
                    {title}
                  </a>
                </div>
                <a
                  className='font-semibold text-lg text-[black] hover:underline'
                  target='_blank'
                  href={github}
                >
                  #Codes
                </a>
                <h3 className=' font-semibold text-lg  text-[black]'>
                  Stack: {stack}
                </h3>
              </article>
            </div>
          );
        })}
      </section>

      <Navigation />
    </section>
  );
};
