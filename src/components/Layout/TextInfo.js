import React from 'react'
import '../../assets/style/TextInfo.scss';
function TextInfo() {
    return (

        <div class="icon-info">
            <div class="container">
                <div class="row mt-5">
                    <div class="col-3 goods-info"><i class="fas fa-cookie-bite"></i>
                        <span>Everyday fresh products</span>
                    </div>
                    <div class="col-3 delivery-info">
                        <i class="fas fa-truck"></i>
                        <span>
                            Free delivery for order over $70</span>
                    </div>
                    <div class="col-3 discount-info">
                        <i class="fas fa-percent"></i>
                        <span>Daily Mega Discounts</span>
                    </div>
                    <div class="col-3 price-info">
                        <i class="fas fa-dollar-sign"></i>
                        <span>Best price on the market</span>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default TextInfo
