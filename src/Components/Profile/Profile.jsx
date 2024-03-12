import React from 'react'
import { } from '../Profile/Profile.css'
import { BsArrowLeft, BsArrowRight, BsDot } from "react-icons/bs";
import data from '../../Data/Data.json'
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { NavLink, useLocation } from 'react-router-dom';


const Profile = ({ }) => {
    const location = useLocation();
    const isprofilepage = location.pathname === '/profile';


    return (
        <>
            {isprofilepage && <Navbar />}
            <section className="popular">
                <div className="seccontainer">
                    <div className="secheader flex">
                        <div className="textdiv">
                            <h2 className="sectitle">
                                Lorem, ipsum.
                            </h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita quis porro optio vero vitae sed.</p>
                        </div>

                        <div className="icondiv flex">
                            <BsArrowLeft className='icon lefticon' />
                            <BsArrowRight className='icon rigthicon' />
                        </div>
                    </div>

                    <div className="maincontent grid">

                        {
                            data.map((item, index) => {
                                return (
                                    <div className="maincontent grid" key={index}>

                                        <div className="singledestination ">

                                            <div className="desimage">

                                                <img src={item.image} alt="image title" />

                                                <div className="overlyinfo">
                                                    <h3>some text</h3>
                                                    <p>
                                                        Lorem ipsum dolor sit amet consecteturffdgfhfg  elit.
                                                    </p>
                                                    <NavLink to={`/details/${item.imdbID}`}>
                                                        <BsArrowRight className='icon' />
                                                    </NavLink>
                                                </div>
                                            </div>

                                            <div className="destfooter">
                                                <div className="number">
                                                    {item.slide}
                                                </div>
                                                <div className="desttext flex">
                                                    <h6>Lorem</h6>
                                                    <span className='flex'>
                                                        {/* <span className='dot'>
                                                        <BsDot className="icon" />
                                                    </span> */}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </section>
            {isprofilepage && <Footer />}
        </>
    )
}

export default Profile


