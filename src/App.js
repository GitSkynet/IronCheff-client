import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navibar from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Private from "./pages/Private";
import AuthProvider from "./lib/AuthProvider";
import PrivateRoute from "./components/PrivateRoute";
import AnonRoute from './components/AnonRoute';

class App extends Component {
  render() {
    return (
      <AuthProvider>
          <Navibar />
          <Switch>
            <Route exact path="/" component={Home} />
            <AnonRoute exact path="/signup" component={Signup} />
            <AnonRoute exact path="/login" component={Login} />
            <PrivateRoute exact path="/private" component={Private} />
          </Switch>
      </AuthProvider>
    );
  }
}

export default App;
