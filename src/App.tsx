import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Characters from './components/Characters';
import { Link } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">The Grand Line</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link as={Link} to={"/characters"}>Characters</Nav.Link>
              <NavDropdown title="Games" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Devil Fruit Finder</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <header className="App-header">
        <img src='straw-hat-logo.png' className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://www.freepublicapis.com/one-piece-api"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React With The Straw Hats
        </a>
      </header>
      <Routes>
        <Route path='/characters' element={<Characters />} />
      </Routes>


    </div>
    </Router>
  );
}

export default App;
