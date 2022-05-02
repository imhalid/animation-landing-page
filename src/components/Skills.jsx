import styled from "styled-components";
import Title from "./Title";

const Skills = () => {
  const skillsData = [
    {
      name: "HTML5",
      level: "90",
    },
    {
      name: "CSS3",
      level: "79",
    },
    {
      name: "JavaScript",
      level: "90",
    },
    {
      name: "React",
      level: "92",
    },
    {
      name: "Redux",
      level: "67",
    },
    {
      name: "Node.js",
      level: "90",
    },
    {
      name: "Express",
      level: "90",
    },
  ];

  return (
    <Section id="skills">
      <Title value="skills" />
      <div className="skills__title">
        <p>Our Skills</p>
        <h2>Check our awesome</h2>
      </div>
      <div className="skills">
        <div className="skills__bars">
          {skillsData.map(({ name, level }, index) => {
            return (
              <div className="skills__bar__bar" key={index}>
                <div className="container">
                  <progress value={level} max="100"></progress>
                  <span>{name}</span>
                </div>
                <h3>{level}</h3>
              </div>
            );
          })}
        </div>
        <div className="skills__content">
          <p className="title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            quisquam.
          </p>
        </div>
      </div>
    </Section>
  );
};

const Section = styled.section`
  min-height: 100vh;
  height: 140vh;
  background-color: var(--secondary-color);

  .sideTitle {
    h1 {
      color: #fff;
      font-size: 9rem;
      z-index: 2;
    }
  }
  .skills__title {
    padding: 6rem 10rem;
    p {
      text-transform: uppercase;
      letter-spacing: 0.2rem;
      color: var(--primary-color);
    }
    h2 {
      color: #fff;
      font-size: 2rem;
    }
  }
`;

export default Skills;
