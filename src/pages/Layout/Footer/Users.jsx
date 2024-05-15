import React from 'react';
import avatarka from "../../../assets/mylogo.jpeg"
import "../../../styles/users.scss"

const Users = () => {
    return (
        <section className={"users"}>
                <div className="users__user">
                    <div className="users__user-row">
                        <div className="users__user-elements">
                            <img src={avatarka} alt="" className="users__user-img"/>
                            <div className="users__user-desc">
                                <h3 className="users__user-name">
                                    n6.2209
                                </h3>
                                <p className="users__user-nik">
                                    F4
                                </p>
                            </div>
                            <button className="users__subscribe">
                                Подписаться
                            </button>
                        </div>
                        <div className="users__reference">
                            <p>
                                Реклмендация для вас
                            </p>
                        </div>
                        <div className="users__user-elements">
                            <img src={avatarka} alt="" className="users__user-img"/>
                            <div className="users__user-desc">
                                <h3 className="users__user-name">
                                    n6.2209
                                </h3>
                                <p className="users__user-nik">
                                    F4
                                </p>
                            </div>
                            <button className="users__subscribe">
                                Подписаться
                            </button>
                        </div>
                        <div className="users__user-elements">
                            <img src={avatarka} alt="" className="users__user-img"/>
                            <div className="users__user-desc">
                                <h3 className="users__user-name">
                                    n6.2209
                                </h3>
                                <p className="users__user-nik">
                                    F4
                                </p>
                            </div>
                            <button className="users__subscribe">
                                Подписаться
                            </button>
                        </div>
                        <div className="users__user-elements">
                            <img src={avatarka} alt="" className="users__user-img"/>
                            <div className="users__user-desc">
                                <h3 className="users__user-name">
                                    n6.2209
                                </h3>
                                <p className="users__user-nik">
                                    F4
                                </p>
                            </div>
                            <button className="users__subscribe">
                                Подписаться
                            </button>
                        </div>
                        <div className="users__user-elements">
                            <img src={avatarka} alt="" className="users__user-img"/>
                            <div className="users__user-desc">
                                <h3 className="users__user-name">
                                    n6.2209
                                </h3>
                                <p className="users__user-nik">
                                    F4
                                </p>
                            </div>
                            <button className="users__subscribe">
                                Подписаться
                            </button>
                        </div>
                </div>
            </div>
        </section>
    );
};

export default Users;