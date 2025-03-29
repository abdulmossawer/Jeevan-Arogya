import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaHospital, FaAward, FaUserMd, FaBed, FaAmbulance, FaClock, 
         FaStethoscope, FaHandHoldingMedical, FaMedkit } from 'react-icons/fa';

const AboutContainer = styled.div`
  min-height: calc(100vh - 80px);
`;

const HeroSection = styled.section`
  background: linear-gradient(rgba(26, 54, 93, 0.8), rgba(26, 54, 93, 0.8)),
    url('/images/about/about-hero.jpg');
  background-size: cover;
  background-position: center;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  padding: 0 20px;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const Section = styled.section`
  padding: 5rem calc((100vw - 1200px) / 2);
  background: ${props => props.background || 'white'};
`;

const MissionSection = styled(Section)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  padding: 5rem calc((100vw - 1200px) / 2);

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 3rem 2rem;
  }
`;

const MissionContent = styled.div`
  max-width: 600px;
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 500px;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
    background: linear-gradient(to top, rgba(72, 202, 201, 0.2), transparent);
  }

  @media screen and (max-width: 768px) {
    height: 400px;
    margin-top: 2rem;
  }
`;

const MissionImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #1a365d;
  margin-bottom: 1.5rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 80px;
    height: 4px;
    background: #48CAC9;
  }
`;

const SectionText = styled.p`
  color: #4a5568;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
`;

const ValueGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ValueCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ValueIcon = styled.div`
  color: #48CAC9;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const ValueTitle = styled.h3`
  color: #1a365d;
  font-size: 1.3rem;
  margin-bottom: 1rem;
`;

const StatsSection = styled(Section)`
  background: linear-gradient(135deg, #f8fafc 0%, #e6f7f7 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(72, 202, 201, 0.5), transparent);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(72, 202, 201, 0.5), transparent);
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StatCard = styled.div`
  text-align: center;
`;

const StatNumber = styled.h3`
  font-size: 2.5rem;
  color: #48CAC9;
  margin-bottom: 0.5rem;
`;

const StatText = styled.p`
  color: #1a365d;
  font-size: 1.1rem;
`;

const FacilitiesSection = styled(Section)`
  text-align: center;
`;

const FacilitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  padding: 0 2rem;
`;

const FacilityCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  }
`;

const FacilityIcon = styled.div`
  color: #48CAC9;
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const FacilityTitle = styled.h3`
  color: #1a365d;
  font-size: 1.3rem;
  margin-bottom: 1rem;
`;

const FacilityText = styled.p`
  color: #4a5568;
  font-size: 1rem;
  line-height: 1.6;
`;

const TimelineSection = styled(Section)`
  background: white;
  padding-top: 6rem;
  padding-bottom: 6rem;
`;

const TimelineContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: #48CAC9;
    opacity: 0.3;
  }

  @media screen and (max-width: 768px) {
    &::before {
      left: 30px;
    }
  }
`;

const TimelineItem = styled.div`
  display: flex;
  justify-content: ${props => props.align === 'right' ? 'flex-end' : 'flex-start'};
  padding-bottom: 3rem;
  width: 100%;
  position: relative;

  @media screen and (max-width: 768px) {
    justify-content: flex-start;
    padding-left: 80px;
  }
`;

const TimelineContent = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  width: 45%;
  position: relative;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  &::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background: #48CAC9;
    border-radius: 50%;
    top: 20px;
    ${props => props.align === 'right' ? 'left: -60px;' : 'right: -60px;'}
  }

  @media screen and (max-width: 768px) {
    width: 100%;

    &::before {
      left: -50px;
    }
  }
`;

const TimelineYear = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: #48CAC9;
  margin-bottom: 0.5rem;
`;

const TimelineTitle = styled.h3`
  color: #1a365d;
  margin-bottom: 0.5rem;
`;

const HighlightsSection = styled(Section)`
  background: linear-gradient(135deg, #1a365d 0%, #2a4a7f 100%);
  color: white;
  text-align: center;
`;

const HighlightsTitle = styled(SectionTitle)`
  color: white;
  text-align: center;
  margin: 0 auto 3rem;

  &::after {
    left: 50%;
    transform: translateX(-50%);
    background: #48CAC9;
  }
`;

const HighlightsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;

  @media screen and (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const HighlightCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 15px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    background: rgba(255, 255, 255, 0.15);
  }
`;

const HighlightIcon = styled.div`
  color: #48CAC9;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

const HighlightTitle = styled.h3`
  color: white;
  font-size: 1.4rem;
  margin-bottom: 1rem;
`;

const HighlightText = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  line-height: 1.6;
`;

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

// Convert regular components to motion components
const MotionValueCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const MotionHighlightCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 15px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    background: rgba(255, 255, 255, 0.15);
  }
`;

const MotionStatCard = styled(motion.div)`
  text-align: center;
`;

const MotionFacilityCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  }
`;

const MotionTimelineContent = styled(motion.div)`
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  width: 45%;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background: #48CAC9;
    border-radius: 50%;
    top: 20px;
    ${props => props.align === 'right' ? 'left: -60px;' : 'right: -60px;'}
  }

  @media screen and (max-width: 768px) {
    width: 100%;

    &::before {
      left: -50px;
    }
  }
`;

const TestimonialsSection = styled(Section)`
  background: linear-gradient(135deg, #1a365d 0%, #2a4a7f 100%);
  color: white;
  text-align: center;
  padding: 5rem 2rem;
`;

const TestimonialsTitle = styled(SectionTitle)`
  color: white;
  text-align: center;
  margin: 0 auto 3rem;

  &::after {
    left: 50%;
    transform: translateX(-50%);
    background: #48CAC9;
  }
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TestimonialCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 15px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    background: rgba(255, 255, 255, 0.15);
  }
`;

const TestimonialText = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
  line-height: 1.6;
  font-style: italic;
  margin-bottom: 1.5rem;
`;

const TestimonialAuthor = styled.div`
  color: #48CAC9;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const TestimonialInfo = styled.div`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
`;

const TeamSection = styled(Section)`
  text-align: center;
  background: linear-gradient(135deg, #f8fafc 0%, #e6f7f7 100%);
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  padding: 0 2rem;
`;

const TeamMember = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  }
`;

const TeamImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 1rem;
  object-fit: cover;
  border: 4px solid #48CAC9;
`;

const TeamName = styled.h3`
  color: #1a365d;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
`;

const TeamRole = styled.p`
  color: #48CAC9;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const TeamBio = styled.p`
  color: #4a5568;
  font-size: 0.9rem;
  line-height: 1.6;
`;

const About = () => {
  return (
    <AboutContainer>
      <HeroSection>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <HeroTitle>About Us</HeroTitle>
          <HeroSubtitle>
            Providing exceptional healthcare services with compassion and expertise
          </HeroSubtitle>
        </motion.div>
      </HeroSection>

      <MissionSection>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <MissionContent>
            <SectionTitle>Our Mission</SectionTitle>
            <SectionText>
              At Women's Health Center, our mission is to provide comprehensive, 
              compassionate, and high-quality healthcare services to women of all ages. 
              We strive to create a welcoming and supportive environment where every 
              patient feels valued and cared for.
            </SectionText>
            <SectionText>
              Our commitment to excellence in healthcare delivery, combined with 
              our focus on preventive care and patient education, ensures that we 
              can help women maintain optimal health throughout their lives.
            </SectionText>
          </MissionContent>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ImageWrapper>
            <MissionImage src="/images/about/about-mission.jpg" alt="Our Mission" />
          </ImageWrapper>
        </motion.div>
      </MissionSection>

      <TimelineSection>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle>Our Journey in Women's Health</SectionTitle>
        </motion.div>
        <TimelineContainer>
          <TimelineItem align="left">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <TimelineContent align="left">
                <TimelineYear>2008</TimelineYear>
                <TimelineTitle>Establishment</TimelineTitle>
                <SectionText>Founded with a vision to provide specialized women's healthcare services.</SectionText>
              </TimelineContent>
            </motion.div>
          </TimelineItem>
          <TimelineItem align="right">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <TimelineContent align="right">
                <TimelineYear>2013</TimelineYear>
                <TimelineTitle>Advanced Technology Integration</TimelineTitle>
                <SectionText>Introduced state-of-the-art gynecological equipment and diagnostic tools.</SectionText>
              </TimelineContent>
            </motion.div>
          </TimelineItem>
          <TimelineItem align="left">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <TimelineContent align="left">
                <TimelineYear>2018</TimelineYear>
                <TimelineTitle>Fertility Center Launch</TimelineTitle>
                <SectionText>Expanded services with a dedicated fertility treatment center.</SectionText>
              </TimelineContent>
            </motion.div>
          </TimelineItem>
          <TimelineItem align="right">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <TimelineContent align="right">
                <TimelineYear>2023</TimelineYear>
                <TimelineTitle>Digital Healthcare Integration</TimelineTitle>
                <SectionText>Implemented telemedicine services and digital health records for enhanced patient care.</SectionText>
              </TimelineContent>
            </motion.div>
          </TimelineItem>
        </TimelineContainer>
      </TimelineSection>

      <TestimonialsSection>
        <TestimonialsTitle>Patient Stories</TestimonialsTitle>
        <TestimonialsGrid>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TestimonialCard>
              <TestimonialText>
                "The care and attention I received during my pregnancy journey was exceptional. The team made me feel supported every step of the way."
              </TestimonialText>
              <TestimonialAuthor>Sarah Johnson</TestimonialAuthor>
              <TestimonialInfo>Obstetric Care Patient</TestimonialInfo>
            </TestimonialCard>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <TestimonialCard>
              <TestimonialText>
                "Their fertility specialists gave us hope and helped us achieve our dream of starting a family. Forever grateful for their expertise."
              </TestimonialText>
              <TestimonialAuthor>Emily & David Chen</TestimonialAuthor>
              <TestimonialInfo>Fertility Treatment Patients</TestimonialInfo>
            </TestimonialCard>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <TestimonialCard>
              <TestimonialText>
                "The preventive care and wellness programs have made a significant difference in my health. Their holistic approach is commendable."
              </TestimonialText>
              <TestimonialAuthor>Maria Rodriguez</TestimonialAuthor>
              <TestimonialInfo>Women's Wellness Patient</TestimonialInfo>
            </TestimonialCard>
          </motion.div>
        </TestimonialsGrid>
      </TestimonialsSection>

      <StatsSection>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <StatsGrid>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <StatCard>
                <StatNumber>15+</StatNumber>
                <SectionText>Years of Excellence in Women's Health</SectionText>
              </StatCard>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <StatCard>
                <StatNumber>10,000+</StatNumber>
                <SectionText>Successful Treatments</SectionText>
              </StatCard>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <StatCard>
                <StatNumber>4.9</StatNumber>
                <SectionText>Patient Satisfaction Rating</SectionText>
              </StatCard>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <StatCard>
                <StatNumber>24/7</StatNumber>
                <SectionText>Emergency Care Available</SectionText>
              </StatCard>
            </motion.div>
          </StatsGrid>
        </motion.div>
      </StatsSection>

      <Section>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle>Our Core Values</SectionTitle>
        </motion.div>
        <ValueGrid>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <ValueCard>
              <ValueIcon>
                <FaUserMd />
              </ValueIcon>
              <ValueTitle>Professional Excellence</ValueTitle>
              <SectionText>
                Our gynecologists maintain the highest standards of medical expertise and continuous learning.
              </SectionText>
            </ValueCard>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ValueCard>
              <ValueIcon>
                <FaHospital />
              </ValueIcon>
              <ValueTitle>Modern Facilities</ValueTitle>
              <SectionText>
                State-of-the-art equipment and comfortable facilities designed for women's healthcare needs.
              </SectionText>
            </ValueCard>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <ValueCard>
              <ValueIcon>
                <FaClock />
              </ValueIcon>
              <ValueTitle>Timely Care</ValueTitle>
              <SectionText>
                Quick appointment scheduling and minimal wait times for urgent gynecological care.
              </SectionText>
            </ValueCard>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ValueCard>
              <ValueIcon>
                <FaMedkit />
              </ValueIcon>
              <ValueTitle>Comprehensive Care</ValueTitle>
              <SectionText>
                Complete range of gynecological services from routine check-ups to specialized treatments.
              </SectionText>
            </ValueCard>
          </motion.div>
        </ValueGrid>
      </Section>

      <Section background="#f8fafc">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle>Our Specializations</SectionTitle>
        </motion.div>
        <ValueGrid>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <ValueCard>
              <ValueIcon>
                <FaStethoscope />
              </ValueIcon>
              <ValueTitle>Routine Gynecology</ValueTitle>
              <SectionText>
                Regular check-ups, preventive care, and screenings for optimal women's health.
              </SectionText>
            </ValueCard>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <ValueCard>
              <ValueIcon>
                <FaHandHoldingMedical />
              </ValueIcon>
              <ValueTitle>Obstetric Care</ValueTitle>
              <SectionText>
                Comprehensive pregnancy care from conception through postpartum period.
              </SectionText>
            </ValueCard>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <ValueCard>
              <ValueIcon>
                <FaMedkit />
              </ValueIcon>
              <ValueTitle>Fertility Services</ValueTitle>
              <SectionText>
                Advanced fertility treatments and reproductive health services.
              </SectionText>
            </ValueCard>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <ValueCard>
              <ValueIcon>
                <FaUserMd />
              </ValueIcon>
              <ValueTitle>Women's Wellness</ValueTitle>
              <SectionText>
                Holistic approach to women's health including hormonal balance and preventive care.
              </SectionText>
            </ValueCard>
          </motion.div>
        </ValueGrid>
      </Section>

      <TeamSection>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionTitle>Our Team</SectionTitle>
          <SectionText>
            Meet our dedicated team of healthcare professionals who are committed 
            to providing the best care for our patients.
          </SectionText>
        </motion.div>

        <TeamGrid>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <TeamMember>
              <TeamImage src="/images/about/about-team.jpg" alt="Dr. Sarah Johnson" />
              <TeamName>Dr. Sarah Johnson</TeamName>
              <TeamRole>Medical Director</TeamRole>
              <TeamBio>
                With over 15 years of experience in women's health, Dr. Johnson 
                leads our team with expertise and compassion.
              </TeamBio>
            </TeamMember>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <TeamMember>
              <TeamImage src="/images/about/about-founder.jpg" alt="Dr. Emily Chen" />
              <TeamName>Dr. Emily Chen</TeamName>
              <TeamRole>Senior Gynecologist</TeamRole>
              <TeamBio>
                Specializing in high-risk pregnancies and fertility treatments, 
                Dr. Chen brings innovation to our practice.
              </TeamBio>
            </TeamMember>
          </motion.div>
        </TeamGrid>
      </TeamSection>
    </AboutContainer>
  );
};

export default About; 