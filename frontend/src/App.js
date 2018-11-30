import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import client from "./apollo/apolloClient";

// Import Components
import MainFrame from "./component/MainFrame/MainFrame";
import PhotoFrame from "./component/PhotoFrame/PhotoFrame";
import Navigator from "./component/Navigator/Navigator";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <MainFrame navigator={<Navigator />} photoFrame={<PhotoFrame />} />
      </ApolloProvider>
    );
  }
}

export default App;
