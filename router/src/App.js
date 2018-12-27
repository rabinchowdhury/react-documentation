import React, { Component } from 'react';
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <Link to="Home">
            <li>Home</li>
          </Link>
          <Link to="About">
            <li>About</li>
          </Link>
          <Link to="Contact">
            <li>Contact</li>
          </Link>
        </ul>

        {this.props.children}
      </div>
      )
    }
}

export default App;
