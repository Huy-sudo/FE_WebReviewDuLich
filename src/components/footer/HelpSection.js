import React from "react";
import classes from "./HelpSection.module.css"

function HelpSection() {
    return <div className={classes['helpsection-wrapper']}>
        <a href="/">FAQ</a>
        <a href="/">Trung tâm CSKH</a>
        <a href="/">Điều khoản chính sách và dịch vụ</a>
    </div>
}

export default HelpSection;