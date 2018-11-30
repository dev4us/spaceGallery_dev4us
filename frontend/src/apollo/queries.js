import gql from "graphql-tag";

export const PHOTO_LOAD = gql`
  query {
    getSpacePic(date: "2018-11-28") {
      url
    }
  }
`;
