import React from 'react';
import { RxCross1 } from "react-icons/rx";
import "../../styles/SerchBar.scss"
import avatar from "../../assets/mylogo.jpeg"

const SerchBar = () => {
    return (
        <section className={"serchBar"}>
            <label>
                <h1 className="serchBar__title">
                    Поисковый зопрос
                </h1>
                <input type="text" className="serchBar__input" maxLength={12}/>
            </label>
            <div className="serchBar__row">
                <h2 className="serchBar__history">
                    Недавеые
                </h2>
                <button className="serchBar__cleane">
                    Очистить всё
                </button>
            </div>
            <div className="serchBar__users">
                <div className="serchBar__fixed">
                    <img src={avatar} alt="" className="serchBar__avatar"/>
                    <div className="serchBar__desc">
                        <p className="serchBar__name">
                            n6.2209
                        </p>
                        <p className="serchBar__nik">
                            F4
                        </p>
                    </div>
                </div>
                <button className="serchBar__delet">
                    <RxCross1 />
                </button>
            </div>
            <div className="serchBar__users">
                <div className="serchBar__fixed">
                    <img src={avatar} alt="" className="serchBar__avatar"/>
                    <div className="serchBar__desc">
                        <p className="serchBar__name">
                            n6.2209
                        </p>
                        <p className="serchBar__nik">
                            F4
                        </p>
                    </div>
                </div>
                <button className="serchBar__delet">
                    <RxCross1 />
                </button>
            </div>
            <div className="serchBar__users">
                <div className="serchBar__fixed">
                    <img src={avatar} alt="" className="serchBar__avatar"/>
                    <div className="serchBar__desc">
                        <p className="serchBar__name">
                            n6.2209
                        </p>
                        <p className="serchBar__nik">
                            F4
                        </p>
                    </div>
                </div>
                <button className="serchBar__delet">
                    <RxCross1 />
                </button>
            </div>
        </section>
    );
};

export default SerchBar;