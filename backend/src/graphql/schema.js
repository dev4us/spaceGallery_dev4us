const typeDefs = `
  type SpaceData {
    date: String!
    title: String!
    url: String!
    media_type: String!
    explanation: String
  }
  
  type Query {
    getSpacePic(date: String): SpaceData
  }
`;

export default typeDefs;
