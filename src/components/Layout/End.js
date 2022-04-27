import React from 'react'
import payment from '../../assets/img/payments.jpg';
import '../../assets/style/End.scss';
function End() {
  return (
    <div class="end">
                <div class="container">
                    <div class="row mt-4">
                        <div class="col-5 copyright">
                            <p>Copyright 2022 © Bacola WordPress Theme. All rights reserved. Powered by KlbTheme.

                            </p>
                        </div>
                        <div class="col-7">
                            <div class="row">
                                <div class="privacy col-6">
                                    <a href="">Privacy Policy</a>
                                    <a href="">Terms and Conditions</a>
                                    <a href="">Cookie</a>
                                </div>
                                <div class="payments col-6">
                                    <img src={payment} alt=""/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
  )
}

export default End
