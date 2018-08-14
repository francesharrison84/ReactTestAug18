import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

// create a function to get the current date & then return it as a string
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
ReactDOM.render(greeting, rootElement);
