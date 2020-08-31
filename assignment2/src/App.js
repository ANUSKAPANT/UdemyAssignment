import React, { Component } from 'react';
import './App.css'
import Validation from './Validation/Validation';
import Char from './Char/Char';


class App extends Component {
  state = {
    char : '',
  }

  handleChange = (e) => {
    this.setState({
      char: e.target.value
    })
  }
  deleteChar = (id) => {
    const char = this.state.char.split('');
    char.splice(id, 1);
    const newchar = char.join('');
    this.setState({
      char: newchar
    })
  }

  render() {
    const charList = this.state.char.split('').map((ch, index) => {
      return(
      <Char char={ch} key={index} deleted={() => this.deleteChar(index)} />
      ); 
    });

    return (
      <div className="App">
        <input  aria-label="Enter" type="text" onChange={this.handleChange} value={this.state.char} placeholder="Enter"/>
        <p>Count : {this.state.char.length}</p>

        <Validation length={this.state.char.length}/>
        
        {charList}
      </div>
    );
  }
}

export default App;
