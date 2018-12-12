import gql from "graphql-tag";

export const PHOTO_LOAD = gql`
  query getSpacePic($date: String) {
    getSpacePic(date: $date) {
      url
      date
      media_type
    }
  }
`;
