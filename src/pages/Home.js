import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaUserMd, FaHospital, FaAmbulance, FaCheckSquare, FaHeartbeat, FaStethoscope, FaNotesMedical, FaClinicMedical, FaStar, FaCalendarAlt, FaUserAlt, FaEnvelope, FaSpinner, FaBaby, FaHandHoldingMedical, FaHeart } from 'react-icons/fa';

// Initialize EmailJS with your public key
emailjs.init("Fe7blSIlNmvyWnTtb");

const HomeContainer = styled.div`
  min-height: 100vh;
  overflow-x: hidden;
  width: 100%;
`;

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  min-height: 600px;
  background: linear-gradient(rgba(26, 54, 93, 0.8), rgba(26, 54, 93, 0.8)),
    url('/images/home/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  overflow: hidden;
  padding: 0 20px;

  @media (max-width: 768px) {
    height: auto;
    padding: 100px 20px;
  }
`;

const HeroContent = styled.div`
  color: #fff;
  padding: 0 calc((100vw - 1200px) / 2);
  width: 100%;
  position: relative;
  z-index: 2;

  @media (max-width: 1200px) {
    padding: 0 2rem;
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;



const HeroTitle = styled.h1`
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin-bottom: 1.5rem;
  line-height: 1.2;
  font-weight: 700;
  
  span {
    color: #48CAC9;
    display: block;
    font-size: clamp(1rem, 2vw, 1.2rem);
    margin-bottom: 1rem;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  @media (max-width: 480px) {
    font-size: 2.2rem;
  }
`;

const HeroText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    max-width: 300px;
    margin: 0 auto;
  }
`;

const ButtonBase = styled.button`
  padding: 1rem 2rem;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: auto;

  svg {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
    width: 100%;
  }
`;

const PrimaryButton = styled(ButtonBase)`
  background: #48CAC9;
  color: #fff;
  border: none;

  &:hover {
    background: #3bb3b2;
    transform: translateY(-2px);
  }
`;

const SecondaryButton = styled(ButtonBase)`
  background: transparent;
  border: 1px solid #fff;
  color: #fff;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: #48CAC9;
  }
`;

const StatsOverlay = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
  animation: fadeIn 1s ease 1s forwards;
  opacity: 0;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    position: relative;
    bottom: 0;
    background: rgba(26, 54, 93, 0.9);
    margin-top: 2rem;
    gap: 1rem;
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    gap: 1rem;
  }
`;

const StatItem = styled.div`
  text-align: center;
  color: #fff;
  flex: 1;
  min-width: 150px;
  padding: 1rem;

  @media (max-width: 768px) {
    min-width: 120px;
    padding: 0.5rem;
  }

  @media (max-width: 480px) {
    min-width: calc(50% - 1rem);
  }

  h3 {
    font-size: clamp(1.8rem, 3vw, 2.5rem);
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: #48CAC9;
  }

  p {
    font-size: clamp(0.9rem, 1.5vw, 1rem);
    opacity: 0.9;
  }
`;

const HospitalSection = styled.section`
  padding: 4rem calc((100vw - 1200px) / 2);
  background: #f8fafc;
  position: relative;
  overflow: hidden;

  @media (max-width: 1200px) {
    padding: 4rem 2rem;
  }

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 300px;
    height: 300px;
    background: linear-gradient(135deg, #48CAC9 0%, #1a365d 100%);
    opacity: 0.1;
    border-radius: 50%;
    transform: translate(100px, -100px);

    @media (max-width: 768px) {
      width: 200px;
      height: 200px;
    }
  }
`;

const HospitalContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 1024px) {
    gap: 3rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`;

const HospitalContent = styled.div`
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: translateY(${props => props.isVisible ? '0' : '30px'});
  transition: all 0.8s ease-out;

  @media (max-width: 768px) {
    order: 2;
  }
`;

const HospitalTitle = styled.h2`
  font-size: 2.8rem;
  color: #1a365d;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  position: relative;

  @media (max-width: 1024px) {
    font-size: 2.4rem;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 80px;
    height: 4px;
    background: #48CAC9;

    @media (max-width: 768px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const HospitalText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #4a5568;
  margin-bottom: 2rem;
  max-width: 600px;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin: 0 auto 2rem;
  }
`;

const HospitalImageWrapper = styled.div`
  position: relative;
  height: 500px;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);

  @media (max-width: 1024px) {
    height: 400px;
  }

  @media (max-width: 768px) {
    height: 300px;
    order: 1;
  }
`;

const HospitalImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const HospitalFeatures = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: 768px) {
    max-width: 500px;
    margin: 0 auto;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
  }

  svg {
    font-size: 1.8rem;
    color: #48CAC9;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const FeatureText = styled.div`
  h4 {
    color: #1a365d;
    font-size: 1.1rem;
    margin-bottom: 0.25rem;
  }

  p {
    color: #718096;
    font-size: 0.9rem;
  }
`;

const ServicesSection = styled.section`
  padding: 6rem calc((100vw - 1200px) / 2);
  background: #f8fafc;
  scroll-margin-top: 80px;

  @media (max-width: 1200px) {
    padding: 4rem 2rem;
  }

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #1a365d;
  text-align: center;
  margin-bottom: 3rem;
  position: relative;

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 2rem;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: #48CAC9;
    border-radius: 2px;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 500px;
  }
`;

const ServiceCard = styled(motion.div)`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ServiceImage = styled.div`
  width: 100%;
  height: 200px;
  background: url(${props => props.image}) center/cover no-repeat;
`;

const ServiceContent = styled.div`
  padding: 1.5rem;

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const ServiceIcon = styled.div`
  font-size: 2.5rem;
  color: #48CAC9;
  margin-bottom: 1.5rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  color: #1a365d;
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const ServiceDescription = styled.p`
  color: #4a5568;
  line-height: 1.6;
  font-size: 1rem;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const FeaturesSection = styled.section`
  padding: 6rem calc((100vw - 1200px) / 2);
  background: white;

  @media (max-width: 1200px) {
    padding: 4rem 2rem;
  }

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const FeatureTitle = styled.h2`
  font-size: 2.5rem;
  color: #1a365d;
  text-align: center;
  margin-bottom: 3rem;
  position: relative;

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 2rem;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: #48CAC9;
    border-radius: 2px;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const FeaturesCard = styled.div`
  background: #f8fafc;
  padding: 2rem;
  border-radius: 10px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  color: #48CAC9;
  margin-bottom: 1.5rem;
`;

const FeatureHeading = styled.h3`
  font-size: 1.5rem;
  color: #1a365d;
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const FeaturesText = styled.p`
  color: #4a5568;
  line-height: 1.6;
  font-size: 1rem;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;





const AuthorInfo = styled.div`
  h4 {
    color: #1a365d;
    font-size: 1.1rem;
    margin-bottom: 0.25rem;
  }

  p {
    color: #48CAC9;
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    h4 {
      font-size: 1rem;
    }
    p {
      font-size: 0.8rem;
    }
  }
`;


const ContactSection = styled.section`
  padding: 6rem calc((100vw - 1200px) / 2);
  background: white;
  display: flex;
  align-items: stretch;
  gap: 4rem;

  @media (max-width: 1200px) {
    padding: 4rem 2rem;
    gap: 3rem;
  }

  @media (max-width: 768px) {
    padding: 3rem 1rem;
    flex-direction: column;
    gap: 2rem;
  }
