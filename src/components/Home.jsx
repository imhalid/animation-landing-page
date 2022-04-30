import React from "react";
import styled from "styled-components";
import home from "assets/home.jpg";
import play from "assets/play.png";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <Section id="home">
      <Navbar />
      <div className="home">
        <div className="content">
          <div className="title">
            <h1>Blossoms Parlour</h1>
          </div>
          <div className="subTitle">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              labore fugiat voluptatibus nulla tempore pariatur minima! Adipisci
              eaque dolorum officia.
            </p>
          </div>
          <img src={play} alt="play" />
        </div>
        <div className="info">
          <div className="grid">
            <div className="col">
              <strong>Parlour</strong>
              <p>Blossoms Academy</p>
            </div>
            <div className="col">
              <strong>Email</strong>
              <p>parlour@blossoms.com</p>
            </div>
            <div className="col">
              <strong>Mobile</strong>
              <p>+1 214 819 3017</p>
            </div>
            <div className="col">
              <strong>Adress</strong>
              <p>233, New York</p>
            </div>
            <div className="col">
              <strong>Sparking</strong>
              <p>SPA</p>
            </div>
            <div className="col">
              <strong>Working Hours</strong>
              <p>08:00 to 12:00</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

const Section = styled.section`
  background: url(${home}) no-repeat center;
  min-height: 100vh;
  background-size: cover;
  position: relative;
  .home {
    height: 100%;
  }
`;

export default Home;
