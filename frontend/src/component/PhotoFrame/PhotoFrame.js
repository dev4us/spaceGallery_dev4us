import React from "react";
import styles from "./PhotoFrame.scss";
import classNames from "classnames/bind";
import { Query } from "react-apollo";
import { PHOTO_LOAD } from "../../apollo/queries";
import { ChasingDots } from "better-react-spinkit";

const cx = classNames.bind(styles);

class PhotoFrame extends React.Component {
  componentDidMount() {}
  render() {
    const { date, setDate } = this.props;

    return (
      <div className={cx("photo-frame")}>
        <Query
          query={PHOTO_LOAD}
          variables={{ date }}
          onCompleted={data => {
            setDate(data.getSpacePic.date);
          }}
        >
          {({ loading, data, error }) => {
            if (loading)
              return (
                <span>
                  <ChasingDots color="white" size={60} />
                </span>
              );
            if (error) {
              console.log(error);
              return <span>something happen...</span>;
            }
            if (data) {
              return data.getSpacePic.media_type === "image" ? (
                <img src={data.getSpacePic.url} alt={`beutiful Space Pic`} />
              ) : (
                <iframe
                  title="space-video"
                  src={data.getSpacePic.url}
                  frameBorder="0"
                  gesture="media"
                  allow="encrypted-media"
                  allowFullScreen
                />
              );
            }
          }}
        </Query>
      </div>
    );
  }
}

export default PhotoFrame;
