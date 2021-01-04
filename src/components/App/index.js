import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Login from "../Login";
// import Home from "../Home";
import "./styles.scss";

const history = createBrowserHistory();

class App extends Component {
  componentDidMount() {
    if (sessionStorage.getItem("authToken") === null) {
      history.push("/login");
    }
  }

  render() {
    return (
      <Router history={history}>
        <Switch>
          {/* <Route path="/" exact component={Home} /> */}
          <Route path="/login" exact component={Login} />
          {/* <Route path="/edit-post" exact component={Edit} /> */}
          {/* <Route path="/edit-post/:postId" exact component={EditPost} /> */}
        </Switch>
      </Router>
    );
  }
}

export default App;
