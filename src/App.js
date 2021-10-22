import { Fragment } from "react";
import { Route, Switch } from "react-router";
import Arts from "./components/Arts";
import Home from "./components/Home";
import MainNavigation from "./components/layout/MainNavigation";
import Science from "./components/Science";
import Us from "./components/Us";
import World from "./components/World";

function App() {
  return (
    <Fragment>
      <MainNavigation/>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/world">
          <World/>
        </Route>
        <Route path="/arts">
          <Arts/>
        </Route>
        <Route path="/science">
          <Science/>
        </Route>
        <Route path="/us">
          <Us/>
        </Route>
      </Switch>
    </Fragment>
    
  );
}

export default App;
