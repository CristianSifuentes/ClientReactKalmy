import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
// import BoardUser from "./components/board-user.component";

import Type from "./components/type.component";
import TypeModel from "./components/typemodel.component";
import TypeBrand from "./components/typebrand.component";

import Brand from "./components/brand.component";
import BrandType from "./components/brandtype.component";
import BrandModel from "./components/brandmodel.component";


import Model from "./components/model.component";
import ModelBrand from "./components/modelbrand.component";
import ModelType from "./components/modeltype.component";

import BoardAdmin from "./components/board-admin.component";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: "ROLE_MODERATOR",
        showAdminBoard: "ROLE_ADMIN",

        // showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        // showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
          kalmy
          </Link>
          <div className="navbar-nav mr-auto">
            {/* <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li> */}



            <li className="nav-item">
                <Link to={"/type"} className="nav-link">
                  Type
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/typebrand"} className="nav-link">
                  Type-Brand
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/typemodel"} className="nav-link">
                  Type-Model
                </Link>
              </li>


              <li className="nav-item">
                <Link to={"/brand"} className="nav-link">
                  Brand
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/brandtype"} className="nav-link">
                  Brand-Type
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/brandmodel"} className="nav-link">
                  Brand-Model
                </Link>
              </li>


              <li className="nav-item">
                <Link to={"/model"} className="nav-link">
                  Model
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/modeltype"} className="nav-link">
                  Model-Type
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/modelbrand"} className="nav-link">
                  Model-Brand
                </Link>
              </li>



             {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/type"} className="nav-link">
                  Type
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )} 

            {/* {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )} */}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            {/* <Route path="/user" component={BoardUser} />  */}
            <Route path="/type" component={Type} />
            <Route path="/typebrand" component={TypeBrand} />
            <Route path="/typemodel" component={TypeModel} />

            <Route path="/brand" component={Brand} />
            <Route path="/brandtype" component={BrandType} />
            <Route path="/brandmodel" component={BrandModel} />


            <Route path="/model" component={Model} />
            <Route path="/modeltype" component={ModelType} />
            <Route path="/modelbrand" component={ModelBrand} />

             <Route path="/admin" component={BoardAdmin} /> 
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;