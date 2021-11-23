import React from "react";
import classes from "./Login.module.css";
import Navigation from "../../../header/Navigation/Navigation";
import LoginForm from "./LoginForm";
import Footer from "../../../footer/Footer";

function Login() {
    return (
        <div className={classes["login-background"]}>
            <Navigation />
            <LoginForm />
            <Footer />
        </div>
    )
}

export default Login;