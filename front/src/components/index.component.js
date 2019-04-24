import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import Create from './create.component';
export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {business: []};
    }
    componentDidMount(){
      axios.get('http://localhost:8080/list')
        .then(response => {
          this.setState({ business: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    tabRow(){
      return this.state.business.map(function(object, i){
          return <TableRow obj={object} key={i} />;
      });
    }

    render() {
      return (
        <div>
          <Create/>
          <table class="table table-bordered">
            <thead class="thead-dark">
              <tr>
                <th>Id</th>
                <th>Nom</th>
                <th>Prénom</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
        </div>
      );
    }
  }