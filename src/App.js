import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Buttons from './Buttons';
import Display from './Display';


const isOperator = /[\+\-\/\*]/;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currVal: '',
      formula: '0'
    }
 this.handleInput = this.handleInput.bind(this);
 this.handleOperators = this.handleOperators.bind(this);
 this.handleResult = this.handleResult.bind(this);
 this.handleDecimal = this.handleDecimal.bind(this);
 this.initialize = this.initialize.bind(this);
  }

  handleInput(e) {
    this.setState({
      currVal: this.state.currVal == '0' || isOperator.test(this.state.currVal) ? e.target.value :
               this.state.currVal + e.target.value,
      formula: this.state.currVal == '0' && e.target.value == '0' ? this.state.formula:
               this.state.formula == '0' ? e.target.value:
               this.state.formula + e.target.value,
    })
  }

  handleOperators(e) {
    this.setState({
      currVal: e.target.value,
      formula: this.state.formula[this.state.formula.length-1] == '.' ? this.state.formula.slice(0,-1) + e.target.value :
               !isOperator.test(this.state.currVal) ? this.state.formula + e.target.value :
                this.state.formula.slice(0,-1) + e.target.value
    })
    }

  handleResult() {
    let result = eval(this.state.formula).toString();
    this.setState({
      formula: result.includes('.') && result.length > 10 ? result.slice(0,11) : result,
      currVal: ''
    })
  }

  handleDecimal = (e) => {
    const numberAfterLastOperator = this.state.formula.match(/(-?\d+\.?\d*)$/);
    this.setState({
      currVal: this.state.currVal.includes('.') ? this.state.currVal :
               numberAfterLastOperator == null ? '0.' :
               numberAfterLastOperator[0].includes('.') ? this.state.currVal :
               this.state.currVal=='' || isOperator.test(this.state.currVal) ? '0.' :
               this.state.currVal + e.target.value,
      formula: numberAfterLastOperator == null ? this.state.formula + '0.' :
               numberAfterLastOperator[0].includes('.') ? this.state.formula :
               this.state.formula + e.target.value
    })
  }
 initialize(e) {
   switch(e.target.value) {
    case "AC":
    this.setState({
        currVal: '',
        formula: '0'
    })
    break;
    case "erase":
    this.setState({
      currVal: this.state.currVal=='0' ? this.state.currVal :
               this.state.currVal.length==1 ? '0'  :
               this.state.currVal.slice(0,-1),
      formula: this.state.formula=='0' ? this.state.formula :
               this.state.formula.length==1 ? '0' :
               this.state.formula.slice(0,-1)
    })
    break;
  }
  }

  render () {
    return (
    <div id="container">
        <Display currVal={this.state.currVal} formula={this.state.formula}/>
        <Buttons passValue={this.handleInput} initialize={this.initialize} handleOperators={this.handleOperators} result={this.handleResult} handleDecimal={this.handleDecimal}/>
     </div>
    )
  }
}


export default App;
