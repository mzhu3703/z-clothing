import React from 'react'
import SignInForm from '../../Components/SignInForm/SignInForm'
import SignUpForm from '../../Components/SignUpForm/SignUpForm'
import './SignPageStyles.scss'

function SignPage() {
    return (
        <div className="signPage">
                <SignInForm />
                <SignUpForm  />
           
        </div>
    )
}

export default SignPage;