import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";
import typeDefs from "./graphql/schema.js";

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() => console.log("Backend Server Running..."));
