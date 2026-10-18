import React from 'react'
import './Word.css'
import Circle from './images/circle.png'

const reviewsData = [
    {
        id: 1,
        text: "“With Oneflow, I’ve been able to reduce the time spent on admin significantly. Every hour that I used to spend on admin, can now be spent on selling and closing!”",
        name: "Mattias Johnson",
        role: "Key Account Manager",
        company: "Sweco"
    },
    {
        id: 2,
        text: "“The fact that Oneflow is 100% digital makes it so simple and flexible. It gives us peace of mind by providing control and a complete overview of our contract process at all times.”",
        name: "Elin Skoglund",
        role: "HR Business Partner",
        company: "Hedin Bil"
    },
    {
        id: 3,
        text: "“From board meeting protocols to GDPR agreements, and approval of keycards — Oneflow has removed the pains we weren’t even aware of.”",
        name: "Tor Myleman",
        role: "Head of Indirect Sourcing",
        company: "Systembolaget"
    },
    {
        id: 4,
        text: "“With Oneflow, we can create contracts instead of drafting them from scratch. And Oneflow is very easy to use for everyone involved.”",
        name: "Annette L.",
        role: "Legal Counsel",
        company: "Spotify"
    }
];

const Word = () => {
    const infiniteReviews = [...reviewsData, ...reviewsData];

    return (
        <section className='word'>
            <div className="word__container">
                <h3 className='word__title'>Don’t just take our word for it…</h3>

                <div className='word__marquee'>
                    <ul className='word__list'>
                        {infiniteReviews.map((item, index) => (
                            <li className='word__item' key={index}>
                                <p className='word__text'>{item.text}</p>
                                <a href="#read" className='word__sn'>Read full story</a>
                                <div className="item__name">
                                    <img src={Circle} alt={item.name} className='item__avatar' />
                                    <div className='item__info'>
                                        <h4 className='item__author-name'>{item.name}</h4>
                                        <p className='item__author-role'>{item.role}</p>
                                        <p className='item__author-company'>{item.company}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Word