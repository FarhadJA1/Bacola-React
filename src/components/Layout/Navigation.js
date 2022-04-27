import React from 'react'
import '../../assets/style/Navigation.scss';
function Navigation() {
    return (
        <div class="row top">
            <div class="col-md-4 col-sm-6 top-nav">
                <nav>
                    <ul>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="login.html">My Account</a></li>
                        <li><a href="">Wishlist</a></li>
                        <li><a href="">Order Tracking</a></li>
                    </ul>
                </nav>
            </div>
            <div class="row top-right col-md-8 col-sm-6">
                <div class="col-md-5 col-sm-4 top-center-info">
                    <i class="fas fa-hand-paper"></i>
                    <span>100% Secure delivery without contacting the courier</span>
                </div>
                <div class="col-md-3 col-sm-4 top-help">
                    <span>Need help? Call Us:</span>
                    <a href="">+ 0020 500</a>
                </div>
                <div class="col-md-4 sm-4 top-drops">
                    <div class="drop">
                        <div class="lang-drop">
                            <button class="drop-btn btn-left">English
                                <i class="fa fa-caret-down"></i>
                            </button>
                            <div class="drop-content-left d-none">
                                <a href="#">English</a>
                                <a href="#">Spanish</a>
                                <a href="#">German</a>
                            </div>
                        </div>
                        <div class="money-drop">
                            <button class="drop-btn btn-right">USD
                                <i class="fa fa-caret-down"></i>
                            </button>
                            <div class="drop-content-right d-none">
                                <a href="#">USD</a>
                                <a href="#">INR</a>
                                <a href="#">GBT</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <hr></hr>
        </div>
    )
}

export default Navigation
