import React from 'react';
import './App.css';
import logo from './logo.jpg';
import myImage from './portfolio.jpg';

const Preethi = () => {
  return (
    <div >
       <nav className="navbar">
       <div className="navbar-brand">
          <img src={logo} alt="Logo" className="logo" /> {/* Display your logo */}
          <span className="brand-text">Portfolio</span> {/* Display your brand text */}
        </div>
        <button className="nav-button" onClick={() => window.location.href='#home'}>Home</button>
        <button className="nav-button" onClick={() => window.location.href='#about'}>About</button>
        <button className="nav-button" onClick={() => window.location.href='#contact'}>Contact</button>
        <button className="nav-button" onClick={() => window.location.href='#skills'}>Skills</button>
      </nav>
      <div id="home" className="section">
      <img src={myImage} alt="Description of the image" />
        <h1>Welcome to My Portfolio!</h1>
        <p>Hello, I'm Preethi, a passionate MERN Stack Developer. I love building web applications and exploring new technologies.</p>
        <p >Feel free to explore my portfolio and get to know more about my skills and projects.</p>
      </div>
      <div id="about" className="section">
      <h1 style={{'fontSize':'60px'}}> About Me <i class="fa fa-user" aria-hidden="true"></i></h1>
          <p>Hello! I'm Preethi, a passionate MERN Stack Developer. </p>
          <p >Collaboration and communication are at the core of my work ethic. I enjoy working in diverse teams, learning from others, and sharing my knowledge. Let's connect and explore how we can create something amazing together!</p>
</div>
      <div id="contact" className="section">
        <h1 style={{'fontSize':'60px'}}>Contact Me</h1>
        <div className="contact-icons">
          <a href="mailto:preethisettu2004@gmail.com"><i className="fas fa-envelope"></i></a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
          <a href="https://www.instagram.com/preethi_settu" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          <a href="tel:+9345334672"><i className="fas fa-phone-alt"></i> </a>
        </div>
      </div>
      <div id="skills" className="section">
        <h1 style={{'fontSize':'60px','color':'white'}}>My Skills <i class="fa fa-cogs" aria-hidden="true"></i></h1>
        <ul>
          <li>React.js</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB</li>
          <li>JavaScript </li>
          <li>HTML & CSS</li>
          <li>RESTful APIs</li>
          <li>Git & Version Control</li>
          <li>Database Design</li>
        </ul>
      </div>
    </div>
  );
}

export default Preethi;
