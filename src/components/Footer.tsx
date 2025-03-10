import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/Kirucoderanger" target="_blank" rel="noopener noreferrer" title="GitHub Profile"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/kirubel-mekonen-251296b5/" target="_blank" rel="noopener noreferrer" title="LinkedIn Profile"><LinkedInIcon/></a>
      </div>
      <p>A portfolio designed & built by <a href="https://kirucoderanger.github.io/portfolio/" target="_blank" rel="noopener noreferrer">Kirubel Mekonen</a> with 💜</p>
    </footer>
  );
}

export default Footer;