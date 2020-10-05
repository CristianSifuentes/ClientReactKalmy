import React, { PureComponent } from 'react';
import { Treemap } from 'recharts';
import CarService from "../services/car.service";

const data = [
  {
    name: 'small',
    children: [
      { name: '2019', size: 1 },
      { name: '2020', size: 3 },
    ],
  },
  {
    name: 'medium',
    children: [
      { name: '2018', size: 1 },
      { name: '2019', size: 4 },
      { name: '2020', size: 5 },
    ],
  },
  {
    name: 'large',
    children: [
      { name: '2016', size: 1 },
      { name: '2017', size: 4 },
      { name: '2020', size: 5 },
    ],
  }
];

export default class ModelType extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/u702a3Lx/';


  state = {
    activeIndex: 0,
  };

  componentDidMount() {
    CarService.getCars("Model", "Type").then(
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
        fill="#8884d8"
      />
    );
  }
}
