import React, { Component } from 'react';
import routes from "./routes";
import {
  withRouter,
  Route,
  Switch,
  BrowserRouter as Router
} from "react-router-dom";

// import "./assets/scss/theme.scss";

// import "../../../public/assets/css/themify-icons.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            {routes.map((route, idx) => (
              <Route path={route.path} component={route.component} key={idx} />
            ))}
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}

export default withRouter(App);