import React from "react";
import styles from "./PhotoFrame.scss";
import classNames from "classnames/bind";
import { Query } from "react-apollo";
import { PHOTO_LOAD } from "../../apollo/queries";

const cx = classNames.bind(styles);

const PhotoFrame = () => (
  <div className={cx('photo-frame')}>
    <Query query={PHOTO_LOAD}>
      {({ loading, data, error }) => {
        if (loading) return <span>loading</span>;
        if (error) {
          console.log(error);
          return <span>something happen...</span>;
        }
        if (data) {
          console.log(data);

          return <img src={data.getSpacePic.url} alt={`beutiful Space Pic`} />;
        }
      }}
    </Query>
  </div>
);

export default PhotoFrame;
