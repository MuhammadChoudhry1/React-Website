import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../css/Herocarousel.css";

const HeroCarousel = () => {
    const settings = {
        dots: false,
        arrows: false,
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        swipeToSlide: true,
        touchMove: true,
    };

    return (
        <Slider {...settings}>
            <div className='carousel-slide' style={{ backgroundImage: `url("your_background_image_url_1.jpg")` }}>
                <img className='image1' src="https://cdn11.bigcommerce.com/s-wqoxjb8m8k/images/stencil/883w/carousel/10/image_30.png?c=1" alt="" />
            </div>

            <div className='carousel-slide' style={{ backgroundImage: `url("your_background_image_url_2.jpg")` }}>
                <img className='image12' src="https://cdn11.bigcommerce.com/s-wqoxjb8m8k/images/stencil/1385w/carousel/15/orn_logo_square__96297.jpg?c=1" alt="" />
            </div>
        </Slider>
    );
};

export default HeroCarousel;