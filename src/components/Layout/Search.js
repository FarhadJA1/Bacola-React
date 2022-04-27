import React from 'react'
import '../../assets/style/Search.scss';
function Search() {
    return (

        <div class="col-5 search">
            <input class="form-control mr-sm-2" type="search" placeholder="Search for products"
                aria-label="Search" />
            <i class="fas fa-search"></i>
        </div>

    )
}

export default Search
