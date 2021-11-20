import React from "react";
import SocialMedia from "./SocialMedia";
import classes from "./Footer.module.css";

function Footer() {
    return <footer>
        <SocialMedia className={classes["social-media"]}/>
    </footer>
}

export default Footer;