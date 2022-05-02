import React from "react";
import styled from "styled-components";
import { BsFacebook, BsInstagram, BsTwitter, BsBehance } from "react-icons/bs";

const Footer = () => {
  return (
    <Foot>
      <span>&copy; React Website Transition Animation</span>
      <div className="footer__social__icons">
        <BsFacebook />
        <BsInstagram />
        <BsTwitter />
        <BsBehance />
      </div>
    </Foot>
  );
};

const Foot = styled.footer`
  background-color: var(--primary-color);
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 10rem;
  .footer__social__icons {
    display: flex;
    gap: 2rem;
    svg {
      font-size: 1.4rem;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      &:hover {
        color: var(--secondary-color);
      }
    }
  }
`;
export default Footer;
