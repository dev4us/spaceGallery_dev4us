import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  //uri: "http://localhost:4000"
  uri: "https://spacegallery-backend-ivsedzl30.now.sh/"
});

export default client;
