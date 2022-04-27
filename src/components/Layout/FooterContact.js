import React from 'react'
import apple from '../../assets/img/app-store.png';
import google from '../../assets/img/google-play.png';
import '../../assets/style/FooterContact.scss';
function FooterContact() {
    return (

        <div class="contact-details">
            <div class="container">
                <div class="row mt-5">
                    <div class="col-5 left">
                        <div class="row">
                            <div class="col-3">
                                <i class="fas fa-phone-alt icon"></i>
                            </div>
                            <div class="col-9 text">
                                <div class="up">
                                    <h4>8 800 555-55</h4>
                                </div>
                                <div class="down">
                                    <p>Working 8:00 - 22:00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-7 right">
                        <div class="row">
                            <div class="col-4 left-detail">
                                <div>
                                    <p class="p-up">Download App on Mobile :</p>
                                </div>
                                <div>
                                    <p class="p-down">15% discount on your first purchase</p>
                                </div>
                            </div>
                            <div class="col-4 center-detail">
                                <div class="row">
                                    <div class="col-6">
                                        <img src={google} alt="" />
                                    </div>
                                    <div class="col-6 apple">
                                        <img src={apple} alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4 right-detail">
                                <i class="fab fa-facebook"></i>
                                <i class="fab fa-twitter"></i>
                                <i class="fab fa-instagram"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FooterContact
