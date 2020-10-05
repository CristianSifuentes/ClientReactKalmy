

import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

export default class InsertCar extends Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
         <form onSubmit={this.handleSubmit}>
            <div class="form-group">
              <label for="Type">Type</label>
              <input type="type" class="form-control" id="type" aria-describedby="type" placeholder="Enter type"/>
              <small id="typeHelp" class="form-text text-muted">small, medium or big</small>
            </div>
            <div class="form-group">
              <label for="brand">Brand</label>
              <input type="brand" class="form-control" id="exampleInputbrand1" aria-describedby="brandHelp" placeholder="Enter brand" />
              <small id="brandHelp" class="form-text text-muted">We'll never share your brand with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="Model">Model</label>
              <input type="model" class="form-control" id="model" aria-describedby="modelHelp" placeholder="Enter model" />
              <small id="modelHelp" class="form-text text-muted">We'll never share your brand with anyone else.</small>
            </div>
            <button type="submit" class="btn btn-primary">Save</button>

         </form>
      );
    }
  }