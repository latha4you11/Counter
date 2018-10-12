import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p style={{fontSize: 45, fontFamily: 'Courier New', fontWeight: "bold"}}>Counter</p>
          {/* <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        </header>
        <div className= "Counter">
          <Counter />
        </div>
      </div>
    );
  }
}

export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countValue: 0
    };
    this.addOnClick = this.addOnClick.bind(this);
    this.minusOnClick = this.minusOnClick.bind(this);
  }
  
  addOnClick(e) {
    this.setState({
      countValue: this.state.countValue + 1
    })
  }

  minusOnClick(e) {
    this.setState({
      countValue: this.state.countValue - 1
    })
  }

  render() {
    return (
      <div className= "Count-Comp">
        <div className= "Count-Value">
          {this.state.countValue}
        </div>
        <p className= "Button-Group">
          <Button className= "Button" bsStyle="info" bsSize="large" onClick={this.addOnClick}>
            <i class="fa fa-plus fa-2x" aria-hidden="true"></i>
          </Button>
          {' '}
          <Button className= "Button" bsStyle="info" bsSize="large" onClick={this.minusOnClick}>
            <i class="fa fa-minus fa-2x" aria-hidden="true"></i>
          </Button>
        </p>
      </div>
    )
  }
}


export default App;
