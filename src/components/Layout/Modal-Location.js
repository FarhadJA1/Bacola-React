import React from 'react'
import '../../assets/style/Modal.scss';
function Modal() {
    return (

        <div class="row select-location col-md-2 col-sm-2">
            <button type="button" class="btn btn-light" data-bs-toggle="modal"
                data-bs-target="#exampleModal">
                <div class="row">
                    <div class="col-10">
                        <p class="your-location-text">Your Location</p>
                        <p class="select-location-text">Select a location</p>
                    </div>
                    <div class="col-2">
                        <i class="fas fa-angle-down"></i>
                    </div>
                </div>
            </button>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <p class="modal-title" id="exampleModalLabel">Choose your Delivery Location</p>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>

                        </div>

                        <p class="modal-info">Enter your address and we will specify the offer for your
                            area.</p>
                        <div class="modal-body">
                            <form class="d-flex">
                                <input class="form-control me-2 search-area" type="search"
                                    placeholder="Search your area" aria-label="Search" />
                            </form>
                            <div class="select">
                                <a href="">Choose your loaction</a>
                                <span>Clear All</span>
                            </div>
                            <div class="select">
                                <a href="">Alabama</a>
                                <span>Min: $130</span>
                            </div>
                            <div class="select">
                                <a href="">Alaska</a>
                                <span>$120</span>
                            </div>
                            <div class="select">
                                <a href="">Arizona</a>
                                <span>$150</span>
                            </div>
                            <div class="select">
                                <a href="">California</a>
                                <span>$110</span>
                            </div>
                            <div class="select">
                                <a href="">Colorado</a>
                                <span>$140</span>
                            </div>
                            <div class="select">
                                <a href="">Florida</a>
                                <span>$160</span>
                            </div>
                            <div class="select">
                                <a href="">Georgia</a>
                                <span>$120</span>
                            </div>
                            <div class="select">
                                <a href="">Kansas</a>
                                <span>$170</span>
                            </div>
                            <div class="select">
                                <a href="">Minessota</a>
                                <span>$120</span>
                            </div>
                            <div class="select">
                                <a href="">New York</a>
                                <span>$110</span>
                            </div>
                            <div class="select">
                                <a href="">Wasgington</a>
                                <span>$130</span>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Modal
