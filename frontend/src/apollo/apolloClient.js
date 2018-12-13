import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  //uri: "http://localhost:4000"
  uri: "http://spacegallery-dev4us-backend.surge.sh"
});

export default client;
