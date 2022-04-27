import React from 'react'
import '../../assets/style/Dropdown.scss';
function Dropdown() {
    return (

        <div class="dropdown categories col-md-3">
            <div class="btn-group">
                <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fas fa-bars"></i> All categories <span>TOTAL 63 PRODUCTS</span>
                </button>
                <ul class="dropdown-menu mt-5">
                    <li><a href="">Fruits & Vegetables <i class="fas fa-angle-right"></i></a> </li>
                    <li><a href="">Meats & Seafood</a></li>
                    <li><a href="">Breakfast & Diary</a></li>
                    <li><a href="">Beverages <i class="fas fa-angle-right"></i></a></li>
                    <li><a href="">Breads & Bakery</a></li>
                    <li><a href="">Frozen Foods</a></li>
                    <li><a href="">Biscuits & Snacks</a></li>
                    <li><a href="">Grocery & Staples</a></li>
                </ul>
            </div>
        </div>

    )
}

export default Dropdown
