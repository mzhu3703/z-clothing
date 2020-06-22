import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebaseUtil'
import '/home/michael/z-clothing/src/Components/Header/HeaderStyles.scss'
import { connect } from 'react-redux'
import CartIcon from '../Cart/CartIcon/CartIcon'
import CartDropdown from '../Cart/CartDropdown/CartDropdown'

// Parent is App. Contains all the links
function Header(props) {
    const {currentUser,hidden} = props
    return (
        <div className='header'>
            <div className='logoContainer'>
                <Link to='/'>
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
            {hidden ? <CartDropdown/> : null }
            
        </div>
    )
}

// destructures user off of state and currentUser is destructured off of user 
function mapStateToProps({user: {currentUser}, cart: {hidden}}){
    return {
        currentUser,
        hidden
    }
}

  
  export default connect(mapStateToProps)(Header);
