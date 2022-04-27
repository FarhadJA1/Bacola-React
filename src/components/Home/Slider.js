import React from 'react'
import kettle from '../../assets/img/slider-image-kettle.jpg';
import alpro from '../../assets/img/slider-image-alpro.jpg';
import '../../assets/style/Slider.scss';
function Slider() {
  return (
    <div>
       <div class="owl-carousel owl-theme advert-top mt-3">
                <div class="item first">
                    <img src={kettle} alt=""/>

                    <div class="first-advert-text">
                        <span class="first-top-left">EXCLUSIVE OFFER</span>
                        <span class="first-top-right">-20% OFF</span>
                        <h1 class="first-top-header">A different kind of</h1>
                        <h1 class="first-bottom-header">grocery store</h1>
                        <p class="first-text">Only this week. Don't miss...</p>
                        <span class="first-bottom-left">from</span>
                        <span class="first-bottom-right">$7.99</span>
                        <div class="mt-3">
                            <button type="button" class="first-advert-btn btn btn-primary">Shop Now <i
                                    class="fas fa-arrow-right"></i></button>
                        </div>
                    </div>

                </div>

                <div class="item second">
                    <div>
                        <img src={alpro} alt=""/>
                    </div>

                    
                </div>
            </div>
    </div>
  )
}

export default Slider
