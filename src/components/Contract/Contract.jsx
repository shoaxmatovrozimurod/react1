import React from 'react'
import './Contract.css'
import Tahlil from "./images/contract4.png"

const Contract = () => {
  return (
    <section className='contract'>
        <div className="container">
            <div className="contract__container">
                <div className="contract__box">
                    <h3 className='contract__title'>Turn signatures into smart contracts</h3>
                    <p className='contract__text'>Experience true contract magic by automating the entire contract process — from creating to signing and managing.</p>
                    <button className='contract__btn'>Take our product tour</button>
                </div>
                <div className="contract__wrapper">
                    <img src= {Tahlil} alt="tahlil rasmi" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contract