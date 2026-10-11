import React from 'react';
import "./Create.css";
import Icn from "./images/icn.png";
import Galichka from './images/galichka.png';
import Tenns from "./images/tennis.png";

const Create = () => {
    return (
        <section className='create'>
            <div className="container">
                <div className="create__container">
                    <div className="create__box">
                        <ul className='create__list'>
                            <li className='create__item active'>
                                <h4 className='create__title'>Create</h4>
                                <img src={Icn} alt="icn" />
                            </li>
                            <li className='create__item'>
                                <h4 className='create__title'>Collaborate</h4>
                                <img src={Icn} alt="icn" />
                            </li>
                            <li className='create__item'>
                                <h4 className='create__title'>Sign</h4>
                                <img src={Icn} alt="icn" />
                            </li>
                            <li className='create__item'>
                                <h4 className='create__title'>Manage</h4>
                                <img src={Icn} alt="icn" />
                            </li>
                            <li className='create__item'>
                                <h4 className='create__title'>Analyze</h4>
                                <img src={Icn} alt="icn" />
                            </li>
                            <li className='create__item'>
                                <h4 className='create__title'>Integrate</h4>
                                <img src={Icn} alt="icn" />
                            </li>
                        </ul>
                    </div>

                    <div className="create__main">
                        <div className="create__main-box">
                            <h3 className='create__main-box-title'>Collaborate</h3>
                            <p className='create__main-box-text'>Work together on one version in real-time. No hocus pocus.</p>

                            <div className='create__main-box-sn'>
                                <img src={Galichka} alt="galichka" />
                                <p className='create__main-box-sn-text'>Edit live</p>
                            </div>

                            <div className='create__main-box-sn'>
                                <img src={Galichka} alt="galichka" />
                                <p className='create__main-box-sn-text'>Make fields interactive</p>
                            </div>

                            <div className='create__main-box-sn'>
                                <img src={Galichka} alt="galichka" />
                                <p className='create__main-box-sn-text'>Stay one step ahead</p>
                            </div>

                            <button className='create__main-box-btn'>Learn more</button>
                        </div>

                        <div className="create__inner">
                            <img className='create__inner-img' src={Tenns} alt="tennis koptoklari va raketka" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Create;