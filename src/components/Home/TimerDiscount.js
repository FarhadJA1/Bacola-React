import React from 'react'
import product50 from '../../assets/img/product-image-50.jpg';
import meatballs from '../../assets/img/italian-meatballs.jpg';
import crispy from '../../assets/img/crispy-wings.jpg';
import boom from '../../assets/img/boom-chicka.jpg';
import blue from '../../assets/img/blue-diamond.jpg';
import chiao from '../../assets/img/chiao-cheese.jpg';
import blueberries from '../../assets/img/blueberries.jpg';
import '../../assets/style/TimerDiscount.scss';
function TimerDiscount() {
    return (
        <div class="container">
            <div class="row mt-5">
                <div class="col-3 timer">
                    <div class="timer-elements">
                        <div class="timer-header">
                            <span>Deals of the</span>
                            <span class="week">week!</span>
                        </div>
                        <div class="clock"></div>
                        <p>Remains until the end of the offer</p>
                        <div class="photo">
                            <div class="offer">
                                <span>19%</span>
                            </div>
                            <img src={product50} alt=""/>
                        </div>
                        <div class="discount">
                            <span class="lined">$5.49</span>
                            <span class="red">$4.49</span>
                        </div>
                        <div class="link">
                            <a href="">Chobani Complete Vanilla Greek Yogurt</a>
                        </div>
                        <div class="stock">
                            <span class="kg">1 kg</span>
                            <span class="in">IN STOCK</span>
                        </div>
                        <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <span>1</span>
                        </div>
                        <div class="avialable">
                            <span class="text">AVIALABLE:</span>
                            <span class="number">49</span>
                        </div>
                        <div class="progress mt-3">
                            <div class="success"></div>
                        </div>

                    </div>

                </div>

                <div class="col-3 first-discount-product">
                    <div class="card discount-card">
                        <div class="discount-image">
                            <img src={meatballs} class="card-img-top" alt="..."/>
                                <span class="percentage">23%</span>
                                <span class="recommend">RECOMMENDED</span>

                        </div>

                        <div class="card-body">
                            <a class="card-title">All Natural Italian-Style Chicken Meatballs</a>
                            <p class="stock">IN STOCK</p>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star grey"></i>
                            <span class="one">1</span>
                            <div class="prices">
                                <span class="first-price">$9.35</span>
                                <span class="second-price">$7.25</span>
                            </div>
                            <div class="button display-none">
                                <a href="#" class="btn btn-primary">Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div class="card discount-card">
                        <div class="discount-image">
                            <img src={crispy} class="card-img-top" alt="..."/>

                        </div>

                        <div class="card-body">
                            <a class="card-title">Foster Farms Takeout Crispy Classic Buffalo Wings</a>
                            <p class="stock">IN STOCK</p>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star grey"></i>
                            <span class="one">1</span>
                            <div class="prices">
                                <span class="first-price-range">$7.35</span>
                                <span>-</span>
                                <span class="second-price-range">$49.99</span>
                            </div>
                            <div class="button display-none">
                                <a href="#" class="btn btn-primary">View products</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-3 first-discount-product">
                    <div class="card discount-card">
                        <div class="discount-image">
                            <img src={boom} class="card-img-top" alt="..."/>
                                <span class="percentage">24%</span>


                        </div>

                        <div class="card-body">
                            <a class="card-title">Angie’s Boomchickapop Sweet & Salty Kettle Corn</a>
                            <p class="stock">IN STOCK</p>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star grey"></i>
                            <span class="one">1</span>
                            <div class="prices">
                                <span class="first-price">$4.29</span>
                                <span class="second-price">$3.29</span>
                            </div>
                            <div class="button display-none">
                                <a href="#" class="btn btn-primary">Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div class="card discount-card">
                        <div class="discount-image">
                            <img src={blue} class="card-img-top" alt="..."/>
                                <span class="percentage">10%</span>
                                <span class="organic">ORGANIC</span>

                        </div>

                        <div class="card-body">
                            <a class="card-title">Blue Diamond Almonds Lightly</a>
                            <div>
                                <a class="card-title" href="">Salted</a>
                            </div>

                            <p class="stock">IN STOCK</p>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <span class="one">1</span>
                            <div class="prices">
                                <span class="first-price">$11.68</span>
                                <span>-</span>
                                <span class="second-price">$10.58</span>
                            </div>
                            <div class="button display-none">
                                <a href="#" class="btn btn-primary">Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-3 first-discount-product last">
                    <div class="card discount-card">
                        <div class="discount-image">
                            <img src={chiao} class="card-img-top" alt="..."/>
                                <span class="percentage">19%</span>
                                <span class="organic">Organic</span>

                        </div>

                        <div class="card-body">
                            <a class="card-title">Field Roast Chao Cheese Creamy Original</a>
                            <p class="stock">IN STOCK</p>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <span class="one">1</span>
                            <div class="prices">
                                <span class="first-price">$24</span>
                                <span class="second-price">$19.50</span>
                            </div>
                            <div class="button display-none">
                                <a href="#" class="btn btn-primary">Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div class="card discount-card">
                        <div class="discount-image">
                            <img src={blueberries} class="card-img-top" alt="..."/>
                                <span class="percentage">12%</span>
                        </div>

                        <div class="card-body">
                            <a class="card-title">Blueberries –</a>
                            <div>
                                <a class="card-title">1 Pint Package</a>
                            </div>
                            <p class="stock">IN STOCK</p>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star grey"></i>
                            <span class="one">1</span>
                            <div class="prices">
                                <span class="first-price">$4.49</span>
                                <span>-</span>
                                <span class="second-price">$3.99</span>
                            </div>
                            <div class="button display-none">
                                <a href="#" class="btn btn-primary">Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TimerDiscount
