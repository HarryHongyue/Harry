import React from 'react';
import Contact from './Contact';

const ContactPage: React.FC = () => (
  <>
    <section className="page-hero">
      <div className="container">
        <div className="page-eyebrow">Contact</div>
        <h1>Get in touch</h1>
        <p className="page-lead">
          For project collaboration, deployment questions, or release planning, use the contact links below.
        </p>
      </div>
    </section>
    <Contact />
  </>
);

export default ContactPage;
