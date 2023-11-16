import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <div className='banner'>
                <p1>Free UK & Ireland Shipping on orders £150</p1>
            </div>

            <header className='header'>
                <div className='header-container container'>
                    <div className='header-inner-container'>
                        <h1 className='logo-link'>
                            <div className='header-logo-container'>
                                <Link to="/Homepage">
                                    <img className='logo-image' src='/images/logo.jpg'></img>
                                </Link>
                            </div>
                        </h1>

                        <div className='navSearch'>
                            <div id='quickSearch'>
                                <form className='form'>
                                    <fieldset className='form-fieldset'>
                                        <div className='form-field'>
                                            <label className='is-sr0nly'></label>
                                            <input class="form-input" data-search-quick="" name="nav-quick-search" id="nav-quick-search" data-error-message="Search field cannot be empty." placeholder="Search" autocomplete="off" />
                                        </div>
                                    </fieldset>
                                </form>
                            </div>

                            <div class="navMessage">
                                <span>Can’t see what you're looking for? <strong><a href="tel:02890749719">Call us on (028) 90 749 719</a></strong></span>
                            </div>
                        </div>

                        <div className='navOptions'>
                            <div className='navaOption-selectors'>
                                <ul className='navUser-section'>
                                    <li className='navUser-action'>
                                        <a class="navUser-action navUser-action-currencySelector has-dropdown" href="#">
                                            Currency
                                            <span>GBP</span>
                                            <i className='icon' aria-hidden="true">
                                                <use xlinkHref="#icon-chevron-down"></use>
                                            </i>
                                        </a>
                                    </li>
                                </ul>

                                <ul className='navUser-section'>
                                    <li className='navUser-item'>
                                        <a class="navUser-action navUser-action--vatSelector has-dropdown" href="#">
                                            VAT
                                            <span>SHOW</span>
                                            <i className='icon' aria-hidden="true">
                                                <use xlinkHref="#icon-chevron-down"></use>
                                            </i>
                                        </a>
                                    </li>
                                </ul>
                            </div>


                            <nav className='navUser'>
                                <ul className='navUser-section'>
                                    <li className='navUser-item'>
                                        <a className='navUser-action' href='#'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none" class="injected-svg navUser-action--icon" data-src="https://cdn11.bigcommerce.com/s-wqoxjb8m8k/stencil/ed963550-e73a-013b-38e0-5e203764b409/e/3b2cfea0-e1c5-013b-03ec-3aabf4aa06be/img/track.svg">
                                                <path d="M20.9999 11.7C21.3182 11.7 21.6234 11.5735 21.8485 11.3485C22.0735 11.1234 22.1999 10.8182 22.1999 10.5V8.99999C22.1999 8.04521 21.8206 7.12959 21.1455 6.45449C20.4703 5.77939 19.5547 5.40009 18.6 5.40009H9.00005C8.04527 5.40009 7.12965 5.77939 6.45455 6.45449C5.77945 7.12969 5.40015 8.04531 5.40015 8.99999V18.6C5.40015 19.5548 5.77945 20.4704 6.45455 21.1455C7.12975 21.8206 8.04537 22.1999 9.00005 22.1999H10.5C10.9287 22.1999 11.3249 21.9712 11.5393 21.5999C11.7537 21.2286 11.7537 20.7712 11.5393 20.3999C11.3249 20.0286 10.9287 19.7999 10.5 19.7999H9.00005C8.6818 19.7999 8.3766 19.6734 8.15152 19.4484C7.92652 19.2233 7.80005 18.9181 7.80005 18.5999V8.99989C7.80005 8.68164 7.92651 8.37644 8.15152 8.15136C8.37662 7.92636 8.6818 7.79989 9.00005 7.79989H12.6V10.1999C12.6 10.6286 12.8288 11.0248 13.2 11.2391C13.5713 11.4535 14.0287 11.4535 14.4 11.2391C14.7713 11.0248 15 10.6286 15 10.1999V7.79989H18.6C18.9183 7.79989 19.2235 7.92635 19.4486 8.15136C19.6736 8.37646 19.8 8.68164 19.8 8.99989V10.4999C19.8 10.8181 19.9265 11.1233 20.1515 11.3484C20.3766 11.5734 20.6818 11.6999 21 11.6999L20.9999 11.7Z" fill="#2B2B35"></path>
                                                <path d="M23.3999 17.4H21.9899C21.6272 16.3772 20.8227 15.5726 19.7999 15.2099V13.8C19.7999 13.3713 19.5712 12.9751 19.1999 12.7607C18.8286 12.5464 18.3712 12.5464 17.9999 12.7607C17.6286 12.9751 17.3999 13.3713 17.3999 13.8V15.2099C16.3771 15.5726 15.5725 16.3772 15.2098 17.4H13.7999C13.3712 17.4 12.975 17.6287 12.7606 18C12.5463 18.3713 12.5463 18.8287 12.7606 19.2C12.975 19.5713 13.3712 19.8 13.7999 19.8H15.2098C15.5725 20.8227 16.3771 21.6273 17.3999 21.99V23.4C17.3999 23.8287 17.6286 24.2249 17.9999 24.4393C18.3712 24.6536 18.8286 24.6536 19.1999 24.4393C19.5712 24.2249 19.7999 23.8287 19.7999 23.4V21.99C20.8226 21.6273 21.6272 20.8228 21.9899 19.8H23.3999C23.8286 19.8 24.2248 19.5713 24.4391 19.2C24.6535 18.8287 24.6535 18.3713 24.4391 18C24.2248 17.6287 23.8286 17.4 23.3999 17.4ZM18.5999 19.8C18.2816 19.8 17.9764 19.6735 17.7513 19.4485C17.5263 19.2234 17.3999 18.9182 17.3999 18.6C17.3999 18.2817 17.5263 17.9765 17.7513 17.7515C17.9764 17.5265 18.2816 17.4 18.5999 17.4C18.9181 17.4 19.2233 17.5265 19.4484 17.7515C19.6734 17.9766 19.7999 18.2817 19.7999 18.6C19.7999 18.9182 19.6734 19.2234 19.4484 19.4485C19.2233 19.6735 18.9181 19.8 18.5999 19.8Z" fill="#93CA39"></path>
                                            </svg>
                                            <span>Track Order</span>
                                        </a>
                                    </li>

                                    <li className='navUser-item'>
                                        <Link className='navUser-action' to="/cart">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="injected-svg navUser-action--icon" data-src="https://cdn11.bigcommerce.com/s-wqoxjb8m8k/stencil/ed963550-e73a-013b-38e0-5e203764b409/e/3b2cfea0-e1c5-013b-03ec-3aabf4aa06be/img/basket.svg">
                                                <path d="M9 8H21" stroke="#93CA39" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M2 2H3.74001C4.82001 2 5.67 2.93 5.58 4L4.75 13.96C4.61 15.59 5.89999 16.99 7.53999 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82001" stroke="#2B2B35" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M16.25 22C16.9404 22 17.5 21.4404 17.5 20.75C17.5 20.0596 16.9404 19.5 16.25 19.5C15.5596 19.5 15 20.0596 15 20.75C15 21.4404 15.5596 22 16.25 22Z" stroke="#2B2B35" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M8.25 22C8.94036 22 9.5 21.4404 9.5 20.75C9.5 20.0596 8.94036 19.5 8.25 19.5C7.55964 19.5 7 20.0596 7 20.75C7 21.4404 7.55964 22 8.25 22Z" stroke="#2B2B35" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                            <span>Basket</span>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    <div className='navPages-container' id="menu" >
                        <nav className='navPages'>
                            <ul className='navPages-list navPages-list-deptmax'>
                                <li className='navPages-item navPages-itme-page'>
                                    <Link className='navPages-action navPages-item-page' to='/SPage' aria-label='All products'>
                                        All products
                                    </Link>
                                </li>
                                <li className='navPages-item navPages-itme-page'>
                                    <Link className='navPages-action navPages-item-page' to='/Brands' aria-label='Brands'>
                                        Brands
                                    </Link>
                                </li>
                                <li className='navPages-item navPages-itme-page'>
                                    <Link className='navPages-action navPages-item-page' to='/polo_shirts' aria-label='Polo-Shirts'>
                                        Polo Shirts
                                    </Link>
                                </li>
                                <li className='navPages-item navPages-itme-page'>
                                    <Link className='navPages-action navPages-item-page' to='/jackets' aria-label='Jackets'>
                                        Jackets
                                    </Link>
                                </li>
                                <li className='navPages-item navPages-itme-page'>
                                    <Link className='navPages-action navPages-item-page' to='/t_shirts' aria-label='T-shirts'>
                                        T-shirts
                                    </Link>
                                </li>
                                <li className='navPages-item navPages-itme-page'>
                                    <Link className='navPages-action navPages-item-page' to='/trousers' aria-label='Trousers'>
                                        Trousers
                                    </Link>
                                </li>
                                <li className='navPages-item navPages-itme-page'>
                                    <Link className='navPages-action navPages-item-page' to='/foot_wear' aria-label='Footwear'>
                                        Footwear
                                    </Link>
                                </li>
                                <li className='navPages-item navPages-itme-page'>
                                    <Link className='navPages-action navPages-item-page' to='/BYO' aria-label='BYO'>
                                        BYO
                                    </Link>
                                </li>
                                <li className='navPages-item navPages-item-page'>
                                    <Link className='navPages-action navPages-item-page' to='/buyPage' aria-label='buyPage'>
                                        buyPage
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header >
        </>
    )
}

export default Header
