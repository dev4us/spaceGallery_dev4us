import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  //uri: "http://localhost:4000"
  uri: "https://spacegallery-backend-ohcb7sftw.now.sh"
});

export default client;
