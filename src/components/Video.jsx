import React from "react";
import styled from "styled-components";

const Video = () => {
  return (
    <Section>
      <div className="background">
        <div className="video">
          <iframe
            title="video"
            width="960"
            height="515"
            src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; clipboard-write; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </Section>
  );
};

const Section = styled.section`
  background-color: #662d91aa;
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
  .video {
    z-index: 10;
  }
`;

export default Video;
