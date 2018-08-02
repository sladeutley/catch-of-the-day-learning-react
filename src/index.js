import React from "react";
// import { Component } from 'react'; --> could deconstruct it this way and then dont have to put React.Component, doesn't matter
// Also, above is ES6 way of doing same thing below, I think
// const React = require('react');
import { render } from 'react-dom';

// put a class as capitalized bc it indicates to us that it's a class and reusable
// Also, every class in react needs at least one method inside it, called render, which determines what html elements do i render to the dom/page
class StorePicker extends React.Component {
  render() {
    return <p>Hello!</p>;
  }
}

render(<p>HEYYYYY</p>, document.querySelector('#main'));
// could do above, but want to use the class StorePicker, so -->
render(<StorePicker />, document.querySelector('#main'));
// *** Note, StorePicker has a self closing tag, its the same as <StorePicker></StorePicker> 

