import React from 'react';
import Bar from "./Bar/Bar";
import Footer from "./Footer/Footer";
import {Outlet} from "react-router-dom"

const Layout = () => {
    return (
        <div>
            <Bar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;