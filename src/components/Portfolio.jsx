import React from 'react';
import './Portfolio.css';
const Portfolio = () => {
  return (
    <div className="portfolio-wrapper">
      <nav>
        <div className="logo">JC.Dev</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#reflection">Reflection</a></li>
        </ul>
      </nav>

      <main>
        <section id="about">
          <h2>About Me</h2>
          <div className="profile-container">
            <img 
              src="./image.png" 
              alt="Justin Cortuna" 
              className="profile-img" 
            />
            <div className="intro-text">
              <h1>Hi, I'm Justin Cortuna</h1>
              <p className="subtitle">Aspiring Backend Developer</p>
              <p>
                I am a passionate developer focused on building the robust "brains" 
                behind web applications. I love solving complex architectural 
                problems and ensuring data flows seamlessly between the server and the user.
              </p>
              
              <h3>Interests & Goals</h3>
              <p>
                My primary interest lies in <strong>Backend Development</strong> and 
                system architecture. My goal is to master scalable cloud 
                infrastructures and contribute to large-scale open-source projects.
              </p>
              
              <h3>Biggest Accomplishment</h3>
              <p>
                Successfully designing and deploying a secure database management 
                system that handled high-concurrency requests during my academic capstone.
              </p>
            </div>
          </div>
        </section>

        <section id="skills">
          <h2>Technical Skills</h2>
          <div className="grid-container">
            <div className="card">
              <h3>Programming Languages</h3>
              <p>PHP, JavaScript (ES6+), Python, SQL</p>
            </div>
            <div className="card">
              <h3>Tools & Frameworks</h3>
              <p>Node.js, Express, Laravel, MySQL, Git, Postman</p>
            </div>
            <div className="card">
              <h3>Platforms</h3>
              <p>AWS, Heroku, Docker</p>
            </div>
          </div>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <div className="grid-container">
            <div className="card">
              <h3>Inventory Management System</h3>
              <p>
                A web-based system to track stock levels and generate 
                automated monthly reports.
              </p>
              <p><strong>Role:</strong> Full-stack Developer</p>
              <div className="tags">
                <span className="tag">PHP</span>
                <span className="tag">MySQL</span>
                <span className="tag">Bootstrap</span>
              </div>
            </div>
          </div>
        </section>

        <section id="reflection">
          <h2>Reflection</h2>
          <div className="reflection-content">
            <h3>What concepts have you learned in Full-stack development and React.js?</h3>
            <p>
              I've gained a solid understanding of component-based architecture, 
              state management using Hooks, and how to effectively bridge the gap 
              between a frontend UI and a RESTful API. I've also learned the 
              importance of responsive design and asynchronous data fetching.
            </p>
            
            <h3>What concepts do you still want to learn further?</h3>
            <p>
              I am eager to dive deeper into Microservices architecture and 
              Kubernetes for container orchestration. Additionally, I want to 
              explore advanced GraphQL implementation and server-side rendering (SSR) 
              to optimize application performance.
            </p>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 Justin Cortuna. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;