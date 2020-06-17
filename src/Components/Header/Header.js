import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import {auth} from '../../firebase/firebaseUtil'
import '/home/michael/crwn-clothing/src/Components/Header/HeaderStyles.scss'

// Parent is App. Contains all the links
function Header(props) {
    const {currentUser} = props;
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
                {currentUser === null
                    ? <Link className = 'option' to='/Sign'>Sign In</Link>
                    : <div className = 'option' onClick = {() => auth.signOut()}>Sign Out</div>}
            </div>

        </div>
    )
}

export default Header 