import CustomNav from "./Navbar";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const { Brand, Collapse, Toggle } = Navbar;

const Header = () => {
  return (
    <>
      <Navbar
        className="containerNavbar"
        as="header"
        expand="md"
        bg="dark"
        variant="dark"
      >
        <Container fluid={true}>
          <Brand>
            <Link className="navbar-brand brand" to="/">
              Beauty
            </Link>
          </Brand>
          <Toggle />
          <Collapse>
            <CustomNav />
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
