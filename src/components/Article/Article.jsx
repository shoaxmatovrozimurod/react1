import React from 'react'
import './Article.css'
import Quyon from './images/quyon.png'
import Perog from './images/perog.png' // Kengaytmasini to'g'rilang

const Article = () => {
    return (
        <article className='article'>
            <div className="container">
                <div className="article__container">
                    <h3 className='article__title'>More from Oneflow</h3>
                    <ul className='article__list'>
                        <li className='article__item'>
                            <div className="article__img-box">
                                <img src={Quyon} alt="quyon rasmi" />
                            </div>
                            <span className="article__item-tag">One platform. All departments</span>
                            <h5 className='article__item-title'>Create, sign and manage any type of agreement you can think of</h5>
                            <button className='article__item-btn'>Find out more</button>
                        </li>
                        <li className='article__item'>
                            <div className="article__img-box">
                                <img src={Perog} alt="perog rasmi" />
                            </div>
                            <span className="article__item-tag">Why Oneflow</span>
                            <h5 className='article__item-title'>Six reasons why teams around the world love the magic of flow</h5>
                            <button className='article__item-btn'>Find out more</button>
                        </li>
                    </ul>
                </div>
            </div>
        </article>
    )
}

export default Article