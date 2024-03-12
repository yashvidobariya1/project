import React from 'react';
import '../About/about.css';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const About = () => {
    const location = useLocation();
    const isprofilepage = location.pathname === '/about';

    return (
        <>
            {isprofilepage && <Navbar />}
            <div className="section">
                <section className="about section">
                    <div className="seccontainer">
                        <div className="title">
                            Lorem, ipsum.
                        </div>

                        <div className="maincontent container grid">
                            <div className="singleitem">
                                <motion.img
                                    src="images/p4.jpg"
                                    alt="name"
                                    whileHover={{ rotate: 7, duration: 6 }}
                                />

                                <h3>100+ Lorem.</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt corrupti laborum molestiae unde fuga illo libero dolores illum laboriosam sit?</p>
                            </div>

                            <div className="singleitem">
                                <motion.img
                                    src="images/p1.jpeg"
                                    alt="name"
                                    whileHover={{ rotate: 7, duration: 6 }}
                                />

                                <h3>1000+ Lorem.</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum molestias unde iste totam vero inventore.</p>
                            </div>

                            <div className="singleitem">
                                <motion.img
                                    src="images/p7.jpg"
                                    alt="name"
                                    whileHover={{ rotate: 7, duration: 6 }}
                                />

                                <h3>2000+ Lorem, ipsum.</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt corrupti laborum molestiae unde fuga illo libero dolores illum laboriosam sit?</p>
                            </div>
                        </div>

                        <div className="videocard container">
                            <div className="cardcontent ">
                                <motion.div
                                    className="cardtext"
                                    initial={{ opacity: 0, y: 90 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 3, delay: 0.9 }}
                                >
                                    <h2>Lorem ipsum dolor sit amet consectetur.</h2>
                                    <p>Lorem ipsum dolor sit, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam consequatur iure amet velit ad autem, eaque, id ipsam cupiditate impedit, eius minus quo asperiores officiis deserunt libero. Quos, vero necessitatibus? amet consectetur adipisicing elit. Incidunt!</p>
                                </motion.div>

                                <div className="cardvideo">
                                    <video src="images/clips.mp4" autoPlay loop muted type="video/mp4"></video>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {isprofilepage && <Footer />}
        </>
    );
}

export default About;
