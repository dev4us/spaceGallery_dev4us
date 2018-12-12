import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import moment from "moment";
import client from "./apollo/apolloClient";

// Import Components
import MainFrame from "./component/MainFrame/MainFrame";
import PhotoFrame from "./component/PhotoFrame/PhotoFrame";
import Navigator from "./component/Navigator/Navigator";

class App extends Component {
  state = {
    date: "2018-12-12",
    url: ""
  };

  componentDidMount() {
    let prevDate = this.state.date;

    if (prevDate === "") {
      this.setState({
        date: moment().format("YYYY-MM-DD")
      });
      console.log(prevDate + "<<");
    }
    console.log(prevDate + "<<");
  }

  handleDate = control => {
    let prevDate = this.state.date;
    let nextDate = "";

    if (control === "prev") {
      nextDate = moment(prevDate)
        .subtract(1, "days")
        .format("YYYY-MM-DD");
    } else if (control === "next") {
      nextDate = moment(prevDate)
        .add(1, "days")
        .format("YYYY-MM-DD");
    }
    console.log(this.state);
    this.setState({
      date: nextDate
    });
  };

  render() {
    const { date } = this.state;
    const { handleDate } = this;

    return (
      <ApolloProvider client={client}>
        <MainFrame
          navigator={<Navigator handleDate={handleDate} />}
          photoFrame={<PhotoFrame date={date} />}
        />
      </ApolloProvider>
    );
  }
}

export default App;
