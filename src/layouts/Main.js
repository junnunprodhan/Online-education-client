import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../pages/sharePage/Nav';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;