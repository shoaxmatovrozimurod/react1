import React from 'react';
import './Flow.css';
import Logos from './images/logos.png';

const Product = () => {
  return (
    <section className='flow'>
      <div className="container">
        <div className="flow__container">
          <h2 className='flow__title'>Join these companies making business flow</h2>
          <div className="flow__img-box">
            <img className='flow__img' src={Logos} alt="logotiplar rasmi" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;