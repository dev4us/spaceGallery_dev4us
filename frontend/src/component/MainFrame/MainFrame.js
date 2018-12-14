import React from "react";
import styles from "./MainFrame.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

// import Components

const MainFrame = ({ navigator, photoFrame }) => {
  return (
    <div className={cx("main-frame")}>
      <header>
        <span className={cx("left-title")}>Astronomy Picture of the Day</span>
        <span className={cx("right-title")}>
          Special Thanks to Velopert, Moondadi, Nicolas
        </span>
      </header>
      <div className={cx("viewer-frame")}>
        {navigator}
        {photoFrame}
      </div>
    </div>
  );
};

export default MainFrame;
