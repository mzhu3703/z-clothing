import React, { Component } from 'react';
import CustomButton from '../CustomButton/CustomButton'
import FormInput from '../FormInput/FormInput'
import {auth, createUserProfileDocument} from '../../firebase/firebaseUtil'
import '/home/michael/z-clothing/src/Components/SignUpForm/SignUpForm.scss'
class SignUpForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            displayName: '',
            email: '',
            password: '',
            passwordConfirmation: '',
        }
    }

    handleChange = evt => {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    // handles account creation when sign up is clicked 
    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, passwordConfirmation} = this.state;
        // if passwords dont match dont do anything 
        if(password !== passwordConfirmation){
            alert("Passwords don't match")
            return;
        }
        try {
            //important to have await so that user is created first before putting in profile 
            const { user } = await auth.createUserWithEmailAndPassword(
              email,
              password
            );
      
            await createUserProfileDocument(user, { displayName });
      
            this.setState({
              displayName: '',
              email: '',
              password: '',
              confirmPassword: ''
            });
        }
        catch(error){
            console.error(error)
        }

    };

    render() {
        return (
            <form className='signUpForm' onSubmit={this.handleSubmit}>
                <FormInput
                    name='displayName'
                    type='text'
                    onChange={this.handleChange}
                    value={this.state.displayName}
                    label='Display Name'
                    required
                />
                <FormInput
                    name='email'
                    type='email'
                    onChange={this.handleChange}
                    value={this.state.email}
                    label='email'
                    required
                />
                <FormInput
                    name='password'
                    type='password'
                    value={this.state.password}
                    onChange={this.handleChange}
                    label='password'
                    required
                />
                <FormInput
                    name='passwordConfirmation'
                    type='password'
                    value={this.state.passwordConfirmation}
                    onChange={this.handleChange}
                    label='Confirm Password'
                    required
                />
                <div className='button'>
                    <CustomButton type='submit'> Sign Up </CustomButton>
                </div>
            </form>
        )
    }
}

export default SignUpForm;