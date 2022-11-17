import React from 'react'
import Head from '../header/Head';
import Search from '../header/Search';
import Navbar from '../header/Navbar';
import './Header.css';




const Header = () => {
    return (
        <>
            <Head />
            <Search />
            <Navbar />
        </>
    )
}

export default Header