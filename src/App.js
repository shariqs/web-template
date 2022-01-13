import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./routes";
import Navbar from "./components/navbar";
import "./App.scss";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <div className="app-wrapper">
            <Navbar />
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
    </div>
  );
}

export default App;
