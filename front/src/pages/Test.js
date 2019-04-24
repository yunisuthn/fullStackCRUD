import React, { Component } from 'react';

class Test extends Component {
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
    fetch('http://localhost:3000/test')
    .then(res => res.text())
    .then(list => this.setState({ list:list }))
  }

render() {
return (
<div className="App">
  <button onClick={()=>{
    var test = this.state.list
    console.log( JSON.parse(test))
    var test1 = JSON.parse(test)
    for (let i = 0; i < test1.length; i++) {
       document.getElementById('b').innerHTML += test1[i].nom + " "
       document.getElementById('b').innerHTML += test1[i].prenom + "<br/>"
        
    }
    }}>lister</button>
     <p id='b'></p>
  {/* Link to List.js */}
  {/* <Link to={'./list'}>
    <button variant="raised">
        My List
    </button>
  </Link> */}
</div>
);}
}

export default Test;