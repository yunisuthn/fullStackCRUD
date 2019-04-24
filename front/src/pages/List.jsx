import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'react-confirm-alert/src/react-confirm-alert.css'

class List extends Component {
  // Initialize the state

  constructor(props){
    super(props);
    this.state = {
      list: ''
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getList();
  }

  // Retrieves the list of items from the Express app
  getList = () => {
    fetch('http://localhost:3000/list')
    .then(res => res.text())
    .then(list => this.setState({ list:list }))
  }

  lister= () =>  {

    var test = this.state.list
    console.log( JSON.parse(test))
    var test1 = JSON.parse(test)
    // console.log(test1.length);
    var element=[]
    for (let i = 0; i < test1.length; i++) {
      element[i] = (
        <center>
          <div>
            <label>{test1[i].nom}</label>&nbsp;&nbsp;
            <label>{test1[i].prenom}</label>&nbsp;&nbsp;
            <button onClick={this.editer(test1[i].id)} >edit</button>
          </div>
        </center>
      );   
    }
    
    ReactDOM.render(element, document.getElementById('root'));
  }
    
  editer = () =>{
    console.log('id');
    // confirmAlert({
    //   customUI: ({ onClose }) => {
    //     return (
    //       <div>
    //         <label>Nom</label><input type="text" value=""/><br/>
    //         <label>Prenom</label><input type="text" value=""/><br/>
    //         <button>Enregistrer</button>
    //       </div>
    //     )
    //   }
    //})  
  }

render() {
return (
<div className="App">
  <button onClick={this.lister}>lister</button>
     <p id='b'></p>
</div>
);}
}

export default List;