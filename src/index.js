import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

// JSX: create a function to get the current date & then return it as a string
// - this is known as an arrow function
// - identical to this kind of syntax:
//      const getCurrentDaye = function() {
const getCurrentDate = () => {
  const date = new Date();
  return date.toDateString();
};

const rootElement = document.getElementById("root");
const greeting = <h1>Hello World! Current Date: {getCurrentDate()}</h1>;

// render method takes 3 arguments:
// - react element to render
// - DOM container to render the element in
// - optional callback function
// ReactDOM.render(greeting, rootElement);

ReactDOM.render(<App />, rootElement);
