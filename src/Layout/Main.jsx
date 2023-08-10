import React from 'react';
import { Outlet } from 'react-router-dom';
<<<<<<< HEAD
=======
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';
>>>>>>> f869a106dc88f3147194bbdf0b479293fa6c3bea

const Main = () => {
    return (
        <div>
<<<<<<< HEAD
            <Outlet></Outlet>
=======
            <Navbar/>
            <Outlet />
            <Footer/>
>>>>>>> f869a106dc88f3147194bbdf0b479293fa6c3bea
        </div>
    );
};

export default Main;