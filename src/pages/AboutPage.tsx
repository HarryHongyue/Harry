import React from 'react';
import About from './About';
import Skills from './Skills';

const AboutPage: React.FC = () => (
  <>
    <section className="page-hero">
      <div className="container">
        <div className="page-eyebrow">About</div>
        <h1>Harry Hongyue</h1>
        <p className="page-lead">
          Software developer focused on practical web apps, document processing, desktop tools,
          and maintainable deployment workflows.
        </p>
      </div>
    </section>
    <About />
    <Skills />
  </>
);

export default AboutPage;
