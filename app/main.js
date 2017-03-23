import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

class Compont extends Component {
  // constructor(){
  //   //console.log(str);
  // }
  render() {
    return <h1>{this.props.name}</h1>;
  }
};

ReactDOM.render(
  <Compont name="我是一只小鸭子,咿呀咿呀哟" />,
  document.getElementById('app')
);
