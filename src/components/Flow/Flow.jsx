import React from 'react'
import '../Flow.css'
import Logos from './images/logos'

const Product = () => {
  return (
    <section className='flow'>
      <div className="container">
        <div className="flow__container">
          <h2 className='flow__title'>Join these companies making business flow</h2>
          <img src= {Logos} alt="logotiplar rasmi" />
        </div>
      </div>
    </section>
  )
}

export default Product