import React from 'react'
import './Tools.css'
import Logos from './images/logos.png'

const Tools = () => {
  return (
    <section className='tools'>
        <div className="container">
            <div className="tools__container">
                <div className="tools__box">
                    <h3 className='tools__box-title'>Seamless integrations</h3>
                    <p className='tools__box-text'>Integrate your favorite tools with your <br /> contract workflow and work wonders.</p>
                    <button className='tools__box-btn'>View all integrations</button>
                </div>
                <img className='tools__logos' src= {Logos} alt="logotip rasimlari" />

            </div>
        </div>
    </section>
  )
}

export default Tools