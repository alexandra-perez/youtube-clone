import { Link } from 'react-router-dom';
import gitHubIcon from '../../assets/github.png';
import linkedinIcon from '../../assets/linkedin.png';
import emailIcon from '../../assets/email.png';
import './About.scss';

export default function About() {
  return (
    <div className="About">
      <div className="cards">
        <div className="card">
          <img
            src="https://ca.slack-edge.com/TCVA3PF24-U064W18C1MW-62029d1b87ef-512"
            alt="Ayyoub Belibel"
          />
          <h1>Ayyoub Belibel</h1>
          <h2>Full Stack Developer</h2>
          <div className="icons">
            <a
              href="https://github.com/ayoublos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={gitHubIcon} className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/ayyoub-belibel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedinIcon} className="icon" />
            </a>
            <a href={`mailto:${'abelibel@pursuit.org'}`}>
              <img src={emailIcon} className="icon" />
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src="https://ca.slack-edge.com/TCVA3PF24-U0646TW264B-dde2addf28b2-512"
            alt="Alexandra Perez"
          />
          <h1>Alexandra Perez</h1>
          <h2>Full Stack Developer</h2>
          <div className="icons">
            <a
              href="https://github.com/alexandra-perez"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={gitHubIcon} className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/ap-alexandraperez/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedinIcon} className="icon" />
            </a>
            <a href={`mailto:${'aperez@pursuit.org'}`}>
              <img src={emailIcon} className="icon" />
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src="https://ca.slack-edge.com/TCVA3PF24-U063SF9SP2T-604f7cd88eb9-512"
            alt="Runquan (Ray) Zhou"
          />
          <h1>Runquan (Ray) Zhou</h1>
          <h2>Full Stack Developer</h2>
          <div className="icons">
            <a
              href="https://github.com/runquan-ray-zhou"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={gitHubIcon} className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/runquanrayzhou/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedinIcon} className="icon" />
            </a>
            <a href={`mailto:${'rzhou@pursuit.org'}`}>
              <img src={emailIcon} className="icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="summary">
        <Link to="/">
          <h3>YouTube Clone</h3>
        </Link>
          <p>
            Built with React, React Router, Sass, mockAPI, and the Google
            YouTube Data API v3
          </p>
      </div>
    </div>
  );
}
