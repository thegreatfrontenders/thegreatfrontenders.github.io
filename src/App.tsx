import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Characters from './components/Characters';
import Home from './components/Home';
import DevilFruits from './components/DevilFruits/DevilFruits';
import ConnectFour from './components/ConnectFour/ConnectFour';
import { useEffect } from 'react';
import { fetchAllCharacters } from './slices/characterSlice';
import { store } from './store/store';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    store.dispatch(fetchAllCharacters());
  }, [dispatch]);
  return (
    <Router>
      <div className="App">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="/">The Grand Line</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                <Nav.Link as={Link} to={"/characters"}>Characters</Nav.Link>
                <NavDropdown title="Games" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to={"/fruitFinder"}>Devil Fruit Finder</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/connectFour"}>Connect Four!</NavDropdown.Item>
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
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/characters' element={<Characters />} />
          <Route path='/fruitFinder' element={<DevilFruits />} />
          <Route path='/connectFour' element={<ConnectFour />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;