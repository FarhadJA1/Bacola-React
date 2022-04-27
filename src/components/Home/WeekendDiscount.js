import React from 'react'
import bacola11 from '../../assets/img/bacola-banner-11.jpg';
import bacola12 from '../../assets/img/bacola-banner-12.jpg';
import '../../assets/style/WeekendDiscount.scss';

function WeekendDiscount() {
  return (
   
      <div class="big-shortcuts mt-5">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-sm-12">
                            <div class="card bg-dark text-white">
                                <img src={bacola11} class="card-img" alt="..."/>
                                <div class="card-img-overlay">
                                    <p class="card-text left-first">WEEKEND DISCOUNT 40%</p>
                                    <h5 class="card-title">Cookie and Ice Cream</h5>
                                    <p class="card-text second">Bacola Weekend Discount</p>
                                    <button type="button" class="btn btn-primary shortcut-btn-left">Shop Now</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-sm-12">
                            <div class="card bg-dark text-white">
                                <img src={bacola12} class="card-img" alt="..."/>
                                <div class="card-img-overlay">
                                    <p class="card-text right-first">WEEKEND DISCOUNT 30%</p>
                                    <h5 class="card-title">Cookie and Ice Cream</h5>
                                    <p class="card-text second">Bacola Weekend Discount</p>
                                    <button type="button" class="btn btn-primary shortcut-btn-right">Shop Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

  
  )
}

export default WeekendDiscount
