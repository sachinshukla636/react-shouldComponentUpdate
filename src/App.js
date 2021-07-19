import React from 'react';
import './style.css';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate', this.state.count);
    return true;
  }
  render() {
    return (
      <div>
        <h1>Should Component Update {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Update Counter
        </button>
      </div>
    );
  }
}
