import { Link } from "react-router-dom";
import { Navbar, Nav, NavbarBrand, NavItem, Form } from "reactstrap";
import logo from "../../images/1-header/logo.png";
import search from "../../images/7-icons/search.svg";
import Sidebar from "./Sidebar";
import "./header.css";
const Header = () => {
  const LINK_LIST = ["/", "/aboutus", "/services", "/pricing", "/carrers"];
  const LINK_TEXT = ["Home", "About Us", "Services", "Pricing", "Carrers"];

  const renderLink = () => {
    return LINK_LIST.map((link, index) => {
      return (
        <Link to={link} key={index} className="text-decoration-none text-white px-4">
          {LINK_TEXT[index]}
        </Link>
      );
    });
  };
  return (
    <>
      <Navbar id="header-container" className="pt-5">
        <div id="header-wrapper">
          <NavbarBrand href="/">
            <img src={logo} alt="logo" style={{ width: "80px" }} />
          </NavbarBrand>
          <Nav>
            <NavItem>{renderLink()}</NavItem>
          </Nav>
          <Form>
            <img src={search} alt="lup search" />
          </Form>
        </div>
        <img src={logo} alt="logo" id="logo-mobile" />
      </Navbar>
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"header-container"} />
    </>
  );
};

export default Header;
