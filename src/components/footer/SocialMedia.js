import React, { Fragment } from "react";
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
      <p>Theo dõi mới nhất tại</p>
      <div className={classes["socialmedia-icon"]}>
        <a href="/" className={classes.facebook}>
          <FontAwesomeIcon  icon={faFacebookSquare} />
        </a>
        <a href="/">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="/">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
