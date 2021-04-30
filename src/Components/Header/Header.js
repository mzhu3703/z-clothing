import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebaseUtil'
import '/home/michael/z-clothing/src/Components/Header/HeaderStyles.scss'
import { connect } from 'react-redux'
import CartIcon from '../Cart/CartIcon/CartIcon'
import CartDropdown from '../Cart/CartDropdown/CartDropdown'
import {selectHidden} from '../../redux/cart/cart.selectors'
import {currentUserSelector} from '../../redux/user/user.selectors'

// Parent is App. Contains all the links
function Header(props) {
    const {currentUser,hidden} = props
    return (
        <div className='header'>
            <div className='logoContainer'>
                <Link to='/z-clothing'>
                    <Logo className='logo' />
                </Link>
            </div>
            <div className='options'>
                <Link className='option' to='/shop'>SHOP</Link>
                <Link className='option' to='/shop'>CONTACT</Link>
                {/* initially currentUser = null but after signing out and signing in currentUser : {currentUser = null} 
                    */}
                {currentUser === null
                    ? <Link className='option' to='/Sign'>Sign In</Link>
                    : <div className='option' onClick={() => auth.signOut()}>Sign Out</div>
                }
                <CartIcon/>
            </div>
            {hidden ? null  : <CartDropdown/>}
            
        </div>
    )
}

function mapStateToProps(state){
    return{
        currentUser: currentUserSelector(state),
        hidden: selectHidden(state)
    }
}



  
  export default connect(mapStateToProps)(Header);
