import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Button } from 'react-bootstrap';

class Login extends Component {
  state = { username: "", password: "" };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    //console.log('Login -> form submit', { username, password });
    this.props.login({ username, password });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;

    return (
      <div className="container-login">
        <div className="img">
          <img src="https://res.cloudinary.com/ytyt/image/upload/v1611683017/undraw_netflix_q00o_rtw0ba.svg" alt="Profile"/>
        </div>
        <div className="login-content">
          <form action="index.html" onSubmit={this.handleFormSubmit}>
            <img src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/82b8d8efd3b0ac6382b9d0d71a99c6cf9dcefa23/img/avatar.svg" alt="Profile"/>
              <h2 className="title">LOG IN</h2>
              <div className="input-div one">
                <div className="i">
                </div>
                <div className="div">
                  <input type="text" className="input" name="username" value={username} onChange={this.handleChange} placeholder="Username" />
                </div>
              </div>
              <div className="input-div pass">
                <div className="i">
                </div>
                <div className="div">
                  <input type="password" className="input" name="password" value={password} onChange={this.handleChange} placeholder="Password" />
                </div>
              </div>
              <a href="/signup">You don't have an account? Sign In!!</a>
              <Button type="submit" className="primary" value="Log in">Log in!</Button>
            </form>
            </div>
          </div>
    );
  }
}

export default withAuth(Login);
