import React from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Click from './pages/Click';
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div>
      <Navigation />

      <Switch>
        <Route exact path="/" />
        <Route path='/click' component={Click} />
        <Route path="/about" />

        <Route path="/login" />
      </Switch>
    </div>
  );
}
