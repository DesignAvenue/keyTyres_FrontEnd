import React, { Component } from 'react';
import { Link } from "react-router-dom";
class HeaderHome extends Component {
    render() { 
        return (
        <div>
               <header className="main-header home-2">
    
            <div className="header-top-nav">
                <div className="container-fluid">
                    <div className="row align-items-center">
                    
                        <div className="col-lg-4 col-md-12">
                            <div className="text-lg-start text-center">
                                <p className="color-white">Welcome you to Ecolife store!</p>
                            </div>
                        </div>
                        
                        <div className="col-8 d-lg-block d-none">
                            <div className="header-right-nav hover-style-furniture">
                                <ul>
                                    <li>
                                        <a href="compare.html"><i className="ion-ios-shuffle-strong"></i>Compare (0)</a>
                                    </li>
                                    <li className="border-color-white">
                                        <a href="wishlist.html"><i className="ion-android-favorite-outline"></i>Wishlist
                                            (0)</a>
                                    </li>
                                </ul>
                        
                                <div className="header-top-set-lan-curr d-flex justify-content-end">
                                    <div className="header-bottom-set dropdown">
                                        <button
                                            className="dropdown-toggle header-action-btn hover-style-furniture color-white"
                                            data-bs-toggle="dropdown"> Settings <i
                                                className="ion-ios-arrow-down"></i></button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="my-account.html">My account</a></li>
                                            <li><a className="dropdown-item" href="checkout.html">Checkout</a></li>
                                            <li><a className="dropdown-item" href="login.html">Sign in</a></li>
                                        </ul>
                                    </div>
                                  
                                    <div className="header-top-curr dropdown">
                                        <button
                                            className="dropdown-toggle header-action-btn hover-style-furniture color-white"
                                            data-bs-toggle="dropdown"> <img className="me-2" src="assets/images/icons/1.jpg"
                                                alt=""/>English<i className="ion-ios-arrow-down"></i></button>
                                        <ul className="dropdown-menu dropdown-menu-right">
                                            <li><a className="dropdown-item" href="/"><img src="assets/images/icons/1.jpg"
                                                        alt=""/>English</a></li>
                                            <li><a className="dropdown-item" href="/"><img src="assets/images/icons/2.jpg"
                                                        alt=""/>Français</a></li>
                                        </ul>
                                    </div>
                                 
                                    <div className="header-top-curr dropdown">
                                        <button
                                            className="dropdown-toggle header-action-btn hover-style-furniture color-white pr-0"
                                            data-bs-toggle="dropdown">USD $
                                            <i className="ion-ios-arrow-down"></i></button>
                                        <ul className="dropdown-menu dropdown-menu-right">
                                            <li><a className="dropdown-item" href="/">USD $</a></li>
                                            <li><a className="dropdown-item" href="/">EUR €</a></li>
                                        </ul>
                                    </div>
                              
                                </div>
                             
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
           
            <div className="header-navigation sticky-nav d-none d-lg-block menu_fixed animated fadeInDown">
                <div className="container-fluid">
                    <div className="row">
                        
                        <div className="col-md-2 col-sm-2">
                            <div className="logo">
                                <a href="/"><img src="assets/images/logo/logo-furniture.png" alt="" /></a>
                            </div>
                        </div>
                     
                        <div className="col-md-10 col-sm-10">
                         
                            <div className="main-navigation">
                                <ul>
                                    <li className="menu-dropdown">
                                        <a href="/">Home <i className="ion-ios-arrow-down"></i></a>
                                        <ul className="sub-menu">
                                            <li className="menu-dropdown position-static">
                                                <a href="/">Home Organic <i className="ion-ios-arrow-down"></i></a>
                                                <ul className="sub-menu sub-menu-2">
                                                    <li><a href="index.html">Organic 1</a></li>
                                                    <li><a href="index-2.html">Organic 2</a></li>
                                                    <li><a href="index-3.html">Organic 3</a></li>
                                                    <li><a href="index-4.html">Organic 4</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-dropdown position-static">
                                                <a href="/">Home Cosmetic <i className="ion-ios-arrow-down"></i></a>
                                                <ul className="sub-menu sub-menu-2">
                                                    <li><a href="index-5.html">Cosmetic 1</a></li>
                                                    <li><a href="index-6.html">Cosmetic 2</a></li>
                                                    <li><a href="index-7.html">Cosmetic 3</a></li>
                                                    <li><a href="index-8.html">Cosmetic 4</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-dropdown position-static">
                                                <a href="/">Home Digital <i className="ion-ios-arrow-down"></i></a>
                                                <ul className="sub-menu sub-menu-2">
                                                    <li><a href="index-9.html">Digital 1</a></li>
                                                    <li><a href="index-10.html">Digital 2</a></li>
                                                    <li><a href="index-11.html">Digital 3</a></li>
                                                    <li><a href="index-12.html">Digital 4</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-dropdown position-static">
                                                <a href="/">Home Furniture <i className="ion-ios-arrow-down"></i></a>
                                                <ul className="sub-menu sub-menu-2">
                                                    <li><a href="index-13.html">Furniture 1</a></li>
                                                    <li><a href="index-14.html">Furniture 2</a></li>
                                                    <li><a href="index-15.html">Furniture 3</a></li>
                                                    <li><a href="index-16.html">Furniture 4</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-dropdown position-static">
                                                    <a href="/">Home Medical <i className="ion-ios-arrow-down"></i></a>
                                                    <ul className="sub-menu sub-menu-2">
                                                        <li><a href="index-17.html">Medical 1</a></li>
                                                        <li><a href="index-18.html">Medical 2</a></li>
                                                        <li><a href="index-19.html">Medical 3</a></li>
                                                        <li><a href="index-20.html">Medical 4</a></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-dropdown position-relative">
                                                    <a href="index-21.html">Single Product</a>
                                                    <span className="stekar">new</span>
                                                </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item">
                                        <Link to="/shop">Shop </Link>
                                        
                                    </li>
                                    <li className="menu-dropdown">
                                        <a href="/">Pages <i className="ion-ios-arrow-down"></i></a>
                                        <ul className="sub-menu">
                                            <li><a href="about.html">About Page</a></li>
                                            <li><a href="cart.html">Cart Page</a></li>
                                            <li><a href="checkout.html">Checkout Page</a></li>
                                            <li><a href="compare.html">Compare Page</a></li>
                                            <li><a href="login.html">Login & Regiter Page</a></li>
                                            <li><a href="my-account.html">Account Page</a></li>
                                            <li><a href="wishlist.html">Wishlist Page</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-dropdown">
                                        <a href="/">Blog <i className="ion-ios-arrow-down"></i></a>
                                        <ul className="sub-menu">
                                            <li className="menu-dropdown position-static">
                                                <a href="/">Blog Grid <i className="ion-ios-arrow-down"></i></a>
                                                <ul className="sub-menu sub-menu-2">
                                                    <li><a href="blog-grid-left-sidebar.html">Blog Grid Left Sidebar</a>
                                                    </li>
                                                    <li><a href="blog-grid-right-sidebar.html">Blog Grid Right
                                                            Sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-dropdown position-static">
                                                <a href="/">Blog List <i className="ion-ios-arrow-down"></i></a>
                                                <ul className="sub-menu sub-menu-2">
                                                    <li><a href="blog-list-left-sidebar.html">Blog List Left Sidebar</a>
                                                    </li>
                                                    <li><a href="blog-list-right-sidebar.html">Blog List Right
                                                            Sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-dropdown position-static">
                                                <a href="/">Blog Single <i className="ion-ios-arrow-down"></i></a>
                                                <ul className="sub-menu sub-menu-2">
                                                    <li><a href="blog-single-left-sidebar.html">Blog Single Left
                                                            Sidebar</a></li>
                                                    <li><a href="blog-single-right-sidebar.html">Blog Single Right
                                                            Sidebar</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="contact.html">Contact Us</a></li>
                                </ul>
                            </div>
                           
                            <div className="header_account_area">
                                <div className="header_account_list search_list">
                                    <a href="/"><i className="ion-ios-search-strong"></i></a>
                                    <div className="dropdown_search">
                                        <form action="/">
                                            <input placeholder="Search entire store here ..." type="text" />
                                            <div className="search-category">
                                                <select className="bootstrap-select" name="poscats">
                                                    <option value="0">All categories</option>
                                                    <option value="104">
                                                        Fresh Food
                                                    </option>
                                                    <option value="183">
                                                        - - Fresh Fruit
                                                    </option>
                                                    <option value="187">
                                                        - - - - Bananas
                                                    </option>
                                                    <option value="188">
                                                        - - - - Apples &amp; Pears
                                                    </option>
                                                    <option value="189">
                                                        - - - - Berries &amp; Cherries
                                                    </option>
                                                    <option value="190">
                                                        - - - - Oranges &amp; Citrus Fruit
                                                    </option>
                                                    <option value="191">
                                                        - - - - Grapes
                                                    </option>
                                                    <option value="184">
                                                        - - Fresh Vegetables
                                                    </option>
                                                    <option value="192">
                                                        - - - - Potatoes &amp; Sweet Potatoes
                                                    </option>
                                                    <option value="193">
                                                        - - - - Onions &amp; Leeks
                                                    </option>
                                                    <option value="194">
                                                        - - - - Carrots &amp; Root Vegetables
                                                    </option>
                                                    <option value="195">
                                                        - - - - Broccoli &amp; Cauliflower
                                                    </option>
                                                    <option value="196">
                                                        - - - - Cabbages &amp; Greens
                                                    </option>
                                                    <option value="185">
                                                        - - Fresh Salad &amp; Dips
                                                    </option>
                                                    <option value="197">
                                                        - - - - Lettuce &amp; Salad bags
                                                    </option>
                                                    <option value="198">
                                                        - - - - Tomatoes
                                                    </option>
                                                    <option value="199">
                                                        - - - - Cucumber
                                                    </option>
                                                    <option value="200">
                                                        - - - - Celery
                                                    </option>
                                                    <option value="201">
                                                        - - - - Peppers
                                                    </option>
                                                    <option value="186">
                                                        - - Milk, Butter &amp; Eggs
                                                    </option>
                                                    <option value="202">
                                                        - - - - Milk
                                                    </option>
                                                    <option value="203">
                                                        - - - - Spreads &amp; Margarine
                                                    </option>
                                                    <option value="204">
                                                        - - - - Fresh Cream &amp; Custard
                                                    </option>
                                                    <option value="205">
                                                        - - - - Eggs
                                                    </option>
                                                    <option value="206">
                                                        - - - - Baking &amp; Cooking
                                                    </option>
                                                </select>
                                            </div>
                                            <button type="submit"><i className="ion-ios-search-strong"></i></button>
                                        </form>
                                    </div>
                                </div>
                               
                                <div className="cart-info d-flex home-13">
                                    <a href="compare.html" className="count-cart random color-black">
                                        <span className="item-quantity-tag">0</span>
                                    </a>
                                    <a href="wishlist.html" className="count-cart heart mlr-10px color-black">
                                        <span className="item-quantity-tag">0</span>
                                    </a>
                                    <div className="mini-cart-warp">
                                        <a href="/offcanvas-cart" className="count-cart offcanvas-toggle color-black">
                                            <span className="amount-tag">$20.00</span>
                                            <span className="item-quantity-tag">02</span>
                                        </a>

                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>

                </div>
            </div>
           
            <div className="header-bottom d-lg-none sticky-nav py-3 mobile-navigation hover-style-furniture">
                <div className="container-fluid">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-md-3 col-sm-3">
                            <a href="/offcanvas-mobile-menu" className="offcanvas-toggle mobile-menu">
                                <i className="ion-navicon"></i>
                            </a>
                        </div>
                        <div className="col-md-6 col-sm-4 d-flex justify-content-center">
                            <div className="logo m-0">
                                <a href="index.html"><img src="assets/images/logo/footer-logo-furniture.png"
                                        alt="" /></a>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-5">
                         
                            <div className="cart-info d-flex m-0 justify-content-end">
                                <div className="header-bottom-set hover-style-furniture dropdown">
                                    <button className="dropdown-toggle header-action-btn hover-style-furniture"
                                        data-bs-toggle="dropdown"> <i className="ion-person"></i></button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="my-account.html">My account</a></li>
                                        <li><a className="dropdown-item" href="checkout.html">Checkout</a></li>
                                        <li><a className="dropdown-item" href="login.html">Sign in</a></li>
                                    </ul>
                                </div>
                                <div className="mini-cart-warp">
                                    <a href="/offcanvas-cart" className="count-cart color-black offcanvas-toggle">
                                        <span className="amount-tag">$20.00</span>
                                        <span className="item-quantity-tag">02</span>
                                    </a>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
           <br/>
           <br/>

        </header>
        </div>);
    }
}
 
export default HeaderHome;