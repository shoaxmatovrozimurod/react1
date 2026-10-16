import React from 'react'
import './Smart.css'
import Icn from './images/icn.png'

const Smart = () => {
    return (
        <section className='smart'>
            <div className="container">
                <div className="smart__container">
                    <h2 className='smart__title'>The complete platform for smart contracts</h2>
                    <ul className='smart__list'>
                        <li className='smart__item'>
                            <div className='smart__icon-box'>
                                <img src={Icn} alt="icn" />
                            </div>
                            <h3 className='smart__item-title'>Forget friction</h3>
                            <p className='smart__item-text'>Experience a truly digital contract process that makes creating, signing, and managing agreements quick, smooth, and effortless. Contracts without trickery.</p>
                            <button className='smart__item-btn'>Take the tour</button>
                        </li>
                        <li className='smart__item'>
                            <div className='smart__icon-box'>
                                <img src={Icn} alt="icn" />
                            </div>
                            <h3 className='smart__item-title'>Unleash data</h3>
                            <p className='smart__item-text'>Get faster and smarter with automated processes and intelligent insights. Unlock the data inside your agreements. Learn behind the last silo of paper and think past text.</p>
                            <button className='smart__item-btn'>Take the tour</button>
                        </li>
                        <li className='smart__item'>
                            <div className='smart__icon-box'>
                                <img src={Icn} alt="icn" />
                            </div>
                            <h3 className='smart__item-title'>Take control</h3>
                            <p className='smart__item-text'>Know what's happening in real-time with a complete overview of all your contracts, all in one place. All the visibility and transparency you need, at your fingertips.</p>
                            <button className='smart__item-btn'>Take the tour</button>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Smart