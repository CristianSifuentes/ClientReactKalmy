import React, { Component } from "react";
import AuthService from "../services/auth.service";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: AuthService.getCurrentUser()
    };
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div className="container">
        <header className="jumbotron">
          <h3>
            <strong>{currentUser.username}</strong> Profile
          </h3>
          <p>
          <strong>Token:</strong>{" "}
          {currentUser.token.substring(0, 20)} ...{" "}
          {currentUser.token.substr(currentUser.token.length - 20)}
        </p>
        <p>
          <strong>Username:</strong>{" "}
          {currentUser.userDetails.UserName}
        </p>
        <p>
          <strong>Fullname:</strong>{" "}
          {currentUser.userDetails.FullName}
        </p>
        <p>
          <strong>Role:</strong>{" "}
          {currentUser.userDetails.UserRole}
        </p>

        </header>
      </div>
    );
  }
}