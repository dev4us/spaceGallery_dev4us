import { getSpacePic } from "./db";

const resolvers = {
  Query: {
    getSpacePic: (_, { date }) => getSpacePic(date)
  }
};

export default resolvers;
