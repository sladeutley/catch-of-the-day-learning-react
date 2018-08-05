import React from "react";
// import { Component } from 'react'; --> could deconstruct it this way and then dont have to put React.Component, doesn't matter
// Also, above is ES6 way of doing same thing below, I think
// const React = require('react');
import { render } from 'react-dom';
import StorePicker from './components/StorePicker'
// import css here instead of doing it in index.html. You can do either one though.
import './css/style.css';

// render(<p>HEYYYYY</p>, document.querySelector('#main'));
// could do above, but want to use the class StorePicker, so -->
render(<StorePicker />, document.querySelector('#main'));
// *** Note, StorePicker has a self closing tag, its the same as <StorePicker></StorePicker>

