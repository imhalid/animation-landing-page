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
    .content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 60%;
      color: #fff;
      gap: 1.2rem;
      margin-top: 8rem;
      padding-left: 18rem;
      .title {
        h1 {
          font-size: 5rem;
          line-height: 5.3rem;
        }
      }
      .subTitle {
        p {
          width: 70%;
          margin-bottom: 2rem;
        }
      }
    }
  }
  .info {
    position: absolute;
    bottom: -6rem;
    right: 0;
    background-color: var(--secondary-color);
    padding: 4rem;
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 4rem;
      color: #fff;
    }
  }
`;

export default Home;
