import React, { useState } from 'react';

/**
 * Contact section component
 * Provides a contact form and contact information
 */
const Contact: React.FC = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  // Form submission status
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  
  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus({
        success: true,
        message: 'Thank you! Your message has been sent successfully.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Clear status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-container">
          <div className="contact-info">
            {/* Email contact item */}
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <div className="contact-item-content">
                <h4>Email</h4>
                <p>harry.ji@example.com</p>
              </div>
            </div>
            
            {/* Phone contact item */}
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <div className="contact-item-content">
                <h4>Phone</h4>
                <p>+1 (123) 456-7890</p>
              </div>
            </div>
            
            {/* Location contact item */}
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <div className="contact-item-content">
                <h4>Location</h4>
                <p>San Francisco, CA</p>
              </div>
            </div>
            
            {/* Social media links */}
            <div className="contact-item">
              <i className="fas fa-globe"></i>
              <div className="contact-item-content">
                <h4>Social Media</h4>
                <div className="social-links">
                  <a href="#" title="GitHub"><i className="fab fa-github"></i></a>
                  <a href="#" title="LinkedIn"><i className="fab fa-linkedin"></i></a>
                  <a href="#" title="Twitter"><i className="fab fa-twitter"></i></a>
                  <a href="#" title="Instagram"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact form */}
          <div className="contact-form">
            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  className="form-control" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  className="form-control" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  className="form-control" 
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  className="form-control" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn primary-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitStatus && (
                <div className={`form-status ${submitStatus.success ? 'success' : 'error'}`}>
                  {submitStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
