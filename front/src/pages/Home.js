import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
    <div className="App">
      {/* Link to List.js */}
      <Link to={'./list'}>
        <button variant="raised">
            Liste
        </button>
      </Link>
      <Link to={'./test'}>
        <button variant="raised">
            Test
        </button>
      </Link>
      <Link to={'./ajouter'}>
        <button variant="raised">
            Ajouter
        </button>
      </Link>
    </div>
    );
  }
}
export default Home;