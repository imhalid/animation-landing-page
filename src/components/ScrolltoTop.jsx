import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { FaChevronUp } from "react-icons/fa";

const ScrolltoTop = () => {
  const [visible, setVisible] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <Div>
      <a href="#" className={`${visible ? "block" : "none"}`}>
        <FaChevronUp />
      </a>
    </Div>
  );
};

const Div = styled.div`
  max-width: 100vw;
  .none {
    display: none;
  }
  a {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    background-color: var(--secondary-color);
    padding: 1rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    transition: 0.3s ease-in-out;
    svg {
      color: #fff;
      font-size: 1.3rem;
    }
  }
`;
export default ScrolltoTop;
