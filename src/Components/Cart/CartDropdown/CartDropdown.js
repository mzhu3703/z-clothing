import React from 'react'
import CustomButton from '../../../Components/CustomButton/CustomButton'
import './CartDropdown.scss'
import {connect} from 'react-redux'

function CartDropdown(props){
    return(
        <div className = "cart-dropdown">
            <div className = "cart-items"></div>
            <CustomButton >Go To Check out</CustomButton>
        </div>
    )
}

//gives dropdown component prop hidden: true or false 
function mapStateToProps(state){
    return{
        toggleCart : state.cart.hidden
    }
}

export default connect(mapStateToProps)(CartDropdown);