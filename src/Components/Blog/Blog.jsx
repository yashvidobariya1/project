import React from 'react';
import { BsArrowRightShort } from "react-icons/bs";
import '../Blog/blog.css';
import data from '../../Data/best.json';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { useLocation } from 'react-router-dom';

const Blog = () => {
    const location = useLocation();

    // Check if the current page is the Blog page
    const isBlogPage = location.pathname === '/blog';

    return (
        <>
            {isBlogPage && <Navbar />}
            <section className="blog container section">
                <div className="seccontainer">
                    <div className="secintro">
                        <h2 className="sectitle">OUR BEST REVIEWS</h2>
                        <p>Lorem ipsum dolor sit amet consectetur</p>
                    </div>
                    <div className="maincontainer">
                        {data.map(post => (
                            <div className="singlepost" key={post.imdbID}>
                                <div className="imgdiv">
                                    <img src={post.image} alt={post.name} />
                                </div>
                                <div className="postdetails">
                                    <h3>{post.name}</h3>
                                    <p>{post.categories}</p>
                                    <a href="#" className="flex">Read more <BsArrowRightShort className="icon" /></a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {isBlogPage && <Footer />}
        </>
    );
}

export default Blog;
