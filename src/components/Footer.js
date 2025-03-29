import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterest, FaMapMarkerAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: #1a365d;
  color: #fff;
  padding: 4rem calc((100vw - 1200px) / 2);

  @media (max-width: 1200px) {
    padding: 4rem 2rem;
  }

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;
  }

  a {
    color: #4299e1;
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: #63b3ed;
    }
  }
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 2rem;

  @media (max-width: 1024px) {
    gap: 1.5rem;
    padding: 1.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 1rem 0;
  }
`;

const FooterSection = styled.div`
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: #fff;
    position: relative;

    @media (max-width: 768px) {
      font-size: 1.3rem;
      margin-bottom: 1.2rem;
    }
  }
`;

const AboutSection = styled(FooterSection)`
  p {
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 1rem;
    line-height: 1.6;
    font-size: 0.95rem;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`;

const RecentPostsSection = styled(FooterSection)`
  .post {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
    
    img {
      width: 60px;
      height: 60px;
      object-fit: cover;
      border-radius: 4px;

      @media (max-width: 768px) {
        width: 50px;
        height: 50px;
      }
    }

    .post-info {
      flex: 1;
      
      h4 {
        font-size: 1rem;
        margin-bottom: 0.25rem;
        color: #fff;

        @media (max-width: 768px) {
          font-size: 0.95rem;
        }
      }

      p {
        font-size: 0.9rem;
        color: rgba(255, 255, 255, 0.7);

        @media (max-width: 768px) {
          font-size: 0.85rem;
        }
      }
    }
  }
`;

const ContactSection = styled(FooterSection)`
  p {
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 1.2rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 0.95rem;
    transition: all 0.3s ease;
    padding: 0.5rem;
    border-radius: 8px;
    
    &:hover {
      background: rgba(255, 255, 255, 0.1);
      transform: translateX(5px);
    }

    @media (max-width: 768px) {
      font-size: 0.9rem;
      gap: 0.8rem;
      margin-bottom: 1rem;
    }
  }

  h3 {
    position: relative;
    padding-bottom: 1rem;
    margin-bottom: 2rem;
    
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 50px;
      height: 3px;
      background: #4299e1;
      border-radius: 2px;
    }

    @media (max-width: 768px) {
      margin-bottom: 1.5rem;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    margin-top: 1.5rem;
    gap: 0.8rem;
  }

  a {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 1.2rem;
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.1);

    @media (max-width: 768px) {
      width: 40px;
      height: 40px;
      font-size: 1.1rem;
    }

    &:hover {
      background: #4299e1;
      transform: translateY(-3px);
      box-shadow: 0 5px 15px rgba(66, 153, 225, 0.3);
      border-color: #4299e1;
    }
  }
`;

const ContactIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  background: rgba(66, 153, 225, 0.2);
  border-radius: 8px;
  color: #4299e1;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    font-size: 0.9rem;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterGrid>
        <AboutSection>
          <h3>About Brivona</h3>
          <p>
            Our Clinic has grown to provide a world class facility for the treatment of tooth loss,
            dental cosmetics and advanced restorative dentistry.
          </p>
          <p>
            <strong>Call for free:</strong> +123-456-7890
          </p>
        </AboutSection>

        <RecentPostsSection>
          <h3>Recent Posts</h3>
          <div className="post">
            <img 
              src="https://images.unsplash.com/photo-1584467735815-f778f274e296?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
              alt="Adding Milk to Tea" 
            />
            <div className="post-info">
              <h4>Adding Milk to Tea Destroys its Antixidants</h4>
              <p>November 26, 2018</p>
            </div>
          </div>
          <div className="post">
            <img 
              src="https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
              alt="Fast Food" 
            />
            <div className="post-info">
              <h4>Good Reasons to Break the Fast-Food Habit</h4>
              <p>November 23, 2018</p>
            </div>
          </div>
        </RecentPostsSection>

        <ContactSection>
          <h3>Contact Us</h3>
          <p>
            <ContactIcon>
              <FaMapMarkerAlt />
            </ContactIcon>
            11 Redwood Road Lorton, VA 22079
          </p>
          <p>
            <ContactIcon>
              <FaEnvelope />
            </ContactIcon>
            info@domainname.com
          </p>
          <p>
            <ContactIcon>
              <FaClock />
            </ContactIcon>
            9.00am to 6.00pm (Mon_Sat)
          </p>
          <SocialLinks>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
              <FaPinterest />
            </a>
          </SocialLinks>
        </ContactSection>

        <FooterSection>
          <h3>Recent Posts</h3>
          <div className="post">
            <img 
              src="https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
              alt="Exercise" 
            />
            <div className="post-info">
              <h4>For Weight Loss, Less Exercise May be More</h4>
              <p>November 22, 2018</p>
            </div>
          </div>
        </FooterSection>
      </FooterGrid>
    </FooterContainer>
  );
};

export default Footer;