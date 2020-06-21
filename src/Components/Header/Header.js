import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebaseUtil'
import '/home/michael/z-clothing/src/Components/Header/HeaderStyles.scss'
import { connect } from 'react-redux'
import setCurrentUser from '../../redux/user/user.actions'
// Parent is App. Contains all the links
function Header(props) {
    const {currentUser} = props
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
            </div>
        </div>
    )
}

function mapStateToProps(state){
    return {
        currentUser: state.user.currentUser
    }
}

  
  export default connect(mapStateToProps)(Header);
