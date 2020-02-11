import React, { Component } from 'react';
import Validation from './components/Validation';
import Char from './components/Char';
import './App.css';

class App extends Component {

  state = {
    inputLength: 0,
    inputValue: "",
    valueArray: []
  }

  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.inputHandler} value={this.state.inputValue}></input>
        <p>Input Length: {this.state.inputLength}</p>
        <Validation inputLength={this.state.inputLength}></Validation>
        {this.state.valueArray.map(
          (char, index) => {
             return <Char char={char}
                          click={() => this.deleteChar(index)}
                          key={index}/>}
        )}
      </div>
    );
  }

  inputHandler = (event) => {
    this.setState({
      inputLength: event.target.value.length,
      inputValue: event.target.value,
      valueArray: event.target.value.split('')
    });
  }

  deleteChar = (index) => {
    const chars = [...this.state.valueArray];
    chars.splice(index,1);
    const stringChar = chars.join('');
    this.setState({
      inputLength: stringChar.length,
      inputValue: stringChar,
      valueArray: chars
    });
  }

}

export default App;
