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
          nom: '',
          prenom: ''
         // list: ''
      }
  }
  onChangePersonName(e) {
    this.setState({
      nom: e.target.value
    });
  }
  onChangeBusinessName(e) {
    this.setState({
      prenom: e.target.value
    })  
  }

  onSubmit(e) {
     e.preventDefault();
    const obj = {
      id : 1,
      nom: this.state.nom,
      prenom: this.state.prenom
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
          <div className="create">
              <form onSubmit={this.onSubmit}>
                <div className="row">
                  <div className="ligne">
                      <label>Nom  </label>&nbsp;&nbsp;
                  </div>
                  <div className="ligne">
                      <input 
                        type="text" 
                        className="form-control" 
                        value={this.state.nom}
                        onChange={this.onChangePersonName}
                        />&nbsp;&nbsp;
                  </div>
                  <div className="ligne">
                      <label>Prénom </label>&nbsp;&nbsp;
                  </div>
                  <div className="ligne">
                      <input type="text" 
                        className="form-control"
                        value={this.state.prenom}
                        onChange={this.onChangeBusinessName}
                        />&nbsp;&nbsp;
                  </div>
                  <div className="ligne">
                      <input type="submit" value="Ajouter" className="btn btn-primary"/>
                  </div>
                </div>
              </form>
          </div>
      )
  }
}