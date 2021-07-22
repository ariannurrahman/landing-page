import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import logo from "../../images/1-header/logo.png";

import arrow from "../../images/7-icons/arrow-right.svg";
import cancel from "../../images/7-icons/cancel.svg";
import cube from "../../images/8-mobile/mobile-rounded-001.svg";
import "./sidebar.css";
const Sidebar = (props) => {
  const LINK_LIST = ["/", "/aboutus", "/pricing", "/carrers"];
  const LINK_TEXT = ["Home", "About Us", "Pricing", "Carrers"];

  const renderLink = () => {
    return LINK_LIST.map((link, index) => {
      return (
        <Link to={link} key={index} className="text-decoration-none text-white py-2">
          {LINK_TEXT[index]}
        </Link>
      );
    });
  };

  return (
    // Pass on our props
    <div style={{ position: "relative" }} id="sidebar-container">
      <Menu
        {...props}
        customBurgerIcon={<img src={arrow} alt="arrow right menu" />}
        customCrossIcon={<img src={cancel} alt="cancel menu" />}
      >
        <img src={logo} alt="logo" />
        {renderLink()}
        <img
          src={cube}
          alt="two blue cubes"
          style={{ width: "100%", height: "100%", position: "absolute", left: "0", objectFit: "cover" }}
        />
      </Menu>
    </div>
  );
};

export default Sidebar;