`;

const ContactImage = styled.div`
  flex: 1;
  background-image: url('https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  min-height: 300px;

  @media (max-width: 768px) {
    min-height: 250px;
    width: 100%;
  }
`;

const ContactFormContainer = styled.div`
  flex: 1;
`;

const ContactTitle = styled.h2`
  font-size: 2.8rem;
  color: #1a365d;
  margin-bottom: 1.5rem;

  @media (max-width: 1024px) {
    font-size: 2.4rem;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const ContactSubtitle = styled.p`
  color: #4a5568;
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const LoadingSpinner = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: white;
  
  svg {
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const SuccessMessage = styled(motion.div)`
  color: #48bb78;
  background: #f0fff4;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  text-align: center;
`;

const ErrorMessage = styled(motion.div)`
  color: #e53e3e;
  background: #fff5f5;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  text-align: center;
`;

const AnimatedNumber = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);
  const startTimeRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    const updateCount = (timestamp) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const progress = timestamp - startTimeRef.current;
      const percentage = Math.min(progress / duration, 1);
      const nextCount = Math.floor(end * percentage);

      if (nextCount !== countRef.current) {
        setCount(nextCount);
        countRef.current = nextCount;
      }

      if (progress < duration) {
        frameRef.current = requestAnimationFrame(updateCount);
      }
    };

    frameRef.current = requestAnimationFrame(updateCount);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [end, duration]);

  return <span>{count}</span>;
};

const StatisticsSection = styled.section`
  padding: 6rem calc((100vw - 1200px) / 2);
  background: #fff;

  @media (max-width: 1200px) {
    padding: 6rem 2rem;
  }

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const StatisticsTitle = styled.h2`
  font-size: 2.8rem;
  color: #1a365d;
  text-align: center;
  margin-bottom: 1rem;

  @media (max-width: 1024px) {
    font-size: 2.4rem;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const StatisticsSubtitle = styled.p`
  font-size: 1.2rem;
  color: #4a5568;
  text-align: center;
  max-width: 600px;
  margin: 0 auto 4rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 0 1rem;
  }
`;

const StatisticsGrid = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

const StatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const StatLabel = styled.h3`
  font-size: 1.4rem;
  color: #1a365d;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const StatValue = styled.span`
  font-size: 1.8rem;
  color: #48CAC9;
  font-weight: 600;
  min-width: 100px;
  text-align: right;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 8px;
  background: #e2e8f0;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
`;

const ProgressBar = styled.div`
  height: 100%;
  background: #48CAC9;
  border-radius: 4px;
  width: ${props => props.width}%;
  transition: width 2s ease-out;
`;

const SuccessSection = styled.section`
  padding: 6rem calc((100vw - 1200px) / 2);
  background: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 1200px) {
    padding: 4rem 2rem;
    gap: 3rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 3rem 1rem;
    gap: 2rem;
  }
`;

const SuccessContent = styled.div`
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
    order: 2;
  }
