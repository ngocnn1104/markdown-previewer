import React, { Component } from 'react';
import './App.css';

var marked = require('marked');
var typing;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { typing: 0 };
    this.translation = this.translation.bind(this);
  }

  translation() {
    var marked = require("marked");
    document.getElementById("result").innerHTML = marked(document.getElementById("input").value);
    this.setState({ typing: typing+1 });
  }

  render() {
    return (
      <div class="row">
        <div class="col-md-1" />
        <div class="col-md-4">
          <textarea id="input" onChange={this.translation} placeholder="Type your markdown here..."/>
        </div>
        <div class="col-md-2" />
        <div class="col-md-4">
          <p id="result">... and you will see the result here!</p>
        </div>
      </div>
    );
  }
}

export default App;
