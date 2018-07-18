import React, { Component } from "react";
import "./App.css";
import Login from "./components/Login";
import VideoBackground from "./components/VideoBackground"

class App extends Component {
  render() {
    return (
      <div>
        <VideoBackground/>
        <Login>
        </Login>
      </div>
    );
  }
}

export default App;
