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

// const vmodel = value => {
//   if (value.length < 6 || value.length > 40) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         The model must be between 6 and 40 characters.
//       </div>
//     );
//   }
// };

export default class DeleteCar extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangetype = this.onChangetype.bind(this);
    this.onChangebrand = this.onChangebrand.bind(this);
    this.onChangemodel = this.onChangemodel.bind(this);
    this.onChangeId = this.onChangeId.bind(this);

    this.state = {
      id: 0,
      type: "",
      brand: "",
      model: 0,
      successful: false,
      message: ""
    };
  }

  onChangeId(e) {
    this.setState({
      id: e.target.value
    });
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

      CarService.deleteCar(
        Number(this.state.id)
      ).then(
        response => {
          console.log(response);
          this.setState({
            successful: true
          });
          // this.setState({
          //   message: response.data.message,
          //   successful: true
          // });
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

  componentDidMount(props) {
    console.log("id",this.props.location.state.id);
    
    CarService.getCar(
      Number(this.props.location.state.id)
    ).then(
      response => {
        console.log(response.data);

         this.setState({
           id: response.data.Id,
           type: response.data.Type,
          brand: response.data.Brand,
          model: response.data.Model,
         });
      },
      error => {
        console.log(error);
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
                  <label htmlFor="type">id</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="id"
                    value={this.state.id}
                    onChange={this.onChangeId}
                    validations={[required]}
                    disabled={true}
                  />
                </div>


                <div className="form-group">
                  <label htmlFor="type">type</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="type"
                    value={this.state.type}
                    onChange={this.onChangetype}
                    validations={[required, vtype]}
                    disabled={true}

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
                    disabled={true}

                  />
                </div>

                <div className="form-group">
                  <label htmlFor="model">model</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="model"
                    value={this.state.model}
                    onChange={this.onChangemodel}
                    validations={[required, vtype]}
                    disabled={true}

                  />
                </div>

                <div className="form-group">
                  <button className="btn btn-custom btn-block">Delete</button>
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