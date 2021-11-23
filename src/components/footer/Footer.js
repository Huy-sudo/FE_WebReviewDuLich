import React from "react";
import SocialMedia from "./SocialMedia";
import classes from "./Footer.module.css";
import ContactUs from "./ContactUs";
import HelpSection from "./HelpSection";

function Footer() {
    return <footer>
        <div className={classes.logo} >
            <img className={classes.imglogo}  alt=""/>
            Revigo Logo
        </div>
        <SocialMedia className={classes["social-media"]}/>
        <ContactUs />
        <HelpSection />
    </footer>
}

export default Footer;
