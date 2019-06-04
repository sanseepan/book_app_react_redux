import React, { Component} from "react";
import ReactDOM from "react-dom";
import Book from "./Components/Book";
import "./style.css";

class App extends Component {
  render(){
  return (
    <div>
      <div className="app-header">
        <h3>Todo app react redux</h3>
      </div>
      <div className="app-body">
        <Book />
      </div>
    </div>
  );
  }
}

export default App;



