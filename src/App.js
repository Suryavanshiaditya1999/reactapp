import React from "react";
import "./style.css";

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Welcome to My Demo React App</h1>
        <nav className="app-nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main className="app-content">
        <section id="home" className="app-section">
          <h2>Home</h2>
          <p>
            Welcome to our demo application! We provide a variety of services to
            help you succeed in your business.
          </p>
        </section>
        <section id="about" className="app-section">
          <h2>About Us</h2>
          <p>
            We are a team of dedicated professionals committed to delivering the
            best solutions for your needs.
          </p>
        </section>
        <section id="services" className="app-section">
          <h2>Our Services</h2>
          <ul>
            <li>Web Development</li>
            <li>Mobile App Development</li>
            <li>UI/UX Design</li>
            <li>Digital Marketing</li>
          </ul>
        </section>
        <section id="contact" className="app-section">
          <h2>Contact Us</h2>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button type="submit" className="primary-button">
              Send Message
            </button>
          </form>
        </section>
      </main>
      <footer className="app-footer">
        <p>&copy; 2024 My Demo App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
