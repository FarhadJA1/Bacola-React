import React from 'react'
import '../../assets/style/Pages.scss';
function Pages() {
    return (
        <div class="col-md-8 nav-buttons">
            <ul>
                <li><button id="home-btn" type="button" class="btn btn-light"><a href="index.html">HOME</a>
                    <i class="fa fa-caret-down"></i></button></li>
                <li><button id="shop-btn" type="button" class="btn btn-light"><a href="shop.html">SHOP</a>
                    <i class="fa fa-caret-down"></i></button></li>
                <li><button type="button" class="btn btn-light"><i class="fas fa-fish"></i>MEATS &
                    SEAFOOD</button></li>
                <li><button type="button" class="btn btn-light"><i
                    class="fas fa-bread-slice"></i>BAKERY</button></li>
                <li><button type="button" class="btn btn-light"><i
                    class="fas fa-mug-hot"></i>BEVERAGES</button></li>
                <li><button type="button" class="btn btn-light"><a href="blog.html">BLOG</a></button></li>
                <li><button type="button" class="btn btn-light"><a href="contact.html">CONTACT</a></button>
                </li>

            </ul>

        </div>
    )
}

export default Pages
