import React, { useEffect, useState } from 'react'
import { BsFillHouseHeartFill } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import '../Navbar/Navbar.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [login, setlogin] = useState(false);

    useEffect(() => {
        setlogin(localStorage.getItem("token") !== null);
    }, []);


    const [active, setactive] = useState('navbar');

    const shownavbar = () => {
        setactive('navbar activenavbar')
    }

    const removenavbar = () => {
        setactive('navbar');
    }

    const [trans, settras] = useState('header');

    const addbg = () => {
        if (window.scrollY >= 10) {
            settras('header activeheader')
        } else {
            settras('header')
        }
    }

    window.addEventListener('scroll', addbg)
    return (
        <section className='navbarsection'>
            <div className={trans}>

                <div className="logodiv">
                    <a href="#" className="logo">
                        <h1 className='flex'><BsFillHouseHeartFill className="icon" />Dot</h1>
                    </a>
                </div>

                <div className={active}>
                    <ul className="navlist flex">

                        <li className="navItem">
                            <a href="/home" className="navLink">Home</a>
                        </li>

                        <li className="navItem">
                            <a href="/profile" className="navLink">profile</a>
                        </li>

                        <li className="navItem">
                            <a href="/about" className="navLink">About us</a>
                        </li>

                        <li className="navItem">
                            <a href="/blog" className="navLink">Review</a>
                        </li>



                        <div className="headerBtns flex">
                            {!login && (
                                <button className='btn loginbtn'>
                                    <NavLink to={"/login"}>Login</NavLink>
                                </button>
                            )}
                            {login && (
                                <button className='btn loginbtn'>
                                    <a href="/userprofile">User Profile</a>
                                </button>
                            )}
                        </div>
                    </ul>
                    <div onClick={
                        removenavbar} className="closenavbar">
                        <AiFillCloseCircle className="icon" />
                    </div>

                </div>

                <div onClick={shownavbar} className="togglenavbar">
                    <TbGridDots className='icon' />
                </div>
            </div>
        </section>
    )
}

export default Navbar