import React from 'react';
import NavBar from '../navBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';

const MainLayout = () => {
    return (
        <div className="container mx-auto">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;