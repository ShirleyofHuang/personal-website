import React from 'react';
import logo from './logo.svg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import TypingComponent from './components/Typing';

function App() {
  return (
    <div className="App">
      <Container className="App-Container">
        <Row>
          <Col xs={8}>
          <header className="App-header">
        <h1 className="Title">
          the life & work of
          Shirley Huang... <TypingComponent />
        </h1>
        <h2
          className="Subtitle"
        >
          {/* i'm a {" "}
          <TypingComponent /> */}
        </h2>
      </header>          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default App;
