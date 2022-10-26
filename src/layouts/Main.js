import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/sharePage/Footer';
import Nav from '../pages/sharePage/Nav';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;