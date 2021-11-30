import React from "react";
import Layout from "../../../components/helpers/Layout";
import LoginForm from "../../../components/main/Authentication/Login/LoginForm";
import { login } from "./action";

function Login() {

  function getLoginData(email, password) {
    let userlogin = { email: email, password: password };
    console.log(userlogin);
    return ;
  }

  return (
    <Layout>
      <LoginForm onLogin={getLoginData} />
    </Layout>
  );
}

export default Login;
