import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  //uri: "http://localhost:4000"
  uri: "https://spacegallery-backend-wnfbetpmuo.now.sh/"
});

export default client;
