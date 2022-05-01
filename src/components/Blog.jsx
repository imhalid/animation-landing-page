import React from "react";
import styled from "styled-components";
import play from "assets/play.png";
import home from "assets/home.jpg";
import Title from "./Title";

const Blog = () => {
  const blogsData = [
    {
      title: "PARLOUR JOURNAL",
      type: "SPA",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "REFELXION SKY",
      type: "Relax",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "MEDITION JOURNAL",
      type: "Yoga",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  return (
    <Section id="blog">
      <Title value="Blog" />
      <div className="blogs">
        {blogsData.map(({ title, type, description }) => {
          return (
            <div className="blog">
              <div className="image"></div>
              <div className="title">
                <h3>{title}</h3>
              </div>
              <span className="type">{type}</span>
              <div className="description">
                <p>{description}</p>
              </div>
              <div className="more">
                <img src={play} alt="play" />
                <span>Read More</span>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

const Section = styled.section`
  min-height: 100vh;
  position: relative;
  .blogs {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    margin: 5rem 15rem;
    .blog {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      .image {
        height: 15rem;
        background: url(${home}) no-repeat center center;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .title {
        h3 {
          color: var(--secondary-color);
          font-size: 1.5rem;
        }
      }
      .type {
        color: var(--primary-color);
        font-weight: bolder;
        text-transform: uppercase;
      }
      .decscription {
        height: 10rem;
        color: var(--primary-color);
      }
      .more {
        display: flex;
        align-items: center;
        gap: 1rem;
        cursor: pointer;
        span {
          letter-spacing: 0.1rem;
          color: var(--primary-color);
          text-transformation: uppercase;
        }
      }
    }
  }
`;

export default Blog;
