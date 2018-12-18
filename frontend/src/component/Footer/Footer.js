import React from "react";
import styles from "./Footer.scss";
import classNames from "classnames/bind";
import { FaGithub } from "react-icons/fa";

const cx = classNames.bind(styles);

const Footer = () => {
  const openReposit = () => {
    window.open("https://github.com/dev4us/spaceGallery_dev4us", "", "");
  };
  return (
    <div className={cx("footer")} onClick={() => openReposit()}>
      <span className={cx("logo-contents")}>
        <span className={cx("footer-comment")}>GitHub Repository</span>
        <FaGithub className={cx("logo-git")} />
      </span>
    </div>
  );
};

export default Footer;
