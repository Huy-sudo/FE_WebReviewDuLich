import React, { Fragment } from 'react';
import Navigation from '../../../header/Navigation/Navigation';
import SignupForm from './SignupForm';
import Footer from "../../../footer/Footer"

function Signup() {
    return <Fragment>
        <Navigation />
        <SignupForm />
        <Footer />
    </Fragment>
}

export default Signup;
