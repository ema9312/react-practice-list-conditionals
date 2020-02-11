import React, { Component } from 'react';
import '../App.css';

class Validation extends Component {

  render() {
    return (
      <div>
        <span>{(this.props.inputLength > 5) ? "Text Too Long" : "Text Too Short"}</span>
      </div>
    );
  }


}

export default Validation;
