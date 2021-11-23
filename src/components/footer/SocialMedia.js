import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import classes from "./SocialMedia.module.css";

function SocialMedia() {
  return (
    <div className={classes['socialmedia-wrapper']}>
      <p className={classes.title}>Theo dõi mới nhất tại</p>
      <div className={classes["socialmedia-icon"]}>
        <a href="/" className={classes.facebook}>
          <FontAwesomeIcon className={classes.icon}  icon={faFacebookSquare} />
        </a>
        <a href="/">
          <FontAwesomeIcon className={classes.icon} icon={faTwitter} />
        </a>
        <a href="/">
          <FontAwesomeIcon className={classes.icon} icon={faInstagram} />
        </a>
        <a href="/">
          <FontAwesomeIcon className={classes.icon} icon={faLinkedin} />
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
