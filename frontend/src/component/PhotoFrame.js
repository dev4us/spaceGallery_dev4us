import React from "react";
import { Query } from "react-apollo";
import { PHOTO_LOAD } from "../apollo/queries";

const PhotoFrame = () => (
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
);

export default PhotoFrame;
