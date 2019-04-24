import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {
  constructor(props) {
      super(props);
      this.onChangePersonName = this.onChangePersonName.bind(this);
      this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

      this.state = {
          id : '',
          person_name: '',
          business_name: ''
         // list: ''
      }
  }
  onChangePersonName(e) {
    this.setState({
      person_name: e.target.value
    });
  }
  onChangeBusinessName(e) {
    this.setState({
      business_name: e.target.value
    })  
  }

  onSubmit(e) {
     e.preventDefault();
    const obj = {
      id : 1,
      nom: this.state.person_name,
      prenom: this.state.business_name
    };
    axios.post('http://localhost:8080/list', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      id:'',
      nom: '',
      prenom: ''
    })
  }
 
  render() {
      return (
          <div style={{ marginTop: 10 }}>
              <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                      <label>Nom:  </label>
                      <input 
                        type="text" 
                        className="form-control" 
                        value={this.state.person_name}
                        onChange={this.onChangePersonName}
                        />
                  </div>
                  <div className="form-group">
                      <label>Prénom: </label>
                      <input type="text" 
                        className="form-control"
                        value={this.state.business_name}
                        onChange={this.onChangeBusinessName}
                        />
                  </div>
                  <div className="form-group">
                      <input type="submit" value="Ajouter" className="btn btn-primary"/>
                  </div>
              </form>
          </div>
      )
  }
}