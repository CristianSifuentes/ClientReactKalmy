import React, { PureComponent } from 'react';
import { Treemap } from 'recharts';
import CarService from "../services/car.service";

export default class ModelBrand extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/u702a3Lx/';

  state = {
    activeIndex: 0,
  };

  componentDidMount() {
    CarService.search("Model", "Brand").then(
      response => {
        this.setState({
          content: response
        });
         // data = response.channel.item;
        console.log(response)

       
      },
      error => {
       this.setState({
         content: []
       });
       //  this.setState({
       //    content:
       //      (error.response && error.response.data) ||
       //      error.message ||
       //      error.toString()
       //  });
      }
    );
   }

  render() {
    return (
      <Treemap
        width={1200}
        height={800}
        data={this.state.content}
        dataKey="size"
        ratio={4 / 4}
        stroke="#fff"
        fill="#5ce6b0"
      />
    );
  }
}