`;

const SuccessTitle = styled.h2`
  font-size: 2.8rem;
  color: #1a365d;
  margin-bottom: 1.5rem;

  @media (max-width: 1024px) {
    font-size: 2.4rem;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const SuccessText = styled.p`
  color: #4a5568;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CheckList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CheckItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #4a5568;
  font-size: 1.1rem;
  
  svg {
    color: #48CAC9;
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const StatsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }
`;

const StatBox = styled.div`
  text-align: center;

  @media (max-width: 768px) {
    text-align: left;
  }
`;

const StatNumber = styled.h3`
  font-size: 1.8rem;
  color: #48CAC9;
  font-weight: 600;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const StatText = styled.p`
  color: #4a5568;
  font-size: 1rem;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const FounderInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const FounderImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

const LogoSection = styled.section`
  padding: 4rem 0;
  background: #f8fafc;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const LogoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    padding: 0 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
    padding: 0 1rem;
  }
`;

const LogoBox = styled.div`
  text-align: center;
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  }

  h4 {
    color: #1a365d;
    font-size: 1.1rem;
    margin: 0.75rem 0 0.25rem;
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  p {
    color: #4a5568;
    font-size: 0.9rem;
    margin: 0;
    opacity: 0.8;

    @media (max-width: 768px) {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 768px) {
    padding: 1.25rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const LogoIcon = styled.div`
  font-size: 2.5rem;
  color: #48CAC9;
  margin-bottom: 0.5rem;
  transition: transform 0.3s ease;

  ${LogoBox}:hover & {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

const ReviewSection = styled.section`
  padding: 6rem 0;
  background: #f8fafc;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 200px;
    background: linear-gradient(135deg, rgba(72, 202, 201, 0.1) 0%, rgba(26, 54, 93, 0.1) 100%);
  }

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`;

const ReviewHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
  padding: 0 2rem;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

const ReviewTitle = styled.h2`
  font-size: 2.8rem;
  color: #1a365d;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;

  @media (max-width: 1024px) {
    font-size: 2.4rem;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: #48CAC9;
    border-radius: 2px;
  }
`;

const ReviewSubtitle = styled.p`
  color: #4a5568;
  font-size: 1.2rem;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const ReviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 1.5rem;
    max-width: 600px;
  }
`;

const ReviewCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '"';
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 5rem;
    color: rgba(72, 202, 201, 0.1);
    font-family: serif;
    line-height: 1;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const StarRating = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-bottom: 1.5rem;

  svg {
    color: #FFD700;
    font-size: 1.2rem;
  }
`;

const ReviewText = styled.p`
  color: #4a5568;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`;

const ReviewAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  border-top: 1px solid #e2e8f0;
  padding-top: 1.5rem;

  @media (max-width: 768px) {
    padding-top: 1rem;
  }
`;

const AuthorImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #48CAC9;
  padding: 2px;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

const SuccessImage = styled.img`
  width: 100%;
  height: 600px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);

  @media (max-width: 1024px) {
    height: 500px;
  }

  @media (max-width: 768px) {
    height: 400px;
    order: 1;
  }

  @media (max-width: 480px) {
    height: 300px;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    margin-bottom: 0.75rem;
  }
`;

const FormIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #48CAC9;
  font-size: 1.2rem;
  pointer-events: none;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: white;

  &:focus {
    outline: none;
    border-color: #48CAC9;
    box-shadow: 0 0 0 2px rgba(72, 202, 201, 0.2);
  }

  &::placeholder {
    color: #a0aec0;
  }
`;

const FormTextarea = styled(FormInput).attrs({ as: 'textarea' })`
  min-height: 150px;
  resize: vertical;
  padding: 1rem;
`;

const SubmitButton = styled(PrimaryButton)`
  width: 100%;
  margin-top: 1rem;
`;



// Define services array
const services = [
  {
    id: 1,
    title: 'Routine Gynecology',
    description: 'Comprehensive women\'s health check-ups and preventive care services.',
    icon: <FaStethoscope />,
    image: '/images/home/service1.jpg'
  },
  {
    id: 2,
    title: 'Obstetric Care',
    description: 'Expert care throughout pregnancy, childbirth, and postpartum period.',
    icon: <FaBaby />,
    image: '/images/home/service2.jpg'
  },
  {
    id: 3,
    title: 'Fertility Services',
    description: 'Advanced fertility treatments and reproductive health solutions.',
    icon: <FaHeart />,
    image: '/images/home/service3.jpg'
  },
  {
    id: 4,
    title: 'Women\'s Wellness',
    description: 'Holistic approach to women\'s health and well-being.',
    icon: <FaHandHoldingMedical />,
    image: '/images/home/service4.jpg'
  }
];

// Define doctors array
const doctors = [
  {
    id: 1,
    name: 'Dr. Sarah Williams',
    designation: 'Senior Gynecologist',
    department: 'Gynecology',
    image: '/images/home/doctor1.jpg',
    experience: '15+ Years',
    patients: '12,000+',
    rating: '4.9'
  },
  {
    id: 2,
    name: 'Dr. Emily Rodriguez',
    designation: 'Obstetrics & Gynecology',
    department: 'Gynecology',
    image: '/images/home/doctor2.jpg',
    experience: '12+ Years',
    patients: '10,000+',
    rating: '4.8'
  },
  {
    id: 3,
    name: 'Dr. Jessica Chen',
    designation: 'Reproductive Endocrinologist',
    department: 'Gynecology',
    image: '/images/home/doctor3.jpg',
    experience: '10+ Years',
    patients: '8,000+',
    rating: '4.9'
  },
  {
    id: 4,
    name: 'Dr. Maria Garcia',
    designation: 'Gynecologic Oncologist',
    department: 'Gynecology',
    image: '/images/home/doctor4.jpg',
    experience: '18+ Years',
    patients: '15,000+',
    rating: '4.9'
  }
];

// Define reviews array
const reviews = [
  {
    text: "The care and attention I received during my pregnancy was exceptional. The doctors and staff were always available to address my concerns.",
    author: "Alan Sears",
    title: "Patient",
    image: '/images/home/review1.jpg',
    rating: 5
  },
  {
    text: "I'm grateful for the fertility treatments that helped me conceive. The support and guidance throughout the process was invaluable.",
    author: "Ainela Lobster",
    title: "Patient",
    image: '/images/home/review2.jpg',
    rating: 5
  },
  {
    text: "The gynecological services are top-notch. The doctors are knowledgeable and take time to explain everything thoroughly.",
    author: "Raymon Myers",
    title: "Patient",
    image: '/images/home/review3.jpg',
    rating: 4
  },
  {
    text: "I've been coming here for years and the quality of care has always been excellent. The staff is friendly and professional.",
    author: "Sarah Chen",
    title: "Patient",
    image: '/images/home/review4.jpg',
    rating: 5
  },
  {
    text: "The prenatal care was comprehensive and reassuring. I felt well-informed and supported throughout my pregnancy.",
    author: "Michael Thompson",
    title: "Patient",
    image: '/images/home/review5.jpg',
    rating: 5
  },
  {
    text: "The fertility specialists here are amazing. Their expertise and dedication helped us achieve our dream of having a baby.",
    author: "Emma Rodriguez",
    title: "Patient",
    image: '/images/home/review6.jpg',
    rating: 5
  }
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};



const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isHospitalVisible, setIsHospitalVisible] = useState(false);
  const hospitalRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });



  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHospitalVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (hospitalRef.current) {
      observer.observe(hospitalRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
      // Create the template parameters
      const templateParams = {
        to_email: 'mossawer786@gmail.com',  // Add recipient email
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        reply_to: formData.email,
        to_name: 'Hospital Admin'  // Add recipient name
      };

      // Send the email using EmailJS
      await emailjs.send(
        'service_khbtwti',
        'template_rw6gfe3',
        templateParams
      ).then(
        (result) => {
          console.log('Email sent successfully:', result);
          setStatus({
            type: 'success',
            message: 'Thank you for booking an appointment. We will contact you soon!'
          });
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.error('Email sending error:', error);
          setStatus({
            type: 'error',
            message: 'There was an error sending your message. Please try again.'
          });
        }
      );
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

  const scrollToContact = () => {
    document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document.getElementById('services-section').scrollIntoView({ behavior: 'smooth' });
  };



 

  return (
    <HomeContainer>
      <HeroSection>
        <HeroContent>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.3
                }
              }
            }}
          >
            <motion.div variants={fadeInUp}>
              <HeroTitle>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  Specialized Women's Healthcare
                </motion.span>
                Expert Gynecological Care at Your Doorstep
              </HeroTitle>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <HeroText>
                Our state-of-the-art women's health facility combines advanced medical expertise with compassionate care. 
                We're dedicated to providing comprehensive gynecological services with a focus on your comfort and well-being.
              </HeroText>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <HeroButtons>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <PrimaryButton onClick={scrollToContact}>
                    <FaCalendarAlt /> Book Appointment
                  </PrimaryButton>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <SecondaryButton onClick={scrollToServices}>
                    <FaStethoscope /> Our Services
                  </SecondaryButton>
                </motion.div>
              </HeroButtons>
            </motion.div>
          </motion.div>
        </HeroContent>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <StatsOverlay>
            <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
              <StatItem>
                <h3>15+</h3>
                <p>Years of Excellence</p>
              </StatItem>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
              <StatItem>
                <h3>10,000+</h3>
                <p>Happy Patients</p>
              </StatItem>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
              <StatItem>
                <h3>4.9</h3>
                <p>Patient Rating</p>
              </StatItem>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
              <StatItem>
                <h3>24/7</h3>
                <p>Emergency Care</p>
              </StatItem>
            </motion.div>
          </StatsOverlay>
        </motion.div>
      </HeroSection>

      <HospitalSection ref={hospitalRef}>
        <HospitalContainer>
          <HospitalContent isVisible={isHospitalVisible}>
            <HospitalTitle>World-Class Healthcare at Your Doorstep</HospitalTitle>
            <HospitalText>
              Our state-of-the-art facility combines cutting-edge technology with compassionate care. 
              We're committed to providing exceptional medical services with a focus on patient comfort 
              and positive outcomes.
            </HospitalText>
            <HospitalFeatures>
              <FeatureCard>
                <FaUserMd />
                <FeatureText>
                  <h4>Expert Doctors</h4>
                  <p>Highly qualified specialists</p>
                </FeatureText>
              </FeatureCard>
              <FeatureCard>
                <FaHospital />
                <FeatureText>
                  <h4>Modern Facility</h4>
                  <p>Latest medical equipment</p>
                </FeatureText>
              </FeatureCard>
              <FeatureCard>
                <FaAmbulance />
                <FeatureText>
                  <h4>24/7 Emergency</h4>
                  <p>Round-the-clock care</p>
                </FeatureText>
              </FeatureCard>
              <FeatureCard>
                <FaCheckSquare />
                <FeatureText>
                  <h4>Quality Care</h4>
                  <p>Patient-centered approach</p>
                </FeatureText>
              </FeatureCard>
            </HospitalFeatures>
          </HospitalContent>
          <HospitalImageWrapper>
            <HospitalImage 
              src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Modern Hospital Facility"
            />
          </HospitalImageWrapper>
        </HospitalContainer>
      </HospitalSection>

      <ServicesSection id="services-section">
        <SectionTitle>Our Specialized Services</SectionTitle>
        <ServicesGrid>
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <ServiceImage image={service.image} />
              <ServiceContent>
                <ServiceIcon>{service.icon}</ServiceIcon>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
              </ServiceContent>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </ServicesSection>

      <FeaturesSection>
        <FeatureTitle>Why Choose Our Gynecology Center?</FeatureTitle>
        <FeaturesGrid>
          {doctors.map((doctor) => (
            <FeaturesCard key={doctor.id}>
              <FeatureIcon>
                <FaUserMd />
              </FeatureIcon>
              <FeatureHeading>{doctor.name}</FeatureHeading>
              <FeaturesText>
                {doctor.designation}
              </FeaturesText>
            </FeaturesCard>
          ))}
        </FeaturesGrid>
      </FeaturesSection>

      <StatisticsSection>
        <StatisticsTitle>Our Statistics</StatisticsTitle>
        <StatisticsSubtitle>
          Here are some statistics about our hospital and its impact on the community.
        </StatisticsSubtitle>
        <StatisticsGrid>
          <StatItem>
            <StatHeader>
              <StatLabel>Patients Treated</StatLabel>
              <StatValue>
                <AnimatedNumber end={10000} />
                +
              </StatValue>
            </StatHeader>
            <ProgressBarContainer>
              <ProgressBar width={95} />
            </ProgressBarContainer>
          </StatItem>
          <StatItem>
            <StatHeader>
              <StatLabel>Surgeries Performed</StatLabel>
              <StatValue>
                <AnimatedNumber end={5000} />
                +
              </StatValue>
            </StatHeader>
            <ProgressBarContainer>
              <ProgressBar width={85} />
            </ProgressBarContainer>
          </StatItem>
          <StatItem>
            <StatHeader>
              <StatLabel>Satisfied Patients</StatLabel>
              <StatValue>
                <AnimatedNumber end={95} />
                %
              </StatValue>
            </StatHeader>
            <ProgressBarContainer>
              <ProgressBar width={95} />
            </ProgressBarContainer>
          </StatItem>
        </StatisticsGrid>
      </StatisticsSection>

      <SuccessSection>
        <SuccessContent>
          <SuccessTitle>We have Achieve The Success Of Heart Surgery</SuccessTitle>
          <SuccessText>
            Your provider will look at all of this information and any test results to figure out your
            risk factors for heart problems. They'll also want to know if you smoke, how much you
            exercise, what you eat and which medicines you're taking.
          </SuccessText>
          
          <CheckList>
            <CheckItem>
              <FaCheckSquare /> Heart patient's care
            </CheckItem>
            <CheckItem>
              <FaCheckSquare /> Critical care cardiologist
            </CheckItem>
            <CheckItem>
              <FaCheckSquare /> Medicine & Instruments
            </CheckItem>
            <CheckItem>
              <FaCheckSquare /> Heart failure specialist
            </CheckItem>
            <CheckItem>
              <FaCheckSquare /> 100+ Expert Docto
            </CheckItem>
            <CheckItem>
              <FaCheckSquare /> 100+ Expert Surgeon
            </CheckItem>
          </CheckList>

          <StatsContainer>
            <StatBox>
              <StatNumber>100%</StatNumber>
              <StatText>Satisfaction Guarantee</StatText>
            </StatBox>
            <FounderInfo>
              <FounderImage 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
                alt="Jemilin D. William"
              />
              <AuthorInfo>
                <h4>Jemilin D. William</h4>
                <p>Chairman and founder</p>
              </AuthorInfo>
            </FounderInfo>
          </StatsContainer>
        </SuccessContent>
        
        <SuccessImage
          src="https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="Doctors Team"
        />
      </SuccessSection>

      <LogoSection>
        <LogoContainer>
          <LogoBox>
            <LogoIcon>
              <FaHeartbeat />
            </LogoIcon>
            <h4>HeartCare</h4>
            <p>your business tagline</p>
          </LogoBox>
          <LogoBox>
            <LogoIcon>
              <FaStethoscope />
            </LogoIcon>
            <h4>STETHOSCOPE</h4>
            <p>TAGLINE HERE</p>
          </LogoBox>
          <LogoBox>
            <LogoIcon>
              <FaNotesMedical />
            </LogoIcon>
            <h4>NURSE LOGO</h4>
            <p>TAGLINE HERE</p>
          </LogoBox>
          <LogoBox>
            <LogoIcon>
              <FaClinicMedical />
            </LogoIcon>
            <h4>HEALTHC</h4>
            <p>YOUR BUSINESS TAGL</p>
          </LogoBox>
          <LogoBox>
            <LogoIcon>
              <FaHeartbeat />
            </LogoIcon>
            <h4>HeartCare</h4>
            <p>your business tagline</p>
          </LogoBox>
        </LogoContainer>
      </LogoSection>

      <ReviewSection>
        <ReviewHeader>
          <ReviewTitle>Our Customers Praise Us For Our Great Results</ReviewTitle>
          <ReviewSubtitle>
            Thank you for choosing Delmont Cardiology Institute for your care. We take pride in
            helping our patients overcome injuries, relieve pain & return to active healthy lifestyles.
            Read what our patients are saying!
          </ReviewSubtitle>
        </ReviewHeader>
        <ReviewGrid>
          {reviews.map((review, index) => (
            <ReviewCard key={index}>
              <StarRating>
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </StarRating>
              <ReviewText>{review.text}</ReviewText>
              <ReviewAuthor>
                <AuthorImage src={review.image} alt={review.author} />
                <AuthorInfo>
                  <h4>{review.author}</h4>
                  <p>{review.title}</p>
                </AuthorInfo>
              </ReviewAuthor>
            </ReviewCard>
          ))}
        </ReviewGrid>
      </ReviewSection>

      <ContactSection id="contact-section">
        <ContactImage />
        <ContactFormContainer>
          <ContactTitle>Book an Appointment</ContactTitle>
          <ContactSubtitle>
            Schedule your visit with our experienced medical professionals. We're here to help you stay healthy.
          </ContactSubtitle>

          {status.message && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              {status.type === 'success' ? (
                <SuccessMessage>{status.message}</SuccessMessage>
              ) : (
                <ErrorMessage>{status.message}</ErrorMessage>
              )}
            </motion.div>
          )}

          <form onSubmit={handleSubmit}>
            <FormGroup>
              <FormIcon>
                <FaUserAlt />
              </FormIcon>
              <FormInput
                type="text"
                name="name"
                placeholder="Your Name*"
                required
                value={formData.name}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <FormIcon>
                <FaEnvelope />
              </FormIcon>
              <FormInput
                type="email"
                name="email"
                placeholder="Your Email*"
                required
                value={formData.email}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormTextarea
              name="message"
              placeholder="Your Message / Symptoms..."
              value={formData.message}
              onChange={handleInputChange}
            />
            <SubmitButton 
              type="submit" 
              disabled={loading}
            >
              {loading ? (
                <LoadingSpinner>
                  <FaSpinner /> Sending...
                </LoadingSpinner>
              ) : (
                <>Book Appointment</>
              )}
            </SubmitButton>
          </form>
        </ContactFormContainer>
      </ContactSection>
    </HomeContainer>
  );
};

export default Home;