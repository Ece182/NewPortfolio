import { useState, useEffect } from 'react';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../App.css'; // Assuming you have a separate CSS file for Home styles

const Home = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Show content after 1.5s delay to allow title animation first
    const timer = setTimeout(() => setShowContent(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero">
      <h1 className={`hero-title ${showContent ? 'title-done' : 'title-animate'}`}>
        I'M ECE YAVUZ
      </h1>

      <div className={`hero-content ${showContent ? 'content-show' : 'content-hidden'}`}>
        <p>
          Your curious neighborhood frontend explorer and AR/VR builder.<br />
          I code, design, and dream up immersive digital experiences.<br />
          Currently blending reality and the web with HTML, CSS, JS, and React.
        </p>

        <div className="social-links">
          <a href="https://twitter.com/eyavuz_" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://github.com/Ece182" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/eceyavuz" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>

        <Link to="/about" className="see-more-btn">
          See More About Me →
        </Link>
      </div>
    </section>
  );
};

export default Home;
