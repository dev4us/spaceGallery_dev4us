import React from "react";
import styles from "./MainFrame.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

// import Components

const MainFrame = ({ navigator, photoFrame }) => {
  return (
    <div className={cx("main-frame")}>
      <header>Astronomy Picture of the Day</header>
      <div className={cx("viewer-frame")}>
        {navigator}
        {photoFrame}
      </div>
    </div>
  );
};

export default MainFrame;
