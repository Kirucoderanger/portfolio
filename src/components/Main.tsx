import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import mock11 from '../assets/images/kirubel1.jpg';
function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
        <img src={mock11} className="zoom" alt="avatar" width="100%"/>
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Kirucoderanger" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/kirubel-mekonen-251296b5/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Kirubel Mekonen</h1>
          <p>Full Stack Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Kirucoderanger" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/kirubel-mekonen-251296b5/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;