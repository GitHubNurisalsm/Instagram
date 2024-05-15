import React from 'react';
import "../../styles/home.scss"
import cristiano from "../../assets/cristiano.jpg"
import real from "../../assets/real.jpg"
import { FaRegComment } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { PiHeartBold } from "react-icons/pi";
import realmadrid from "../../assets/realmadrid.jpg"
import mrbeast from "../../assets/mrbeast.jpg"
import mylogo from "../../assets/mylogo.jpeg"
import nurlanova from "../../assets/nurlanova.jpg"
import motivation from "../../assets/motivation.jpg"
import gulina from "../../assets/gulina.jpg"
import japon from "../../assets/japon.jpg"


const Home = () => {
    return (
        <section className={"home"}>
            <div className="home__top">
                <div className="home__top-stories">
                    <img src={cristiano} alt=""/>
                    <p className="home__top-name">
                        cristiano
                    </p>
                </div>

                <div className="home__top-stories">
                    <img src={realmadrid} alt=""/>
                    <p className="home__top-name">
                        realmadrid
                    </p>
                </div>

                <div className="home__top-stories">
                    <img src={mrbeast} alt=""/>
                    <p className="home__top-name">
                        mrbeast
                    </p>
                </div>

                <div className="home__top-stories">
                    <img src={mylogo} alt=""/>
                    <p className="home__top-name">
                        f4
                    </p>
                </div>

                <div className="home__top-stories">
                    <img src={nurlanova} alt=""/>
                    <p className="home__top-name">
                        nurlanova
                    </p>
                </div>

                <div className="home__top-stories">
                    <img src={motivation} alt=""/>
                    <p className="home__top-name">
                        mativation
                    </p>
                </div>

                <div className="home__top-stories">
                    <img src={gulina} alt=""/>
                    <p className="home__top-name">
                        gulina
                    </p>
                </div>
                <div className="home__top-stories">
                    <img src={japon} alt=""/>
                    <p className="home__top-name">
                        quacent_volley
                    </p>
                </div>
            </div>
            <div className="home__post">
                <div className="home__post-profile">
                    <img src={realmadrid} alt="" className=""/>
                    <h2 className="home__post-name">
                        realmadrid
                    </h2>
                </div>
                    <div className="home__post-item">
                        <img src={real} alt=""/>
                    </div>
                    <div className="home__post-icons">
                        <PiHeartBold />
                        <FaRegComment />
                        <FaTelegramPlane />
                    </div>
                    <p className="home__post-count">
                        22 565 отметок "Нравится"
                    </p>
                    <p className="home__post-commit">
                        Цените своих близких, ведь они всегда готовы вам помочь ❤️
                    </p>

            </div>
            <div className="home__post">
                <div className="home__post-profile">
                    <img src={cristiano} alt="" className=""/>
                    <h2 className="home__post-name">
                        CR7
                    </h2>
                </div>
                <div className="home__post-item">
                    <img src={real} alt=""/>
                </div>
                <div className="home__post-icons">
                    <PiHeartBold />
                    <FaRegComment />
                    <FaTelegramPlane />
                </div>
                <p className="home__post-count">
                    22 565 отметок "Нравится"
                </p>
                <p className="home__post-commit">
                    Цените своих близких, ведь они всегда готовы вам помочь ❤️
                </p>

            </div>
            <div className="home__post">
                <div className="home__post-profile">
                    <img src={cristiano} alt="" className=""/>
                    <h2 className="home__post-name">
                        CR7
                    </h2>
                </div>
                <div className="home__post-item">
                    <img src={real} alt=""/>
                </div>
                <div className="home__post-icons">
                    <PiHeartBold />
                    <FaRegComment />
                    <FaTelegramPlane />
                </div>
                <p className="home__post-count">
                    22 565 отметок "Нравится"
                </p>
                <p className="home__post-commit">
                    Цените своих близких, ведь они всегда готовы вам помочь ❤️
                </p>

            </div>
            <div className="home__post">
                <div className="home__post-profile">
                    <img src={cristiano} alt="" className=""/>
                    <h2 className="home__post-name">
                        CR7
                    </h2>
                </div>
                <div className="home__post-item">
                    <img src={real} alt=""/>
                </div>
                <div className="home__post-icons">
                    <PiHeartBold />
                    <FaRegComment />
                    <FaTelegramPlane />
                </div>
                <p className="home__post-count">
                    22 565 отметок "Нравится"
                </p>
                <p className="home__post-commit">
                    Цените своих близких, ведь они всегда готовы вам помочь ❤️
                </p>

            </div>

        </section>
    );
};

export default Home;