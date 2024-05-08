import React from 'react';
import "../../styles/home.scss"
import cristiano from "../../assets/278931269_360124899498969_9006978846103417088_n.jpg"
import real from "../../assets/real.jpg"

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
            <div className="home__main">
                <div className="home__main-profile">
                    <img src="" alt="" className=""/>
                    <h2 className="home__main-name">
                        CR7
                    </h2>
                </div>
                <div className="home__post">
                    <img src={real} alt="" className="home__post-img"/>
                    <div className="home__post-icons">

                    </div>
                    <p className="home__post-count">

                    </p>
                    <p className="home__post-commit">

                    </p>
                </div>

            </div>
        </section>
    );
};

export default Home;