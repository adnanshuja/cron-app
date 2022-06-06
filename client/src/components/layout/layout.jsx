import React from 'react';
import Navbar from '../navbar/navbar';

import './layout.css';
const  Layout = ({children, title, subTitle}) => {
    return (
        <div className="main-wrapp">
            <Navbar/>
            <div className="content-wrap">
            <section className="section-space">
                    <div className="heading-title text-left">
                        <h2>{title}</h2>
                        <h3>{subTitle}</h3>
                    </div>
                    <div>{children}</div>
            </section>
            </div>
        </div>
    );
};

export default Layout;