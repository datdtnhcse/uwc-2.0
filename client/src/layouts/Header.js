import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import '../assets/styles/header.css'
import logo from "../assets/img/uwc_logo.png"


const currentEmail = localStorage.getItem("user");
function Header() {
  const handleClick = () => {
    console.log("hello")
    localStorage.removeItem("user");
    window.location.href = "/login";
  }
  if (currentEmail) {
    return (
      <Navbar expand="lg" class="navbar">
        <Container>
          <Navbar.Brand href="home">
            <img src={logo}></img>
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav" class="d-flex">
            <Nav className="me-auto">
              <Nav.Link href="home" class="nav-item t">Trang chủ</Nav.Link>
              <Nav.Link href="overview" class="nav-item t">Tổng quan</Nav.Link>
              <Nav.Link href="createroute" class="nav-item t">Tạo tuyến</Nav.Link>
              <Nav.Link href="assign" class="nav-item t">Phân ca</Nav.Link>
              {
                currentEmail ? <Button onClick={handleClick}>Đăng xuất</Button> : <></>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  else {
    return (
      <></>
    )
  }

}

export default Header;