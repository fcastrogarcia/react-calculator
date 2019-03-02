import React, { Component } from 'react';

class Display extends React.Component {
  render () {
    return (
      <div id="display-container">
        <div className="display">{this.props.currVal}</div>
        <div className="display" id="display">{this.props.formula}</div>
      </div>
        )
  }
}
 export default Display;
