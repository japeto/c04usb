import './App.css';
import { 
  BrowserRouter as Router, Routes, Link, Route 
} from 'react-router-dom';

import Home from './components/Home';
import Products from './components/Products';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function App() {
  return (
    <Router>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/home">Tienda CI/CD</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Principal</Nav.Link>
            <Nav.Link href="/products">Productos</Nav.Link>
            <Nav.Link href="/orders">Ordenes</Nav.Link>
            <NavDropdown title="Operaciones" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Crear producto</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Crear orden</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Despachos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Clientes</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      {/* <div>
        <ul>
          <li><Link to="/home">Principal</Link></li>
          <li><Link to="/products" >Productos</Link></li>
        </ul>
      </div>
      <hr /> */}
        <Routes>
          <Route exact path="/home" element={<Home/>} />
          <Route path="/login" element={<Home/>} />
          <Route path="/products" element={<Products/>} />
        </Routes>
    </Router>
  );
}

export default App;
