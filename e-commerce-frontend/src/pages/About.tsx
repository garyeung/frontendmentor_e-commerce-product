import React from 'react';

const About: React.FC = () => {
  return (
    <div style={
      {
        margin: "16px"
      }
    }>
      <h2 style={{
        marginBottom: "8px"
      }}>About This Project</h2>
      <p>This is a front-end e-commerce product page demo built with React.</p>
      <p>It's a solution to a Frontendmentor.io <a href='https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6' target='_blank'>challenge</a>, showcasing responsive design, component-based architecture, and basic state management.</p>
      <br/>
      <br/>
      <h3 style={{
        marginBottom: "8px"
      }}>About Me</h3>
      <p>I am Gary Yeung, a web developer with a passion for web technology.</p>
    </div>
  );
};

export default About;