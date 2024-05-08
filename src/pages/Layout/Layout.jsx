import React from 'react';
import Bar from "./Bar/Bar";
import Footer from "./Footer/Footer";
import {Outlet} from "react-router-dom"
import "../../styles/layout.scss"

const Layout = () => {
    return (
        <>
            <section className="layout">
                <div className="layout__block">
                    <Bar/>
                    <Outlet/>
                    <Footer/>
                </div>
            </section>

        </>
    );
};

export default Layout;