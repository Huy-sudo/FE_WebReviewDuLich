import React from "react";
import classes from "./ContactUs.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkedAlt,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

function ContactUs() {
  return (
    <div className={classes["contactus-wrapper"]}>
      <p className={classes.title}>Liên hệ với chúng tôi</p>
      <div className={classes["address"]}>
        <FontAwesomeIcon className={classes.icon} icon={faMapMarkedAlt} />
        <p className={classes["address-detail"]}>Võ Văn Ngân, thành phố Thủ Đức, thành phố Hồ Chí Minh</p>
      </div>
      <div className={classes["phone-number"]}>
        <FontAwesomeIcon  className={classes.icon} icon={faPhoneAlt} />
        <p>+1900 6969</p>
      </div>
      <div className={classes["email"]}>
        <FontAwesomeIcon  className={classes.icon} icon={faEnvelope} />
        <p>revigo-support@gmail.com</p>
      </div>
    </div>
  );
}

export default ContactUs;
