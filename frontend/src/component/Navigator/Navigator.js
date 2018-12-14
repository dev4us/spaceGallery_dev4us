import React from "react";
import styles from "./Navigator.scss";
import classNames from "classnames/bind";

import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const cx = classNames.bind(styles);

const Navigator = ({ handleDate }) => {
  return (
    <div className={cx("navigator")}>
      <div onClick={() => handleDate("prev")}>
        <MdChevronLeft className={cx("arrow")} />
      </div>
      <div onClick={() => handleDate("next")}>
        <MdChevronRight className={cx("arrow")} />
      </div>
    </div>
  );
};

export default Navigator;
