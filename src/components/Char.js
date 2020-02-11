import React, { Component } from 'react';
import '../App.css';

class Char extends Component {

  render() {
    return (
      <div className="char">
        <span onClick={this.props.click}>{this.props.char}</span>
      </div>
    );
  }

  inputHandler = (event) => {
    this.setState({
      inputLength: event.target.value.length,
      inputValue: event.target.value
    });
  }

}

export default Char;
