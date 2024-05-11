import React from 'react';
import Bar from "./Bar/Bar";
import Users from "./Footer/Users";
import {Outlet} from "react-router-dom"
import "../../styles/layout.scss"

const Layout = () => {
    return (
        <>
            <section className="layout">
                <div className="layout__block">
                    <Bar/>
                    <Outlet/>
                    <Users/>
                </div>
            </section>

        </>
    );
};

export default Layout;