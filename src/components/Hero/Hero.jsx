import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className='hero'>
      <div className="background__img"></div>
      <div className="container">
        <div className="hero__container">
          <div className="hero__box">
            <h1 className='hero__box-title'>Work wonders</h1>
            <p className='hero__box-text'>
              Be more effective with smart contracts that make work faster, and life easier.
            </p>
            <div className="hero__btn-div">
              <button className='hero__btn hero__btn-primary'>Get Oneflow free</button>
              <button className='hero__btn hero__btn-secondary'>Take a tour</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;