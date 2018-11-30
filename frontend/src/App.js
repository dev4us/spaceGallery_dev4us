import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import client from "./apollo/apolloClient";
import PhotoFrame from "./component/PhotoFrame";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <PhotoFrame />
      </ApolloProvider>
    );
  }
}

export default App;
