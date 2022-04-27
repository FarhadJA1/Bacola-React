import React from 'react'
import '../../assets/style/Subcribe.scss';
import photo from '../../assets/img/footer-img-blue.png';
function Subscribe() {
  return (
    
      <div class="subscribe">
                <div class="container">
                    <div class="row mt-5 subscribe-content">
                        <div class="col-6">
                            <p class="subscribe-info">$20 discount for your first order</p>
                            <h5 class="subscribe-advert">Join our newsletter and get...</h5>
                            <p class="subscribe-text">Join our email subscription now to get updates on promotions and
                                coupons.</p>
                            <div class="row">
                                <div class="input-group mt-4">
                                    <i class="fas fa-envelope mail-icon"></i>
                                    <input type="text" class="form-control" placeholder="Your email address"
                                        aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                    <button class="btn btn-outline-secondary subscribe-btn" type="button"
                                        id="button-addon2">Subscribe</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <img src={photo} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
    
  )
}

export default Subscribe
