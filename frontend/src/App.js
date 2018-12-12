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
    date: "",
    maxDate: null
  };

  handleDate = control => {
    let prevDate = this.state.date;
    let maxDate = this.state.maxDate;
    let nextDate = "";

    if (control === "prev") {
      nextDate = moment(prevDate)
        .subtract(1, "days")
        .format("YYYY-MM-DD");
    } else if (control === "next") {
      if (prevDate === maxDate) return false;
      nextDate = moment(prevDate)
        .add(1, "days")
        .format("YYYY-MM-DD");
    }

    this.setState({
      date: nextDate
    });
  };

  setDate = date => {
    let { maxDate } = this.state;

    if (!maxDate) {
      this.setState({
        date: date,
        maxDate: date
      });
    }
  };

  render() {
    const { date } = this.state;
    const { handleDate, setDate } = this;

    return (
      <ApolloProvider client={client}>
        <MainFrame
          navigator={<Navigator handleDate={handleDate} />}
          photoFrame={<PhotoFrame date={date} setDate={setDate} />}
        />
      </ApolloProvider>
    );
  }
}

export default App;
