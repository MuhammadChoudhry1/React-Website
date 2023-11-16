import React from 'react'
import "../css/homePage.css"
import HeroCarousel from './HeroCarousel';
import BestSellerSlider from './BestSellerSlider';

function Homepage() {
  return (
    <>
      <main className='body' id='main-content' role='main'>
        <div className='home-banner-container'>
          <section className='home-banner-message home-banner-message-header home-home'>
            <ul className='home-banner-message-list home-js-bannermessage'>

              <li class="home-message">
                <span>In House Production</span>
              </li>

              <li className='home-message'>
                <span>Free delivery</span>
              </li>

              <li className='home-message'>
                <span>Price Promise</span>
              </li>

              <li className='home-message home-message_schoolwear'>
                <span>Clear Pay Klanra</span>
              </li>

            </ul>
          </section>
        </div>

        <div className='home-heroCarousel'>
          <div className='container'>
            <section className='home-heroCarousel slick-initialized slick-slider' >
              <HeroCarousel />
            </section>
          </div>
        </div>

        <div className='best-seller-block'>
          <div className='title-wrap'>
            <BestSellerSlider />
          </div>
        </div>

        <div className='message-home'>
          <div className='small--shirts'>
            <div className='title'>
              <h4>Popular Catergories</h4>
            </div>
            <div className='shirtsCategory'>
              <div className='smallShirts'>
                <div className='Shirts'>
                  <img src="https://cdn11.bigcommerce.com/s-wqoxjb8m8k/images/stencil/original/image-manager/image-34.png?t=1657557502" />
                  <span>Jacket</span>
                </div>

                <div className='Shirts'>
                  <img src="https://cdn11.bigcommerce.com/s-wqoxjb8m8k/images/stencil/original/image-manager/image-34.png?t=1657557502" />
                  <span>Jacket</span>
                </div>

                <div className='Shirts'>
                  <img src="https://cdn11.bigcommerce.com/s-wqoxjb8m8k/images/stencil/original/image-manager/image-34.png?t=1657557502" />
                  <span>Jacket</span>
                </div>

                <div className='Shirts'>
                  <img src="https://cdn11.bigcommerce.com/s-wqoxjb8m8k/images/stencil/original/image-manager/image-34.png?t=1657557502" />
                  <span>Jacket</span>
                </div>
              </div>
              <div className='largeShirts'>
                <img src="https://cdn11.bigcommerce.com/s-wqoxjb8m8k/images/stencil/original/image-manager/image-34.png?t=1657557502" />
                <span>Jacket</span>
              </div>
            </div>
          </div>

          <div className='home-container'>
            <div className='message-container'>
              <h4>4 easy steps to personalising your garments</h4>
              <p>At Sewing Solutions we have worked tirelessly  to ensure we repeatedly provide the efficient reliable service that our customers deserve.</p>
            </div>

            <div className='box-container'>
              <div className='box'>
                <div className='inner-box'>
                  <div class="imageWrap">
                    <img src="https://cdn11.bigcommerce.com/s-wqoxjb8m8k/product_images/uploaded_images/basket.png" alt="Select your products " />
                  </div>
                  <h4>Select your products </h4>
                </div>
              </div>

              <div className='box'>
                <div className='inner-box'>
                  <div class="imageWrap">
                    <img src="https://cdn11.bigcommerce.com/s-wqoxjb8m8k/images/stencil/original/image-manager/edit.png?t=1660682384" alt="Add your Logo or text" />
                  </div>
                  <h4>Select your products </h4>
                </div>
              </div>

              <div className='box'>
                <div className='inner-box'>
                  <div class="imageWrap">
                    <img src="https://cdn11.bigcommerce.com/s-wqoxjb8m8k/images/stencil/original/image-manager/groupedit.png?t=1660682597" alt="Add to basket " />
                  </div>
                  <h4>Select your products </h4>
                </div>
              </div>

              <div className='box'>
                <div className='inner-box'>
                  <div class="imageWrap">
                    <img src="https://cdn11.bigcommerce.com/s-wqoxjb8m8k/images/stencil/original/image-manager/group.png?t=1660682621" alt="Checkout" />
                  </div>
                  <h4>Select your products </h4>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main >
    </>
  )
}

export default Homepage
