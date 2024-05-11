import React from 'react';
import "../../styles/home.scss"
import cristiano from "../../assets/278931269_360124899498969_9006978846103417088_n.jpg"
import real from "../../assets/real.jpg"
import { FaRegComment } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { PiHeartBold } from "react-icons/pi";


const Home = () => {
    return (
        <section className={"home"}>
            <div className="home__top">
                <div className="home__top-stories">
                    <img src={cristiano} alt=""/>
                    <p className="home__top-name">
                        CR7
                    </p>
                </div>

                <div className="home__top-stories">
                    <img src={cristiano} alt=""/>
                    <p className="home__top-name">
                        CR7
                    </p>
                </div>

                <div className="home__top-stories">
                    <img src={cristiano} alt=""/>
                    <p className="home__top-name">
                        CR7
                    </p>
                </div>

                <div className="home__top-stories">
                    <img src={cristiano} alt=""/>
                    <p className="home__top-name">
                        CR7
                    </p>
                </div>

                <div className="home__top-stories">
                    <img src={cristiano} alt=""/>
                    <p className="home__top-name">
                        CR7
                    </p>
                </div>

                <div className="home__top-stories">
                    <img src={cristiano} alt=""/>
                    <p className="home__top-name">
                        CR7
                    </p>
                </div>

                <div className="home__top-stories">
                    <img src={cristiano} alt=""/>
                    <p className="home__top-name">
                        CR7
                    </p>
                </div>
                <div className="home__top-stories">
                    <img src={cristiano} alt=""/>
                    <p className="home__top-name">
                        CR7
                    </p>
                </div>
                <div className="home__top-stories">
                    <img src={cristiano} alt=""/>
                    <p className="home__top-name">
                        CR7
                    </p>
                </div>
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