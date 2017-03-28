import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

class Compont extends Component {

    render() {
        return <h1 > { this.props.name } < /h1>;
    }
};
render( <
    Compont name = "我是一只小鸭子,咿呀咿呀哟？？nice终于配置好了" / > ,
    document.getElementById('app')
);