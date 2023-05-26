import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer--slogan">
        <h3 style={{ color: '#fff' }}>Ecommerce.</h3>
        <p>We Provide you the best Quality Products.</p>
      </div>
      <div className="footer--services">
        <h3 style={{ color: '#fff' }}>Services</h3>
        <ul className="services--list">
          <li>
            <Link to="/register" className="footer--links">
              Register
            </Link>
          </li>
          <li>
            <Link to="/profile" className="footer--links">
              Profile
            </Link>
          </li>
          <li>
            <Link to="/about" className="footer--links">
              About Us
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer--email">
        <label style={{ fontSize: '10px' }}>Subscribe to Newsletter</label>
        <input
          name="email"
          type="text"
          placeholder="Email"
          className="input--email"
          style={{
            marginBottom: '6px',
          }}
        />
        <br />
        <button>Subcribe</button>
      </div>
    </div>
  );
}
