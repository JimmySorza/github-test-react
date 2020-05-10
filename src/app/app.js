import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import { Home, Detail } from '../router'
import "./app.css"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          component={Home}
        />
        <Route
          path="/:detail"
          component={Detail}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
