import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaSpinner } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const ContactContainer = styled.div`
  min-height: calc(100vh - 80px);
  padding: 4rem calc((100vw - 1200px) / 2);

  @media (max-width: 1200px) {
    padding: 4rem 2rem;
  }

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;
  }
`;

const ContactHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

const ContactTitle = styled.h1`
  font-size: 2.5rem;
  color: #1a365d;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const ContactSubtitle = styled.p`
  font-size: 1.2rem;
  color: #4a5568;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const ContactInfo = styled.div`
  background: #f7fafc;
  padding: 2rem;
  border-radius: 8px;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const InfoTitle = styled.h3`
  font-size: 1.5rem;
  color: #1a365d;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 1.2rem;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  color: #4a5568;

  svg {
    color: #4299e1;
    margin-right: 1rem;
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 1rem;
    align-items: flex-start;

    svg {
      font-size: 1.3rem;
    }
  }
`;

const InfoText = styled.div`
  h4 {
    margin: 0;
    color: #333;
    font-size: 1.1rem;
  }
  
  p {
    margin: 0.5rem 0 0;
    color: #666;
  }

  @media (max-width: 480px) {
    h4 {
      font-size: 1rem;
    }
    
    p {
      font-size: 0.9rem;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  color: #1a365d;
  font-size: 1rem;

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #4299e1;
  }

  @media (max-width: 480px) {
    padding: 0.7rem;
  }
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #4299e1;
  }

  @media (max-width: 480px) {
    min-height: 120px;
    padding: 0.7rem;
  }
`;

const MapContainer = styled.div`
  width: 100%;
  height: 600px;
  position: relative;
  margin: 2rem 0;

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }

  @media (max-width: 768px) {
    height: 400px;
  }

  @media (max-width: 480px) {
    height: 300px;
  }
`;

const ContactSection = styled.section`
  padding: 4rem calc((100vw - 1200px) / 2);
  background: white;

  @media (max-width: 1200px) {
    padding: 3rem 2rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const LocationInfo = styled.div`
  padding: 2rem;
  background: #f7fafc;
  border-radius: 8px;
  margin-top: 4rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
    margin-top: 3rem;
  }
`;

const InfoDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const StatusMessage = styled(motion.div)`
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 1rem;
  text-align: center;
  
  ${({ type }) => type === 'success' && `
    background: #f0fff4;
    color: #48bb78;
  `}
  
  ${({ type }) => type === 'error' && `
    background: #fff5f5;
    color: #e53e3e;
  `}

  @media (max-width: 480px) {
    padding: 0.8rem;
    font-size: 0.9rem;
  }
`;

const LoadingSpinner = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  svg {
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const SubmitButton = styled(motion.button)`
  background: #48CAC9;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  transition: background 0.3s;

  &:hover {
    background: #3bb3b2;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    padding: 0.9rem 1.5rem;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const templateParams = {
        to_email: 'mossawer786@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        reply_to: formData.email
      };

      await emailjs.send(
        'service_khbtwti',
        'template_rw6gfe3',
        templateParams
      );

      setStatus({
        type: 'success',
        message: 'Thank you for your message. We will contact you soon!'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Email sending error:', error);
      setStatus({
        type: 'error',
        message: 'There was an error sending your message. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <ContactContainer>
      <ContactHeader>
        <ContactTitle>Get in Touch</ContactTitle>
        <ContactSubtitle>
          We're here to help! Send us a message or visit our facility.
        </ContactSubtitle>
      </ContactHeader>

      <ContactSection>
        <ContactGrid>
          <ContactInfo>
            <InfoTitle>Contact Information</InfoTitle>
            <InfoItem>
              <FaPhone />
              <InfoText>
                <h4>Phone</h4>
                <p>+1 234 567 8900</p>
              </InfoText>
            </InfoItem>
            <InfoItem>
              <FaEnvelope />
              <InfoText>
                <h4>Email</h4>
                <p>mossawer786@gmail.com</p>
              </InfoText>
            </InfoItem>
            <InfoItem>
              <FaMapMarkerAlt />
              <InfoText>
                <h4>Location</h4>
                <p>123 Hospital Street, City, Country</p>
              </InfoText>
            </InfoItem>
            <InfoItem>
              <FaClock />
              <InfoText>
                <h4>Working Hours:</h4>
                <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
              </InfoText>
            </InfoItem>
          </ContactInfo>

          <Form onSubmit={handleSubmit}>
            {status.message && (
              <StatusMessage
                type={status.type}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                {status.message}
              </StatusMessage>
            )}

            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="subject">Subject</Label>
              <Input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            <SubmitButton
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {loading ? (
                <LoadingSpinner>
                  <FaSpinner /> Sending...
                </LoadingSpinner>
              ) : (
                'Send Message'
              )}
            </SubmitButton>
          </Form>
        </ContactGrid>

        <MapContainer>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14613.611778502038!2d86.92361398715818!3d23.6973005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f71f07fe9b4c05%3A0x176156dd6a430129!2sJeevan%20Aarogya%20Nursing%20home!5e0!3m2!1sen!2sin!4v1743156396489!5m2!1sen!2sin"
            title="Hospital Location"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </MapContainer>
      </ContactSection>

      <LocationInfo>
        <InfoTitle>Visit Our Location</InfoTitle>
        <InfoText>Find us at our state-of-the-art facility:</InfoText>
        <InfoDetails>
          <InfoItem>
            <FaMapMarkerAlt />
            <span>123 Healthcare Ave, Medical District</span>
          </InfoItem>
          <InfoItem>
            <FaPhone />
            <span>+1 234 567 8900</span>
          </InfoItem>
          <InfoItem>
            <FaClock />
            <span>Mon - Sat: 9:00 AM - 8:00 PM</span>
          </InfoItem>
        </InfoDetails>
      </LocationInfo>
    </ContactContainer>
  );
};

export default Contact;