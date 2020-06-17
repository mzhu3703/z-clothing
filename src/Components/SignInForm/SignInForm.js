import React, { Component } from 'react';
import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton'
import { auth, signInWithGoogle } from '../../firebase/firebaseUtil'
import '/home/michael/crwn-clothing/src/Components/SignInForm/SignInForm.scss'
class SignInForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
        }
    }

    handleChange = evt => {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    handleSubmit = async event => {
        event.preventDefault();
        const{email, password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password)
            this.setState({ email: '', password: '' });
        }
        catch(error){
            console.log(error)
        }
        
    };



    render() {
        return (
            <form className='signInForm' onSubmit={this.handleSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    handleChange={this.handleChange}
                    value={this.state.email}
                    label='email'
                    required
                />
                <FormInput
                    name='password'
                    type='password'
                    value={this.state.password}
                    handleChange={this.handleChange}
                    label='password'
                    required
                />
                <div className = 'button'>
                    <CustomButton type='submit'> Sign in </CustomButton>
                    <CustomButton isGoogleSignIn onClick={signInWithGoogle}> Sign in with Google </CustomButton>
                </div>
            </form>
        );
    }

}


export default SignInForm;