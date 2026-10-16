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
                            <img src={Icn} alt="icn" />
                            <h3 className='smart__item-title'>Forget friction</h3>
                            <p className='smart__item-text'>Experience a truly digital contract process that makes creating, signing, and managing agreements quick, smooth, and effortless. Contracts without trickery.</p>

                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Smart