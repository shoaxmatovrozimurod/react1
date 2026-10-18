import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer__container">

                    <div className="footer__top">
                        <div className="footer__col footer__brand-col">
                            <h2 className="footer__logo">oneflow</h2>
                            <div className="footer__address">
                                <p>Headquarters:</p>
                                <p>Hudiksvallsgatan 8</p>
                                <p>113 30 Stockholm, Sweden</p>
                                <p className="footer__phone">+46 8 517 297 70</p>
                            </div>
                        </div>

                        <div className="footer__col">
                            <h4 className="footer__col-title">Why Oneflow</h4>
                            <ul className="footer__list">
                                <li><a href="#tour">Product tour</a></li>
                                <li><a href="#contracts">Smart contracts</a></li>
                                <li><a href="#scale">Built for scale</a></li>
                                <li><a href="#integrations">Integrations</a></li>
                                <li><a href="#stories">Customer stories</a></li>
                            </ul>
                        </div>

                        <div className="footer__col">
                            <h4 className="footer__col-title">Learn</h4>
                            <ul className="footer__list">
                                <li><a href="#faq">FAQ</a></li>
                                <li><a href="#onboarding">Onboarding</a></li>
                                <li><a href="#developers">Developers</a></li>
                                <li><a href="#help">Help Center</a></li>
                                <li><a href="#guide">E-sign guide</a></li>
                            </ul>
                        </div>

                        <div className="footer__col">
                            <h4 className="footer__col-title">Security</h4>
                            <ul className="footer__list">
                                <li><a href="#center">Security Center</a></li>
                                <li><a href="#reliability">Reliability</a></li>
                                <li><a href="#compliance">Compliance</a></li>
                                <li><a href="#legality">E-signing legality</a></li>
                                <li><a href="#gdpr">GDPR</a></li>
                            </ul>
                        </div>

                        <div className="footer__col">
                            <h4 className="footer__col-title">More Oneflow</h4>
                            <ul className="footer__list">
                                <li><a href="#about">About us</a></li>
                                <li><a href="#pricing">Pricing</a></li>
                                <li><a href="#partners">Partners</a></li>
                                <li><a href="#blog">Blog</a></li>
                                <li><a href="#careers">Careers</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer__middle">
                        <div className="footer__cta-content">
                            <h3 className="footer__cta-title">Get in the flow</h3>
                            <p className="footer__cta-text">Send, track and sign your contracts free for the rest of your life. No trickery.</p>
                        </div>
                        <button className="footer__cta-btn">Get Oneflow free</button>
                    </div>

                    <div className="footer__bottom">
                        <div className="footer__bottom-links">
                            <a href="#login">Login</a>
                            <a href="#privacy">Privacy</a>
                            <a href="#cookie">Cookie statement</a>
                        </div>
                        <div className="footer__lang">
                            <span className="footer__lang-icon">🌐</span>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer