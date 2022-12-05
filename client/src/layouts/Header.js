import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../assets/styles/header.css'
import logo from "../assets/img/uwc_logo.png"

function Header() {
  return (
    <Navbar expand="lg" class="navbar">
      <Container>
        <Navbar.Brand href="home">
          <img src={logo}></img>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav" class="d-flex">
          <Nav className="me-auto">
            <Nav.Link href="home" class="nav-item">Trang chủ</Nav.Link>
            <Nav.Link href="overview" class="nav-item">Tổng quan</Nav.Link>
            <Nav.Link href="createroute" class="nav-item">Tạo tuyến</Nav.Link>
            <Nav.Link href="assign" class="nav-item">Phân ca</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;