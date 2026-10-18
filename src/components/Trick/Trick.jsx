import React from 'react'
import './Trick.css'
import Phone from './images/phoneimg.png'
import Girl from './images/girl.png'
import Gimnast from './images/gimnast.png'

const Trick = () => {
    return (
        <section className='trick'>
            <div className="container">
                <div className="trick__container">
                    <div className="trick__box">
                        <h3 className='trick__box-title'>And for our next trick…</h3>
                        <button className="trick__box-btn">Visit our blog</button>
                    </div>

                    <div className="trick__inner">
                        <ul className='trick__inner-list'>
                            <li className='trick__inner-item'>
                                <span className='trick__inner-item-sn'>Article</span>
                                <h4 className='trick__inner-item-title'>A Basic Guide on E-signatures and What Makes Them Legally Binding</h4>
                                <span className='trick__inner-item-sn2'>E-signature| 11 min read</span>
                            </li>
                            <li className='trick__inner-item'>
                                <img className='trick__inner-item-img' src= {Phone} alt="telfon va odamning aylana rasmi" />
                            </li>
                        </ul>
                    </div>

                    <div className="trick__main">
                        <ul className='trick__main-list'>
                            <li className='trick__main-item1'>
                                <img src= {Girl} alt="hayajonli qizni aylana rasmi" />
                                <h4 className='trick__main-item-title'>29 documents you can sign online in 2021</h4>
                                <span className='trick__main-item-sn'>Contract automation | 18 min read</span>
                            </li>

                            <li className='trick__main-item2'>
                                <span className='trick__main-item-sn'>Customer Story</span>
                                <h4 className='trick__main-item-title'>Sweco</h4>
                                <button className='trick__main-item-btm'>Read full story</button>
                            </li>

                            <li className='trick__main-item3'>
                                <img src= {Gimnast} alt=" gimnastikachi erkak" />
                                <h4 className='trick__main-item-title'>Master digital sales: How to close deals when you’re not allowed to shake hands</h4>
                                <span className='trick__main-item-sn'>Sales | 6 min read</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Trick