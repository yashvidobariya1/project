import React from "react";
import Slider from "react-slick";
import review from '../Data/Review.json'
import '../Slider/slider.css'

export default function Slidebar() {
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ]
    };

    return (
        <>
            <div className="textdiv">
                <h2 className="sectitle">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </h2>

            </div>
            <div className="slider-container">

                <Slider {...settings} className="slider">
                    {review.map((item, index) => (
                        <div className="slide" key={index}>

                            <div className="slide-image">
                                <img src={item.image} alt={index} />
                            </div>

                            <div className="content">
                                <p>{item.review}</p>
                            </div>

                        </div>

                    ))}
                </Slider>
            </div>

        </>
    );
}
