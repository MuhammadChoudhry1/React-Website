import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../css/footerSlider.css"


const FooterSlider = () => {
    const settings = {
        dots: false,
        arrows: false,
        mobileFirst: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        swipeToSlide: true,
        touchMove: true,
    };

    return (
        <Slider {...settings}>
            <li class="brand slick-slide" data-slick-index="0" aria-hidden="true" tabindex="-1">
                <a title="Russell" aria-label="Russell" href="/russell/" tabindex="-1">
                    <div class="card-img-container">
                        <div class="card-img-inner-container">
                            <img src="https://cdn11.bigcommerce.com/s-wqoxjb8m8k/images/stencil/300x300/m/api3wqwdv__65910.original.jpg" loading="lazy" alt="Russell" />
                        </div>
                    </div>
                </a>
            </li>

            <li class="brand slick-slide" data-slick-index="1" aria-hidden="true" tabindex="-1">
                <a title="SOL'S" aria-label="SOL'S" href="/sols/" tabindex="-1">
                    <div class="card-img-container">
                        <div class="card-img-inner-container">
                            <img src="https://cdn11.bigcommerce.com/s-wqoxjb8m8k/images/stencil/300x300/x/apirmh0xe__70808.original.jpg" loading="lazy" alt="SOL'S" />
                        </div>
                    </div>
                </a>
            </li>

            <li class="brand slick-slide" data-slick-index="2" aria-hidden="true" tabindex="-1">
                <a title="NEOBLU" aria-label="NEOBLU" href="/neoblu/" tabindex="-1">
                    <div class="card-img-container">
                        <div class="card-img-inner-container">
                            <img src="https://cdn11.bigcommerce.com/s-wqoxjb8m8k/images/stencil/300x300/h/apirypeao__11818.original.jpg" loading="lazy" alt="NEOBLU" />
                        </div>
                    </div>
                </a>
            </li>

            <li class="brand slick-slide" data-slick-index="3" aria-hidden="true" tabindex="-1">
                <a title="RTP Apparel" aria-label="RTP Apparel" href="/rtp-apparel/" tabindex="-1">
                    <div class="card-img-container">
                        <div class="card-img-inner-container">
                            <img src="https://cdn11.bigcommerce.com/s-wqoxjb8m8k/images/stencil/300x300/y/api6pdtet__28914.original.jpg" loading="lazy" alt="RTP Apparel" />
                        </div>
                    </div>
                </a>
            </li>

            <li class="brand slick-slide" data-slick-index="4" aria-hidden="true" tabindex="-1">
                <a title="Russell Collection" aria-label="Russell Collection" href="/russell-collection/" tabindex="-1">
                    <div class="card-img-container">
                        <div class="card-img-inner-container">
                            <img src="https://cdn11.bigcommerce.com/s-wqoxjb8m8k/images/stencil/300x300/a/apidelzcs__28330.original.jpg" loading="lazy" alt="Russell Collection" />
                        </div>
                    </div>
                </a>
            </li>

            <li class="brand slick-slide" data-slick-index="5" aria-hidden="true" tabindex="-1">
                <a title="AWDis Academy" aria-label="AWDis Academy" href="/awdis-academy/" tabindex="-1">
                    <div class="card-img-container">
                        <div class="card-img-inner-container">
                            <img src="https://cdn11.bigcommerce.com/s-wqoxjb8m8k/images/stencil/300x300/v/apiyahefg__36152.original.jpg" loading="lazy" alt="AWDis Academy" />
                        </div>
                    </div>
                </a>
            </li>

            <li class="brand slick-slide slick-current slick-active" data-slick-index="6" aria-hidden="false" tabindex="0">
                <a title="Dennys" aria-label="Dennys" href="/dennys/" tabindex="0">
                    <div class="card-img-container">
                        <div class="card-img-inner-container">
                            <img src="https://cdn11.bigcommerce.com/s-wqoxjb8m8k/images/stencil/300x300/f/api3nffdk__97331.original.jpg" loading="lazy" alt="Dennys" />
                        </div>
                    </div>
                </a>
            </li>

            <li class="brand slick-slide" data-slick-index="7" aria-hidden="true" tabindex="-1">
                <a title="AFD" aria-label="AFD" href="/afd/" tabindex="-1">
                    <div class="card-img-container">
                        <div class="card-img-inner-container">
                            <img src="https://cdn11.bigcommerce.com/s-wqoxjb8m8k/images/stencil/300x300/m/apihdwkpf__43228.original.jpg" loading="lazy" alt="AFD" />
                        </div>
                    </div>
                </a>
            </li>

            <li class="brand slick-slide" data-slick-index="8" aria-hidden="true" tabindex="-1">
                <a title="Stormtech" aria-label="Stormtech" href="/stormtech/" tabindex="-1">
                    <div class="card-img-container">
                        <div class="card-img-inner-container">
                            <img src="https://cdn11.bigcommerce.com/s-wqoxjb8m8k/images/stencil/300x300/l/apivwsgof__10179.original.jpg" loading="lazy" alt="Stormtech" />
                        </div>
                    </div>
                </a>
            </li>

            <li class="brand slick-slide" data-slick-index="9" aria-hidden="true" tabindex="-1">
                <a title="Anthem" aria-label="Anthem" href="/anthem/" tabindex="-1">
                    <div class="card-img-container">
                        <div class="card-img-inner-container">
                            <img src="https://cdn11.bigcommerce.com/s-wqoxjb8m8k/images/stencil/300x300/d/apil6sh5e__95724.original.jpg" loading="lazy" alt="Anthem" />
                        </div>
                    </div>
                </a>
            </li>

            <li class="brand slick-slide slick-cloned" data-slick-index="10" aria-hidden="true" id="" tabindex="-1">
                <a title="Russell" aria-label="Russell" href="/russell/" tabindex="-1">
                    <div class="card-img-container">
                        <div class="card-img-inner-container">
                            <img src="https://cdn11.bigcommerce.com/s-wqoxjb8m8k/images/stencil/300x300/m/api3wqwdv__65910.original.jpg" loading="lazy" alt="Russell" />
                        </div>
                    </div>
                </a>
            </li>

            <li class="brand slick-slide slick-cloned" data-slick-index="11" aria-hidden="true" id="" tabindex="-1">
                <a title="SOL'S" aria-label="SOL'S" href="/sols/" tabindex="-1">
                    <div class="card-img-container">
                        <div class="card-img-inner-container">
                            <img src="https://cdn11.bigcommerce.com/s-wqoxjb8m8k/images/stencil/300x300/x/apirmh0xe__70808.original.jpg" loading="lazy" alt="SOL'S" />
                        </div>
                    </div>
                </a>
            </li>

            <li class="brand slick-slide slick-cloned" data-slick-index="12" aria-hidden="true" id="" tabindex="-1">
                <a title="NEOBLU" aria-label="NEOBLU" href="/neoblu/" tabindex="-1">
                    <div class="card-img-container">
                        <div class="card-img-inner-container">
                            <img src="https://cdn11.bigcommerce.com/s-wqoxjb8m8k/images/stencil/300x300/h/apirypeao__11818.original.jpg" loading="lazy" alt="NEOBLU" />
                        </div>
                    </div>
                </a>
            </li>

            <li class="brand slick-slide slick-cloned" data-slick-index="13" aria-hidden="true" id="" tabindex="-1">
                <a title="RTP Apparel" aria-label="RTP Apparel" href="/rtp-apparel/" tabindex="-1">
                    <div class="card-img-container">
                        <div class="card-img-inner-container">
                            <img src="https://cdn11.bigcommerce.com/s-wqoxjb8m8k/images/stencil/300x300/y/api6pdtet__28914.original.jpg" loading="lazy" alt="RTP Apparel" />
                        </div>
                    </div>
                </a>
            </li>

            <li class="brand slick-slide slick-cloned" data-slick-index="14" aria-hidden="true" id="" tabindex="-1">
                <a title="Russell Collection" aria-label="Russell Collection" href="/russell-collection/" tabindex="-1">
                    <div class="card-img-container">
                        <div class="card-img-inner-container">
                            <img src="https://cdn11.bigcommerce.com/s-wqoxjb8m8k/images/stencil/300x300/a/apidelzcs__28330.original.jpg" loading="lazy" alt="Russell Collection" />
                        </div>
                    </div>
                </a>
            </li>

            <li class="brand slick-slide slick-cloned" data-slick-index="15" aria-hidden="true" id="" tabindex="-1">
                <a title="AWDis Academy" aria-label="AWDis Academy" href="/awdis-academy/" tabindex="-1">
                    <div class="card-img-container">
                        <div class="card-img-inner-container">
                            <img src="https://cdn11.bigcommerce.com/s-wqoxjb8m8k/images/stencil/300x300/v/apiyahefg__36152.original.jpg" loading="lazy" alt="AWDis Academy" />
                        </div>
                    </div>
                </a>
            </li>

            <li class="brand slick-slide slick-cloned" data-slick-index="16" aria-hidden="true" id="" tabindex="-1">
                <a title="Dennys" aria-label="Dennys" href="/dennys/" tabindex="-1">
                    <div class="card-img-container">
                        <div class="card-img-inner-container">
                            <img src="https://cdn11.bigcommerce.com/s-wqoxjb8m8k/images/stencil/300x300/f/api3nffdk__97331.original.jpg" loading="lazy" alt="Dennys" />
                        </div>
                    </div>
                </a>
            </li>

            <li class="brand slick-slide slick-cloned" data-slick-index="17" aria-hidden="true" id="" tabindex="-1">
                <a title="AFD" aria-label="AFD" href="/afd/" tabindex="-1">
                    <div class="card-img-container">
                        <div class="card-img-inner-container">
                            <img src="https://cdn11.bigcommerce.com/s-wqoxjb8m8k/images/stencil/300x300/m/apihdwkpf__43228.original.jpg" loading="lazy" alt="AFD" />
                        </div>
                    </div>
                </a>
            </li>

            <li class="brand slick-slide slick-cloned" data-slick-index="18" aria-hidden="true" id="" tabindex="-1">
                <a title="Stormtech" aria-label="Stormtech" href="/stormtech/" tabindex="-1">
                    <div class="card-img-container">
                        <div class="card-img-inner-container">
                            <img src="https://cdn11.bigcommerce.com/s-wqoxjb8m8k/images/stencil/300x300/l/apivwsgof__10179.original.jpg" loading="lazy" alt="Stormtech" />
                        </div>
                    </div>
                </a>
            </li>

            <li class="brand slick-slide slick-cloned" data-slick-index="19" id="" aria-hidden="true" tabindex="-1">
                <a title="Anthem" aria-label="Anthem" href="/anthem/" tabindex="-1">
                    <div class="card-img-container">
                        <div class="card-img-inner-container">
                            <img src="https://cdn11.bigcommerce.com/s-wqoxjb8m8k/images/stencil/300x300/d/apil6sh5e__95724.original.jpg" loading="lazy" alt="Anthem" />
                        </div>
                    </div>
                </a>
            </li>
        </Slider>
    );
};

export default FooterSlider;