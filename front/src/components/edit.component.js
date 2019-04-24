import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      id: this.props.match.params.id,
      nom: '',
      prenom: ''
    }
  }

  componentDidMount(){
    // axios.get('http://localhost:8080/list')
    //   .then(response => {
    //       this.setState({ 
    //         nom: response.data[this.props.match.params.id].nom, 
    //         prenom: response.data[this.props.match.params.id].prenom });
    //         //console.log("setState", response.data[this.props.match.params.id].nom);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   })
      axios.get('http://localhost:8080/list')
        .then(response => {
            this.setState({ data : response.data})
              // nom: response.data[this.props.match.params.id].nom, 
              // prenom: response.data[this.props.match.params.id].prenom });
              //console.log("setState", response.data[this.props.match.params.id].nom);
              
              var prendId = []
              var id = parseInt(this.props.match.params.id)
              prendId = response.data
              var variable = 0
              
              for (let i = 0; i < prendId.length; i++) {
                  if(id === prendId[i].id){
                    variable = i
                  }
              }
              console.log(variable);
              
        })
        
        .catch(function (error) {
          console.log(error);
        })
      
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
    var idExpl = this.props.match.params.id
    e.preventDefault();
    const obj = {
      id: idExpl,
      nom: this.state.nom,
      prenom: this.state.prenom
    };
    axios.put('http://localhost:8080/list', obj)
        .then(res => console.log(res.data));
    const { history } = this.props;
    history.push("http://localhost:3000")
    //this.props.history.push('/');
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Person Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.nom}
                      onChange={this.onChangePersonName}
                      />
                </div>
                <div className="form-group">
                    <label>Business Name: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.prenom}
                      onChange={this.onChangeBusinessName}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Update Business" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}