import React from 'react'
import '../../assets/style/Logo.scss';
import logo from '../../assets/img/bacola-logo.png';
function Logo() {
    return (

        <div class="logo col-md-2 col-sm-2">
            <img src={logo}alt=""/>
                <span>Online Grocery Shopping Center</span>
        </div>

    )
}

export default Logo
