import React from 'react';
import Layout from '../../../components/helpers/Layout';
import LoginForm from '../../../components/main/Authentication/Login/LoginForm';
import {login} from './action'

function Login() {
    return (
        <Layout>
           <LoginForm /> 
        </Layout>
    )
}

export default Login
