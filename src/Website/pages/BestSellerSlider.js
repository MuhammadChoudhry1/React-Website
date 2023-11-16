import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../css/BestSellerSlider.css"
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
/*importing all of the libaries that are needed*/

const HeroCarousel = () => { /*const is used for declaring a variable. the arrows are componets that define functional components.
                             () are used for declaring if any promts are gonna be inputed*/
    const settings = { /*const settings is declaring what will be in the slider*/
        dots: false,
        arrows: false,
        mobileFirst: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        swipeToSlide: true,
        touchMove: true,
    };

    return ( /*this is used*/
        <div>
            <h1 className='title'>Best Sellers</h1>
            <Slider {...settings}>
                <li>
                    <article className='card' style={{ width: "438px" }}>{/*atricle was used to */}
                        <figure className='image-container'>{/*i have used figure to contain the image*/}
                            <div className='image'>
                                <Link to="/shoppage">
                                    <img src="https://cdn11.bigcommerce.com/s-wqoxjb8m8k/images/stencil/640w/products/6041/58367/JC001%2520JBK%2520FRONT__14096.1658694101.jpg" alt="AWDis Cool T-Shirt" class="card-image ls-is-cached lazyloaded" />
                                </Link>
                            </div>
                        </figure>
                        <div className='brand-info'>
                            <div className='card-title' >
                                <Link to="/shoppage" className="Link">
                                    <h1>AWDis Cool T-Shirt</h1>
                                </Link>
                            </div>
                            <span className='card-price-from'>From</span>
                            <div className='brand-price'>
                                <div class="price-section price-section--withTax">
                                    <span class="currency">£</span>5<span>.74</span>
                                </div>
                            </div>
                            <div className='button'>
                                <Link to="/shoppage" className="Link">
                                    <div className='button-icon small-button Boot'>
                                        <span>Shop Now</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </article>
                </li>

                <li>
                    <article className='card' style={{ width: "438px" }}>
                        <figure className='image-container'>
                            <div className='image'>
                                <Link to="/shoppage">
                                    <img src="https://cdn11.bigcommerce.com/s-wqoxjb8m8k/images/stencil/640w/products/8327/84406/RS231M%2520BK_BK%2520MODEL%25201__06282.1658826558.jpg" alt="AWDis Cool T-Shirt" class="card-image ls-is-cached lazyloaded" />
                                </Link>
                            </div>
                        </figure>
                        <div className='brand-info'>
                            <div className='card-title'>
                                <Link to="/shoppage" className="Link">
                                    <h1>Result Core Printable Soft Shell Jacket</h1>
                                </Link>
                            </div>
                            <span className='card-price-from'>From</span>
                            <div className='brand-price'>
                                <div class="price-section price-section--withTax">
                                    <span class="currency">£</span>5<span>.74</span>
                                </div>
                            </div>
                            <div className='button'>
                                <Link to="/shoppage" className="Link">
                                    <div className='button-icon small-button Boot'>
                                        <span>Shop Now</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </article>
                </li>

                <li>
                    <article className='card' style={{ width: "438px" }}>
                        <figure className='image-container'>
                            <div className='image'>
                                <Link to="/shoppage">
                                    <img src="https://cdn11.bigcommerce.com/s-wqoxjb8m8k/images/stencil/640w/products/6726/59050/RX101%2520BLK%2520FRONT__10369.1658694750.jpg" alt="AWDis Cool T-Shirt" class="card-image ls-is-cached lazyloaded" />
                                </Link>
                            </div>
                        </figure>
                        <div className='brand-info'>
                            <div className='card-title'>
                                <Link to="/shoppage" className="Link">
                                    <h1>Pro RTX Pro Piqué Polo Shirt</h1>
                                </Link>
                            </div>
                            <span className='card-price-from'>From</span>
                            <div className='brand-price'>
                                <div class="price-section price-section--withTax">
                                    <span class="currency">£</span>5<span>.74</span>
                                </div>
                            </div>
                            <div className='button'>
                                <Link to="/shoppage" className="Link">
                                    <div className='button-icon small-button Boot'>
                                        <span>Shop Now</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </article>
                </li>

                <li>
                    <article className='card' style={{ width: "438px" }}>
                        <figure className='image-container'>
                            <div className='image'>
                                <Link to="/shoppage">
                                    <img src="https://cdn11.bigcommerce.com/s-wqoxjb8m8k/images/stencil/640w/products/6041/58367/JC001%2520JBK%2520FRONT__14096.1658694101.jpg" alt="AWDis Cool T-Shirt" class="card-image ls-is-cached lazyloaded" />
                                </Link>
                            </div>
                        </figure>
                        <div className='brand-info'>
                            <div className='card-title'>
                                <Link to="/shoppage" className="Link">
                                    <h1>AWDis Cool T-Shirt</h1>
                                </Link>
                            </div>
                            <span className='card-price-from'>From</span>
                            <div className='brand-price'>
                                <div class="price-section price-section--withTax">
                                    <span class="currency">£</span>5<span>.74</span>
                                </div>
                            </div>

                            <div className='button'>
                                <Link to="/shoppage" className="Link">
                                    <div className='button-icon small-button Boot'>
                                        <span>Shop Now</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </article>
                </li>
            </Slider>
        </div>
    );
};

export default HeroCarousel;