import React from "react";
import styled from "styled-components";
import logo from "assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { mdClose } from "react-icons/md";
import { useState } from "react";

const Navbar = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  return (
    <Nav>
      <div className="brand__container">
        <a href="#home" className="brand">
          <img src={logo} alt="logo" />
        </a>
        <div className="toggle"></div>
      </div>
      <div className="links">
        <ul>
          <li className="active">
            <a href="#home">Home</a>
          </li>
          <li className="active">
            <a href="#services">Services</a>
          </li>
          <li className="active">
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className="active">
            <a href="#blog">Blog</a>
          </li>
          <li className="active">
            <a href="#skills">Skills</a>
          </li>
          <li className="active">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 0 2rem;
  color: #a2f3;
  padding-top: 2rem;
  .brand_container {
    margin: 0 2rem;
    .toggle {
      display: none;
    }
  }
  .links {
    ul {
      list-style-type: none;
      display: flex;
      gap: 3rem;
      .active {
        a {
          border-bottom: 0.2rem solid var(--secondery-color);
        }
      }
      li {
        a {
          color: #a23;
          text-decoration: none;
          font-weight: 400;
          font-size: 0.9rem;
          text-transform: uppercase;
          transition: all 0.3s ease-in-out;

     }
     a:hover {
            color: #a2f3;
            
          }
  }
`;

export default Navbar;
