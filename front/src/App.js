import React, { Component } from 'react';
import Index from './components/index.component';
// import { MDBSpinner } from 'mdbootstrap';

import "./App.css"
class App extends Component {
  render() {
    return (
    <div>
      <Index/>
      <div class="spinner-border text-light" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    );
  }
}

export default App;