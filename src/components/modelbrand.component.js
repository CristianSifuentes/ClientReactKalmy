import React, {  PureComponent } from 'react';

 import { PieChart, Pie, Sector } from 'recharts';

 const data = [
   { name: '2017', value: 3 },
   { name: '2018', value: 3 },
   { name: '2019', value: 8 },
   { name: '2020', value: 8 }

 ];

 const renderActiveShape = (props) => {
   const RADIAN = Math.PI / 180;
   const {
     cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
     fill, payload, percent, value,
   } = props;
   const sin = Math.sin(-RADIAN * midAngle);
   const cos = Math.cos(-RADIAN * midAngle);
   const sx = cx + (outerRadius + 10) * cos;
   const sy = cy + (outerRadius + 10) * sin;
   const mx = cx + (outerRadius + 30) * cos;
   const my = cy + (outerRadius + 30) * sin;
   const ex = mx + (cos >= 0 ? 1 : -1) * 22;
   const ey = my;
   const textAnchor = cos >= 0 ? 'start' : 'end';

   return (
    
     <g>
       <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
       <Sector
         cx={cx}
         cy={cy}
         innerRadius={innerRadius}
         outerRadius={outerRadius}
         startAngle={startAngle}
         endAngle={endAngle}
         fill={fill}
       />
       <Sector
         cx={cx}
         cy={cy}
         startAngle={startAngle}
         endAngle={endAngle}
         innerRadius={outerRadius + 6}
         outerRadius={outerRadius + 10}
         fill={fill}
       />
       <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
       <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
       <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#5ce6b0">{`Total: ${value}`}</text>
       <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#5ce6b0">
         {`(Rate ${(percent * 100).toFixed(2)}%)`}
       </text>
     </g>
   );
 };


 export default class ModelBrand extends PureComponent {
   static jsfiddleUrl = 'https:jsfiddle.net/alidingling/hqnrgxpj/';

   state = {
     activeIndex: 0,
   };

   onPieEnter = (data, index) => {
     this.setState({
       activeIndex: index,
     });
   };

   render() {
     return (
       <PieChart width={1000} height={1000}>
         <Pie
           activeIndex={this.state.activeIndex}
           activeShape={renderActiveShape}
           data={data}
           cx={200}
           cy={200}
           innerRadius={60}
           outerRadius={80}
           fill="#5ce6b0"
           dataKey="value"
           onMouseEnter={this.onPieEnter}
         />
       </PieChart>
     );
   }
 }


//  color: rgb(0, 125, 252);
//  background: rgb(92, 230, 176);



// import React, { Component } from "react";

// import UserService from "../services/user.service";

// export default class BoardModerator extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       content: ""
//     };
//   }

//   componentDidMount() {
//     UserService.getModeratorBoard().then(
//       response => {
//         this.setState({
//           content: response.data
//         });
//       },
//       error => {
//         this.setState({
//           content:
//             (error.response &&
//               error.response.data &&
//               error.response.data.message) ||
//             error.message ||
//             error.toString()
//         });
//       }
//     );
//   }

//   render() {
//     return (
//       <div className="container">
//         <header className="jumbotron">
//           <h3>{this.state.content}</h3>
//         </header>
//       </div>
//     );
//   }
// }
