import React from 'react'
import bubly from '../../assets/img/bubly img.jpg';
import caramel from '../../assets/img/caramel cashew.jpg';
import apple from '../../assets/img/apple.jpg';
import muffin from '../../assets/img/muffin.jpg';
import image2 from '../../assets/img/category-image2.png';
import cheese from '../../assets/img/assorted cheese.jpg';
import household from '../../assets/img/household-1.jpg';
import hoogen from '../../assets/img/hoogen.png';
import meat from '../../assets/img/meat.jpg';
import '../../assets/style/QuickCategories.scss';
function QuickCategories() {
  return (
    
      <div class="container mt-5 me-2">
                <div class="q-categories">

                    <div class="row">
                        <div class="custom-card col-lg-2">
                            <div class="card one">
                                <div>
                                    <img src={bubly} class="card-img-top" alt="..."/>
                                    <div class="bubly-card-body card-body">
                                        <h6>Beverages</h6>
                                        <p>11 items</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="custom-card col-2">
                            <div class="up">
                                <div class="card">
                                    <div class="content row g-0">
                                        <div class="col-md-4">
                                            <img src={caramel} class="img-fluid rounded-start"
                                                alt="..."/>
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h6>Biscuits &</h6>
                                                <h6>Snacks</h6>
                                                <p>6 items</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="down">
                                <div class="card">
                                    <div class="content row g-0">
                                        <div class="col-lg-4">
                                            <img src={apple} class="img-fluid rounded-start" alt="..."/>
                                        </div>
                                        <div class="col-lg-8">
                                            <div class="card-body">
                                                <h6>Fruits &</h6>
                                                <h6>Vegetables</h6>
                                                <p>12 items</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="custom-card col-lg-2">
                            <div>
                                <div class="up">
                                    <div class="card">
                                        <div class="content row g-0">
                                            <div class="col-lg-4">
                                                <img src={muffin} class="img-fluid rounded-start"
                                                    alt="..."/>
                                            </div>
                                            <div class="col-lg-8">
                                                <div class="card-body">
                                                    <h6>Breads &</h6>
                                                    <h6>Bakery</h6>
                                                    <p>6 items</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="down">
                                    <div class="card">
                                        <div class="content row g-0">
                                            <div class="col-md-4">
                                                <img src={image2}
                                                    class="img-fluid rounded-start" alt="..."/>
                                            </div>
                                            <div class="col-lg-8">
                                                <div class="card-body">
                                                    <h6>Grocery &</h6>
                                                    <h6>Staples</h6>
                                                    <p>7 items</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="custom-card col-md-2">
                            <div>
                                <div class="up">
                                    <div class="card">
                                        <div class="content row g-0">
                                            <div class="col-md-4 two">
                                                <img src={cheese}
                                                    class="img-fluid rounded-start" alt="..."/>
                                            </div>
                                            <div class="col-lg-8">
                                                <div class="card-body">
                                                    <h6>Breakfast &</h6>
                                                    <h6>Dairy</h6>
                                                    <p>8 items</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="down">
                                    <div class="card">
                                        <div class="content row g-0">
                                            <div class="col-lg-4">
                                                <img src={household} class="img-fluid rounded-start"
                                                    alt="..."/>
                                            </div>
                                            <div class="col-md-8">
                                                <div class="card-body">
                                                    <h6>Household</h6>
                                                    <h6>Needs</h6>
                                                    <p>1 items</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="custom-card col-md-2">
                            <div>
                                <div class="up">
                                    <div class="card">
                                        <div class="content row g-0">
                                            <div class="col-md-4">
                                                <img src={hoogen} class="img-fluid rounded-start"
                                                    alt="..."/>
                                            </div>
                                            <div class="col-md-8">
                                                <div class="card-body">
                                                    <h6>Biscuits Foods</h6>
                                                    <p>7 items</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="down">
                                    <div class="card">
                                        <div class="content row g-0">
                                            <div class="col-lg-4">
                                                <img src={meat} class="img-fluid rounded-start"
                                                    alt="..."/>
                                            </div>
                                            <div class="col-lg-8">
                                                <div class="card-body">
                                                    <h6>Meats &</h6>
                                                    <h6>Seafood</h6>
                                                    <p>5 items</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>

            </div>


  )
}

export default QuickCategories
