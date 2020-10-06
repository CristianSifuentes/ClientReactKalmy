import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import CarService from "../../services/car.service";
import { Redirect } from 'react-router';

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

// const brand = value => {
//   if (!isbrand(value)) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         This is not a valid brand.
//       </div>
//     );
//   }
// };

const vtype = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The type must be between 3 and 20 characters.
      </div>
    );
  }
};

const vnumber = value => {
  if (value.length != 4) {
    return (
      <div className="alert alert-danger" role="alert">
        This field must be only 5 digits long.
      </div>
    );
  }
};


export default class InsertCar extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangetype = this.onChangetype.bind(this);
    this.onChangebrand = this.onChangebrand.bind(this);
    this.onChangemodel = this.onChangemodel.bind(this);

    this.state = {
      type: "",
      brand: "",
      model: 0,
      successful: false,
      message: ""
    };
  }

  onChangetype(e) {
    this.setState({
      type: e.target.value
    });
  }

  onChangebrand(e) {
    this.setState({
      brand: e.target.value
    });
  }

  onChangemodel(e) {
    this.setState({
      model: e.target.value
    });
  }

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });

    this.form.validateAll();

      CarService.addCar(
        this.state.type,
        this.state.brand,
        Number(this.state.model)
      ).then(
        response => {
          console.log(response);
          if (response === undefined) {
            this.setState({
              successful: false
            });
          }else {
           this.setState({
             successful: true
           });
          }
        },
        error => {
          console.log(error);
          this.setState({
            successful: false
          });
          // const resMessage =
          //   (error.response &&
          //     error.response.data &&
          //     error.response.data.message) ||
          //   error.message ||
          //   error.toString();

          // this.setState({
          //   successful: false,
          //   message: resMessage
          // });
        }
      );
    
  }

  render() {

    
      if (this.state.successful) {
        return <Redirect
        to={{
        pathname: "/cars"
      }}
    />;
    }


    return (
      <div className="col-md-12">

          <Form
            onSubmit={this.handleRegister}
            ref={c => {
              this.form = c;
            }}
          >
            {!this.state.successful && (
              <div>
                <div className="form-group">
                  <label htmlFor="type">type</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="type"
                    value={this.state.type}
                    onChange={this.onChangetype}
                    validations={[required, vtype]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="brand">brand</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="brand"
                    value={this.state.brand}
                    onChange={this.onChangebrand}
                    validations={[required, vtype]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="model">model</label>
                  <Input
                    type="number"
                    className="form-control"
                    name="model"
                    value={this.state.model}
                    onChange={this.onChangemodel}
                    validations={[required, vnumber]}
                  />
                </div>

                <div className="form-group">
                  <button className="btn btn-custom btn-block">Insert</button>

                </div>
              </div>
            )}

            {this.state.message && (
              <div className="form-group">
                <div
                  className={
                    this.state.successful
                      ? "alert alert-success"
                      : "alert alert-danger"
                  }
                  role="alert"
                >
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
          </Form>
      
      </div>
    );
  }
}