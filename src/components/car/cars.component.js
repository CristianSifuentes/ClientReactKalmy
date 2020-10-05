import React, { Component, Fragment } from 'react';

import ReactDatatable from '@ashvin27/react-datatable';
import { orderBy } from 'lodash';
import CarService from "../../services/car.service";

class OnSort extends Component {
    constructor(props) {
        super(props);
        this.columns = [
            {
                key: "Id",
                text: "Id",
                className: "name",
                sortable: true
            },
            {
                key: "Type",
                text: "Type",
                sortable: true
            },
            {
                key: "Brand",
                text: "Brand",
                className: "postcode",
                sortable: true
            },
            {
                key: "Model",
                text: "Model",
                className: "rating",
                sortable: true
            },
            {
                key: "CreatedAt",
                text: "CreatedAt",
                className: "type_of_food",
                sortable: true
            },
            {
                key: "action",
                text: "Action",
                cell: (record, index) => {
                    return (
                        <Fragment>
                            <button
                                className="btn btn-primary btn-sm"
                                onClick={this.editRecord.bind(this, record, index)}
                                style={{marginRight: '5px'}}>
                                    Edit
                            </button>
                            <button 
                                className="btn btn-danger btn-sm" 
                                onClick={this.deleteRecord.bind(this, record, index)}>
                                    Delete
                            </button>
                        </Fragment>
                    );
                }
            }
        ];
        this.config = {
            page_size: 10,
            length_menu: [10, 20, 50],
            show_filter: true,
            show_pagination: true,
            filename: "restaurents",
            button: {
                excel: true,
                print: true,
                csv: true
            }
        }
        this.state = {
            records: []
        }
    }

    componentDidMount() {
      CarService.getCars().then(
        response => {
          this.setState({
            records: response.data
          });
           // data = response.channel.item;
          console.log(response.data)
  
         
        },
        error => {
         this.setState({
          records: []
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
  
    editRecord = (record, index) => {
        console.log("Edit record", index, record);
    }

    deleteRecord = (record, index) => {
        console.log("Delete record", index, record);
    }

    onSort = (column, records, sortOrder) => {
        return orderBy(records, [column], [sortOrder]);
    }

    render() {
        return (
            <ReactDatatable
                config={this.config}
                records={this.state.records}
                columns={this.columns}
                onSort={this.onSort}/>
        );
    }
}

export default OnSort;