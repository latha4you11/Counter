import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { add, subtract } from '../actions/index';
import '../style/style.css';
import logo from '../logo.svg';
import { Button } from 'react-bootstrap';;

class Counter extends Component {
    
    // onClickAdd(e) {
    //     e.preventDefault();
    //     let val = this.props.add(this.state.count);
    //     this.setState({ count: val});
    // }

    // onClickSub=(e)=> {
    //     e.preventDefault();
    //     let val = this.props.subtract(this.state.count);
    //     this.setState({ count: val});
    // }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p style={{fontSize: 45, fontFamily: 'Courier New', fontWeight: "bold"}}>Counter</p>
        </header>
        <div className= "Counter">
        <div className= "Count-Comp">
        <div className= "Count-Value">
          {this.props.counter.counter}
        </div>
        <p className= "Button-Group">
          <Button className= "Button" bsStyle="info" bsSize="large" onClick={this.props.add}>
            <i className="fa fa-plus fa-2x" aria-hidden="true"></i>
          </Button>
          {' '}
          <Button className= "Button" bsStyle="info" bsSize="large" onClick={this.props.subtract}>
            <i className="fa fa-minus fa-2x" aria-hidden="true"></i>
          </Button>
        </p>
      </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return { counter: state.counter}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ add: add, subtract: subtract }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// export class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       countValue: 0
//     };
//     this.addOnClick = this.addOnClick.bind(this);
//     this.minusOnClick = this.minusOnClick.bind(this);
//   }
  
//   addOnClick(e) {
//     this.setState({
//       countValue: this.state.countValue + 1
//     })
//   }

//   minusOnClick(e) {
//     this.setState({
//       countValue: this.state.countValue - 1
//     })
//   }
// }
