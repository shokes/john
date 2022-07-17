import React, { useState, useEffect } from 'react';
import '../index.css';
import Navigation from '../components/Navigation';
import Me from '../images/me.jpg';
import Socials from '../components/socials';
import '../index.css';

const Home = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ['Web Developer;', 'Frontend Designer;'];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className='overflow-x-hidden'>
      <div className='container md:block lg:flex items-center justify-between mt-32 '>
        <div className='animate__animated animate__fadeInLeft text-[#81817c] text-2xl pr-8'>
          <h3 className='text-2xl font-semibold'>
            Hello, I'm{' '}
            <span className='text-[black]'>John Osezei Ikhimioya</span>
          </h3>
          <h1 className='font-bold text-6xl text-black'>A {text}</h1>
          <h2 className='mt-2'>
            currently based in Nigeria capable of building and delivering end to
            end solutions for digital products.
          </h2>
          <Socials />
        </div>

        <div className='sm: hidden md:hidden lg:contents'>
          <img
            className='animate__animated animate__fadeInRight home-img'
            src={Me}
            alt='image'
          />
        </div>
      </div>
      <Navigation />
    </section>
  );
};

export default Home;
