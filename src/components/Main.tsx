import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import kirubel1 from '../assets/images/kirubel1.jpg';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
        <img src={kirubel1} className="zoom" alt="thumbnail" width="100%"/>
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://kirucoderanger.github.io/portfolio/" target="_blank" rel="noopener noreferrer" title="GitHub Profile"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/kirubel-mekonen-251296b5" target="_blank" rel="noopener noreferrer" title="LinkedIn Profile"><LinkedInIcon/></a>
          </div>
          <h1>Kirubel Mekonen</h1>
          <p>Full Stack Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/yujisatojr" target="_blank" rel="noopener noreferrer" title="GitHub Profile"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/yujisato/" target="_blank" rel="noopener noreferrer" title="LinkedIn Profile"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;