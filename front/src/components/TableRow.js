import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import Edit from './edit.component';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'

import axios from 'axios';
class TableRow extends Component {

  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }
  delete() {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-ui delete">
            <form onSubmit={e => {
              e.preventDefault();
              axios.delete('http://localhost:8080/list')
                  .then(console.log('Deleted'))
                  .catch(err => console.log(err))
                  window.location.reload();
                  onClose();
              }}>
              <div className="sup">
                <label>Suppression</label><br/>
              </div>
              <div className="nom">
                <label>{this.props.obj.nom}</label>&nbsp;&nbsp;
                <label>{this.props.obj.prenom}</label><br/>
              </div>
              <div className="row colon">
                <div className="ligne2">
                  <button className={'btn btn-secondary boutton2'}>Oui</button>&nbsp;&nbsp;
                </div>
                <div className="ligne1">
                  <button className={'btn btn-secondary boutton2'} onClick={onClose}>Non</button>
                </div>
                </div>
            </form>
          </div>
        )
      }
    })
  }

  Edit = () => (
		confirmAlert({
		customUI: ({ onClose }) => {
			return (
        <div className="custom-ui confirm">
          <form onSubmit={e => {
            e.preventDefault();
            const obj = {
              id: this.props.obj.id,
              nom: this.newNom.value,
              prenom: this.newPrenom.value
            };
            axios.put('http://localhost:8080/list', obj)
                .then(res => console.log(res.data));
                //this.props.history.push('/');
                onClose();
            }}>
              <div className="row colon">
                <div className="ligne2">
                  <label>Nom</label>
                </div>
                <div className="ligne1">
                  <input type="text" ref={(input)=>this.newNom = input } defaultValue={this.props.obj.nom}/><br/>
                </div>
              </div>
              <div className="row colon">
                <div className="ligne2">
                  <label>Prénom</label>
                </div>
                <div className="ligne1">
                  <input type="text" ref={(input)=>this.newPrenom = input } defaultValue={this.props.obj.prenom}/><br/>
                </div>
              </div>
              <div className="row colon">
                <div className="ligne2">
                  <button className='btn btn-secondary boutton2'>Ok</button>
                </div>
                <div className="ligne1">
                  <button className='btn btn-secondary boutton2' onClick={onClose}>Annuler</button>
                </div>
              </div>
          </form>
        </div>
			)
		}
	}))
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.id}
          </td>
          <td>
            {this.props.obj.nom}
          </td>
          <td>
            {this.props.obj.prenom}
          </td>
          <td>
                {/* <Link to={"/edit/"+this.props.obj.id} className="btn btn-primary"><button>Edit</button></Link> */}
                <button onClick={this.delete} className="btn1 btn btn-danger">X</button>
                <button onClick={this.Edit} className=" btn1 btn btn-success">Edit</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;