import React from 'react';
import './signInAndSignUp.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndSignUpPage = () => (
    <div className='signInAndSignUp'>
        <SignIn />
        <SignUp />
    </div>
);

export default SignInAndSignUpPage;