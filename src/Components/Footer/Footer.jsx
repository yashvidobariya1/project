import React from 'react'
import { SiYourtraveldottv } from "react-icons/si";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import '../Footer/footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="seccontainer container ">
                <div className="logodiv">

                    <div className="footerlogo">
                        <a href="#" className='logo flex'>
                            <h1 className='flex'><SiYourtraveldottv className='icon' />Dot</h1>
                        </a>
                    </div>



                    <div className="socials flex" >
                        <FaFacebookF className='icon' />
                        <FaTwitter className='icon' />
                        <FaInstagram className='icon' />
                    </div>

                </div>


                <div className="footerlinks">

                    <span className="linktitle">
                        helful links
                    </span>

                    <li>
                        <a href="#">Sign Up</a>
                    </li>

                    <li>
                        <a href="#">support</a>
                    </li>

                    <li>
                        <a href="#">Helpful Tips</a>
                    </li>

                    <li>
                        <a href="#">Tearms of Use</a>
                    </li>

                    <li>
                        <a href="#">Member Support</a>
                    </li>

                </div>



                <div className="footerlinks">
                    <span className="linktitle">
                        information
                    </span>

                    <li>
                        <a href="#">home</a>
                    </li>

                    <li>
                        <a href="#">Profile</a>
                    </li>

                    <li>
                        <a href="#">blog</a>
                    </li>

                    <li>
                        <a href="#">Contact Us</a>
                    </li>

                    <li>
                        <a href="#">About us</a>
                    </li>

                </div>


                <div className="footerlinks">
                    <span className="linktitle">
                        contact Us
                    </span>
                    <span className='phone' >90777 57789</span>
                    <span className='email'>www.com</span>
                </div>



            </div>
        </div>
    )
}

export default Footer