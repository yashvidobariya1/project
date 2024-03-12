import React from 'react'
import { } from '../Home/Home.css'
import Profile from '../Profile/Profile'
import About from '../About/About'
import Blog from '../Blog/Blog';
import Slidebar from '../../Slider/Slider';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import data from '../../Data/Data.json';
import { motion } from 'framer-motion';

const Home = () => {


    return (
        <>
            <Navbar />


            <section className="home">

                <div className="seccontainer container">
                    <div className="hometext">

                        <motion.h1 className="title"
                            animate={{ y: [10, -15, 10], transition: { duration: 9, repeat: Infinity } }}>

                            Lorem ipsum dolor sit, amet consecteturs
                        </motion.h1>

                        <p className="subtitle">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.  non fugit incidunt.
                        </p>

                        <button className="btn">
                            <a href="#">Explore Now</a>
                        </button>
                    </div>

                    <div className="homeCard grid">
                        <div className="locationdiv">
                            <label htmlFor="location">I'm looking for a</label>
                            <input type='text' placeholder='Women' />
                        </div>

                        <div className="distdiv">
                            <label htmlFor="distance">of religion</label>
                            <input type='text' placeholder='Hindu' />
                        </div>

                        <div className="pricediv">
                            <label htmlFor="price">and mother tongue</label>
                            <input type='text' placeholder='Gujrati' />
                        </div>

                        <button className="btn">
                            Search
                        </button>
                    </div>


                </div>

            </section >
            <Profile />
            <Slidebar />
            <About />
            <Blog />
            <Footer />

        </>
    )
}

export default Home;
