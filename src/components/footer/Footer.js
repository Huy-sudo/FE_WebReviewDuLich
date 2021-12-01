import React from "react";
import ReactDOM from "react-dom";
import SocialMedia from "./SocialMedia";
import classes from "./Footer.module.css";
import ContactUs from "./ContactUs";
import HelpSection from "./HelpSection";

function FooterContent() {
    return <>
        <div className={classes.logo} >
            <img className={classes.imglogo}  alt=""/>
            Revigo Logo
        </div>
        <SocialMedia className={classes["social-media"]}/>
        <ContactUs />
        <HelpSection />
    </>
}

function Footer() {
    return <>
    {ReactDOM.createPortal(<FooterContent />, document.querySelector("footer"))}
    </>
}

export default Footer;
