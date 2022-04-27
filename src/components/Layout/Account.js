import React from 'react'
import '../../assets/style/Account.scss';
function Account() {
    return (
        <div class="row col-md-3 col-sm-3">
            <div class="col-3 account">
                <i class="fas fa-user-circle"></i>
            </div>
            <div class="col-3 total-price">
                <span>$0.00</span>
            </div>
            <div class="col-3 cart">
                <i class="fas fa-shopping-basket"></i><sup><span>0</span></sup>
            </div>
        </div>

    )
}

export default Account
