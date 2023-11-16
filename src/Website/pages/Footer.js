import React from 'react'
import FooterSlider from '../pages/FooterSlider'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>

      <section className='footer-brands'>
        <div className='container'>
          <div className='footer-slider-container'>
            <div className='footer-slider-content'>
              <h3>Shop By Brands</h3>
              <div className='slick-list draggable'>
                <FooterSlider></FooterSlider>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='footer-message'>
        <section className='banner-message banner-message-header home'>
          <div className='container'>
            <ul className='banner-message-list js-bannermessage'>

              <li class="message">
                <span>In House Production</span>
              </li>

              <li className='message'>
                <span>Free delivery</span>
              </li>

              <li className='message'>
                <span>Price Promise</span>
              </li>

              <li className='message message_schoolwear'>
                <span>Clear Pay Klanra</span>
              </li>

            </ul>
          </div>
        </section>
      </section>



      <section className='footer-info'>
        <div className='container'>
          <article className='footer-info-cal footer-info-cal-small'>
            <ul class="footer-info-list">
              <li>
                <Link to="footerPage1">Cookies Policy</Link>
              </li>

              <li>
                <Link to="footerPage2">Industries</Link>
              </li>

              <li>
                <Link to="footerPage3">About Us</Link>
              </li>

              <li>
                <Link to="footerPage4">BYO Explained</Link>
              </li>

              <li>
                <Link to="footerPage5">Delivery Info</Link>
              </li>

              <li>
                <Link to="footerPage6">FAQ</Link>
              </li>

              <li>
                <Link to="footerPage7">Price Promise</Link>
              </li>

              <li>
                <Link to="footerPage8">Privacy Policy</Link>
              </li>

              <li>
                <Link to="footerPage9">Refunds &amp; Returns</Link>
              </li>

              <li>
                <Link to="footerPage10">Sampling Garments</Link>
              </li>

              <li>
                <Link to="footerPage11">T&amp;C's</Link>
              </li>

              <li>
                <Link to="footerPage12">Track Order</Link>
              </li>

              <li>
                <Link to="footerPage13">Shipping &amp; Returns</Link>
              </li>

              <li>
                <Link to="footerPage14">Contact Us</Link>
              </li>

              <li>
                <Link to="footerPage15">Sitemap</Link>
              </li>
            </ul>
          </article>
        </div>
      </section>

      <div className='footer-credit'>
        <div className='container'>
          <div className='footer-copyright'>
            <p class="powered-by">© Sewing Solutions 2023 | Registered Company in Northern Ireland (NI660329) | VAT No: 266001238</p>
          </div>
          <div className='footer-copyright'>
            <p className='powered-by'>Design And Build By Muhammad </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
