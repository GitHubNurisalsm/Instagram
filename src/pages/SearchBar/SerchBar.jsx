import React from 'react';
import { RxCross1 } from "react-icons/rx";
import "../../styles/SerchBar.scss"

const SerchBar = () => {
    return (
        <section className={"serchBar"}>
            <h1 className="serchBar__title">
                Поисковый зопрос
            </h1>
            <input type="text" className="serchBar__input"/>

            <h2 className="serchBar__history">
                Недавеые
            </h2>
            <button className="serchBar__cleane">
                Очистить всё
            </button>

            <div className="serchBar__users">
                <img src="" alt="" className="serchBar__avatar"/>

                <p className="serchBar__name">

                </p>
                <p className="serchBar__nik">

                </p>
                <button className="serchBar__delet">
                    <RxCross1 />
                </button>
            </div>
        </section>
    );
};

export default SerchBar;