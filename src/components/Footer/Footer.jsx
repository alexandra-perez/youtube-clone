import { Link } from 'react-router-dom';
import './Footer.scss';

export default function Footer() {
  return (
    <footer className="Footer">
      <hr />
      <Link to="/">
        <h3>YouTube Clone</h3>
      </Link>
      <p>
        Built with React, React Router, Sass, mockAPI, and the Google YouTube
        Data API v3
      </p>
    </footer>
  );
}
