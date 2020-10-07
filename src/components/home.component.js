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

        {currentUser ? (
          <div>

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

        </div>

          ) : (
            <div>

              <h3>
                  <strong></strong> Profile
                </h3>
                <p>
                <strong>Token:</strong>{" "}
               
              </p>
              <p>
                <strong>Username:</strong>{" "}
               
              </p>
              <p>
                <strong>Fullname:</strong>{" "}
              </p>
              <p>
                <strong>Role:</strong>{" "}
              </p>

        </div>

          )}
    

        </header>
      </div>
    );
  }
}