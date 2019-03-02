import React, { Component } from 'react';

class Buttons extends React.Component {
  render () {
    return (
    <div className="buttons-container">
        <button id="clear" value='AC' onClick={this.props.initialize}>C</button>
        <button id="erase" value="erase" onClick={this.props.handleErase}><i class="fas fa-backspace"></i></button>
        <button id="multiply" value='*' onClick={this.props.handleOperators}>x</button>
        <button id="divide" value='/' onClick={this.props.handleOperators}>/</button>
        <button id="one" value='1' onClick={this.props.handleInput}>1</button>
        <button id="two" value='2' onClick={this.props.handleInput}>2</button>
        <button id="three" value='3' onClick={this.props.handleInput}>3</button>
        <button id="add" value='+' onClick={this.props.handleOperators}>+</button>
        <button id="four" value='4' onClick={this.props.handleInput}>4</button>
        <button id="five" value='5' onClick={this.props.handleInput}>5</button>
        <button id="six" value='6' onClick={this.props.handleInput}>6</button>
        <button id="subtract" value='-' onClick={this.props.handleOperators}>-</button>
        <button id="seven" value='7' onClick={this.props.handleInput}>7</button>
        <button id="eight" value='8' onClick={this.props.handleInput}>8</button>
        <button id="nine" value='9' onClick={this.props.handleInput}>9</button>
        <button id="equals" onClick={this.props.result}>=</button>
        <button id="zero" value='0' onClick={this.props.handleInput}>0</button>
        <button id="decimal" value='.' onClick={this.props.handleDecimal}>.</button>
    </div>
    )
  }
}
export default Buttons;
