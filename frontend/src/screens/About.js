import React from 'react';
import './about.css';
import about from '../../src/images/About-us.jpg';

const About = () => {
  return (
    <div className="about-component">
      <div className="about">
        <h2 className="about-heading" style={{ color: '#1c92d2' }}>
          About Us
        </h2>
        <p className="about-description">
          Welcome to our online store! We are passionate about providing high-quality products and
          exceptional customer service to enhance your shopping experience. At our ecommerce site,
          we carefully curate a wide range of products to cater to your diverse needs. From trendy
          fashion apparel and accessories to state-of-the-art electronics, we have something for
          everyone. Our team of dedicated professionals strives to ensure that every product we
          offer meets the highest standards of quality. We work directly with trusted manufacturers
          and suppliers to source authentic and reliable products.
          <br />
          <hr
            style={{
              marginTop: '20px',
              width: '50%',
              marginLeft: '25%',
              backgroundColor: '#1c92d2',
            }}
          />
        </p>
      </div>
      <div className="about--img">
        <img src={about} alt="About" />
      </div>
    </div>
  );
};

export default About;
