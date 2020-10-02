import React, { PureComponent } from 'react';
import { Treemap } from 'recharts';

const data = [
  {
    name: 'small',
    children: [
      { name: 'Nissan', size: 1 },
      { name: 'Toyota', size: 3 },
    ],
  },
  {
    name: 'medium',
    children: [
      { name: 'Nissan', size: 1 },
      { name: 'Toyota', size: 4 },
      { name: 'Tesla', size: 5 },
    ],
  },
  {
    name: 'large',
    children: [
      { name: 'Nissan', size: 1 },
      { name: 'Toyota', size: 4 },
      { name: 'Tesla', size: 5 },
    ],
  }
];

export default class TypeBrand extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/u702a3Lx/';

  render() {
    return (
      <Treemap
        width={800}
        height={600}
        data={data}
        dataKey="size"
        ratio={4 / 3}
        stroke="#fff"
        fill="#8884d8"
      />
    );
  }
}

