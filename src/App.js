import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navigation from "./components/Navigation";

import Click from "./pages/Click";
import Cards from "./pages/Cards";

import Home from "./pages/Home";

import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Account from "./pages/Account";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";

import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);
  return (
    <div>
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/click" component={Click} />
        <Route path="/account" component={Account} />
        <Route path="/about" component={About} />
        <Route path="/flip" component={Cards} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </div>
  );
}
