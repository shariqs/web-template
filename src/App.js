import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./routes";
import "./App.scss";

function App() {
  return (
    <Router>
      <Switch>
        <div className="app-wrapper">
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={() => {
                if (route.private) return route.component();
                else return route.component();
              }}
            />
          ))}
        </div>
      </Switch>
    </Router>
  );
}

export default App;
