import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/place.png';
import mock06 from '../assets/images/picture_album.png';
import mock07 from '../assets/images/spadejs.png';
import mock08 from '../assets/images/vue3.png';
import mock09 from '../assets/images/jobbord.png';
import mock10 from '../assets/images/Inventory_Sales_tracker.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/Kirucoderanger/inventory_sales_tracker.git" target="_blank" rel="noreferrer noopener"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Kirucoderanger/inventory_sales_tracker.git" target="_blank" rel="noreferrer noopener"><h2>Inventory and Sales Tracker</h2></a>
                <p>Inventory and Sales Tracker A Python desktop application for managing inventory and tracking sales, built using Tkinter for the GUI and SQLite for data persistence. The app includes features like product search, sales and restocking entries, date filtering, and exporting reports in CSV or PDF formats</p>
            </div>
            <div className="project">
                <a href="http://byupwafricacentraljobalert.my-board.org" target="_blank" rel="noreferrer noopener"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="http://byupwafricacentraljobalert.my-board.org" target="_blank" rel="noreferrer noopener"><h2>Job Board</h2></a>
                <p>Designed, developed, and launched A sample page project for job alert board where students store A job links in the database and others search the database suitable job links by category Includes administration user control. Technology used PHP, Angular, AJAX, MySql.</p>
            </div>
            <div className="project">
                <a href="https://kirucoderanger.github.io/Vueprojects/" target="_blank" rel="noreferrer noopener"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://kirucoderanger.github.io/Vueprojects/" target="_blank" rel="noreferrer noopener"><h2>Vue3 Showcase</h2></a>
                <p>A show case page developed using Vue3 includes A To do list, Rating star with rating number, Vue 3 Simple Calculator, Animated-Double-Slider-login-Signup-Form, Animated popup.</p>
            </div>
            <div className="project">
                <a href="https://kirucoderanger.github.io/wdd131/spadeJS/" target="_blank" rel="noreferrer noopener"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://kirucoderanger.github.io/wdd131/spadeJS/" target="_blank" rel="noreferrer noopener"><h2>SpadeJS: Integrated JavaScript Learning Platform</h2></a>
                <p>A comprehensive online platform for mastering JavaScript,
                    Interactive JavaScript course and a coding playground to enhance your skills
                    The platform is designed to help users learn and practice JavaScript in an interactive and engaging way. 
                </p>



            </div>
            <div className="project">
                <a href="https://kirucoderanger.github.io/wdd131/filtered-temples.html" target="_blank" rel="noreferrer noopener"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://kirucoderanger.github.io/wdd131/filtered-temples.html" target="_blank" rel="noreferrer noopener"><h2>Responsive Picture Album</h2></a>
                <p>This is a responsive picture album with filtering picture with their description.</p>
            </div>
            <div className="project">
                <a href="https://kirucoderanger.github.io/wdd131/place.html" target="_blank" rel="noreferrer noopener"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://kirucoderanger.github.io/wdd131/place.html" target="_blank" rel="noreferrer noopener"><h2>Weather Page</h2></a>
                <p>This is A single page that can retrieve weather casts for specific places and store information on a local storage.</p>
            </div>
            
        </div>
    </div>
    );
}

export default Project;