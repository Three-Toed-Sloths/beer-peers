import React, { Component } from "react";
import "./App.css";
import Login from "./components/Login";
import VideoBackground from "./components/VideoBackground"
import {Container, Row} from "./components/Grid"


class App extends Component {
  render() {
    return (
      <div>
        <VideoBackground/>
        <Container>
          
          <Row>
            <Login>
            </Login>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
