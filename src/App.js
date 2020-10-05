import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";

import Type from "./components/type.component";
import TypeModel from "./components/typemodel.component";
import TypeBrand from "./components/typebrand.component";

import Brand from "./components/brand.component";
import BrandType from "./components/brandtype.component";
import BrandModel from "./components/brandmodel.component";


import Model from "./components/model.component";
import ModelBrand from "./components/modelbrand.component";
import ModelType from "./components/modeltype.component";

import BasicTable from "./components/car/cars.component";
import UpdateCar from "./components/car/updatecar.component";
import InsertCar from "./components/car/insertcar.component";
import DeleteCar from "./components/car/deletecar.component";



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
        showAdminBoard: user.userDetails.UserRole
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showAdminBoard } = this.state;

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
            </li>  */}

            {showAdminBoard === "User" && (
              <li className="nav-item">
              <Link to={"/cars"} className="nav-link">
                Cars
              </Link>
            </li>
              )} 

             {showAdminBoard === "User" && (
              <li className="nav-item">
              <Link to={"/insertcar"} className="nav-link">
                Add Car
              </Link>
            </li>
              )} 




            {showAdminBoard === "Admin" && (
              <li className="nav-item">
              <Link to={"/type"} className="nav-link">
                Type
              </Link>
            </li>
              )} 

             {showAdminBoard === "Admin" && (
                <li className="nav-item">
                <Link to={"/typebrand"} className="nav-link">
                  Type-Brand
                </Link>
                </li>
              )} 


             {showAdminBoard === "Admin" && (
              <li className="nav-item">
              <Link to={"/typemodel"} className="nav-link">
                Type-Model
              </Link>
            </li>
              )} 


              {showAdminBoard === "Admin" && (
                <li className="nav-item">
                <Link to={"/brand"} className="nav-link">
                  Brand
                </Link>
              </li>
                )} 


                {showAdminBoard === "Admin" && (

                <li className="nav-item">
                <Link to={"/brandtype"} className="nav-link">
                  Brand-Type
                </Link>
                </li>
                )} 

                {showAdminBoard === "Admin" && (
                <li className="nav-item">
                <Link to={"/brandmodel"} className="nav-link">
                  Brand-Model
                </Link>
                </li>
                )} 

             {showAdminBoard === "Admin" && (
                          <li className="nav-item">
                          <Link to={"/model"} className="nav-link">
                            Model
                          </Link>
                        </li>
              )} 


             {showAdminBoard === "Admin" && (
              <li className="nav-item">
              <Link to={"/modeltype"} className="nav-link">
                Model-Type
              </Link>
            </li>
              )} 

             {showAdminBoard === "Admin" && (
              <li className="nav-item">
              <Link to={"/modelbrand"} className="nav-link">
                Model-Brand
              </Link>
            </li>
              )} 

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

              {/* <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li> */}
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

            <Route path="/cars" component={BasicTable} />
            <Route path="/updatecar" component={UpdateCar} />
            <Route path="/insertcar" component={InsertCar} />
            <Route path="/deletecar" component={DeleteCar} />

            

          </Switch>
        </div>
      </div>
    );
  }
}

export default App;