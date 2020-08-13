import React, { Component } from 'react';
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
      <Char char={ch} key={index} delete={() => this.deleteChar(index)} />
      ); 
    });

    return (
      <div>
        <input type="text" onChange={this.handleChange} value={this.state.char}/>
        <p>{this.state.char.length}</p>

        <Validation length={this.state.char.length}/>
        
        {charList}
      </div>
    );
  }
}

export default App;
