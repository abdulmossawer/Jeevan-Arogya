import React, { useState } from 'react';
import styled from 'styled-components';
import { FaCalendarCheck, FaUserMd, FaClock } from 'react-icons/fa';

const TeamContainer = styled.div`
  min-height: calc(100vh - 80px);
  padding: 4rem calc((100vw - 1200px) / 2);
`;

const TeamHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: #48CAC9;
    border-radius: 2px;
  }
`;

const TeamTitle = styled.h1`
  font-size: 2.8rem;
  color: #1a365d;
  margin-bottom: 1rem;
`;

const TeamSubtitle = styled.p`
  font-size: 1.2rem;
  color: #4a5568;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const DepartmentFilter = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  padding: 0 1rem;
`;

const FilterButton = styled.button`
  padding: 0.8rem 1.5rem;
  background: ${props => props.active ? '#48CAC9' : 'white'};
  color: ${props => props.active ? 'white' : '#1a365d'};
  border: 2px solid #48CAC9;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #48CAC9;
    color: white;
    transform: translateY(-2px);
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  padding: 0 2rem;
`;

const DoctorCard = styled.div`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  }
`;

const DoctorImageContainer = styled.div`
  position: relative;
  height: 300px;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 30%;
    background: linear-gradient(to top, rgba(0,0,0,0.6), transparent);
  }
`;

const DoctorImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${DoctorCard}:hover & {
    transform: scale(1.05);
  }
`;

const DoctorInfo = styled.div`
  padding: 1.5rem;
  text-align: center;
`;

const DoctorName = styled.h3`
  font-size: 1.4rem;
  color: #1a365d;
  margin-bottom: 0.5rem;
`;

const DoctorDesignation = styled.p`
  color: #48CAC9;
  font-size: 1rem;
  margin-bottom: 1rem;
  font-weight: 500;
`;

const DoctorDepartment = styled.p`
  color: #4a5568;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const DoctorStats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 10px;
  margin-top: 1rem;
`;

const StatItem = styled.div`
  text-align: center;

  svg {
    color: #48CAC9;
    font-size: 1.2rem;
    margin-bottom: 0.3rem;
  }

  p {
    color: #4a5568;
    font-size: 0.8rem;
  }
`;

const Team = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const departments = ['All', 'Gynecology'];

  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Williams',
      designation: 'Senior Gynecologist',
      department: 'Gynecology',
      image: '/images/team/doctor1.jpg',
      experience: '15+ Years',
      patients: '12,000+',
      rating: '4.9',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        email: 'mailto:sarah.williams@hospital.com'
      }
    },
    {
      id: 2,
      name: 'Dr. Emily Rodriguez',
      designation: 'Obstetrics & Gynecology',
      department: 'Gynecology',
      image: '/images/team/doctor2.jpg',
      experience: '12+ Years',
      patients: '10,000+',
      rating: '4.8',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        email: 'mailto:emily.rodriguez@hospital.com'
      }
    },
    {
      id: 3,
      name: 'Dr. Jessica Chen',
      designation: 'Reproductive Endocrinologist',
      department: 'Gynecology',
      image: '/images/team/doctor3.jpg',
      experience: '10+ Years',
      patients: '8,000+',
      rating: '4.9',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        email: 'mailto:jessica.chen@hospital.com'
      }
    },
    {
      id: 4,
      name: 'Dr. Maria Garcia',
      designation: 'Gynecologic Oncologist',
      department: 'Gynecology',
      image: '/images/team/doctor4.jpg',
      experience: '18+ Years',
      patients: '15,000+',
      rating: '4.9',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        email: 'mailto:maria.garcia@hospital.com'
      }
    }
  ];

  const filteredDoctors = activeFilter === 'All' 
    ? doctors 
    : doctors.filter(doctor => doctor.department === activeFilter);

  return (
    <TeamContainer>
      <TeamHeader>
        <TeamTitle>Meet Our Expert Doctors</TeamTitle>
        <TeamSubtitle>
          Our team of highly qualified and experienced medical professionals is dedicated to providing the best healthcare services.
        </TeamSubtitle>
      </TeamHeader>

      <DepartmentFilter role="tablist">
        {departments.map(department => (
          <FilterButton
            key={department}
            active={activeFilter === department}
            onClick={() => setActiveFilter(department)}
            role="tab"
            aria-selected={activeFilter === department}
            aria-controls="doctors-grid"
          >
            {department}
          </FilterButton>
        ))}
      </DepartmentFilter>

      <TeamGrid id="doctors-grid" role="tabpanel" aria-label="Doctors List">
        {filteredDoctors.map(doctor => (
          <DoctorCard key={doctor.id}>
            <DoctorImageContainer>
              <DoctorImage src={doctor.image} alt={`Dr. ${doctor.name}`} loading="lazy" />
            </DoctorImageContainer>
            <DoctorInfo>
              <DoctorName>{doctor.name}</DoctorName>
              <DoctorDesignation>{doctor.designation}</DoctorDesignation>
              <DoctorDepartment>{doctor.department}</DoctorDepartment>
              
              <DoctorStats>
                <StatItem>
                  <FaUserMd aria-hidden="true" />
                  <p>Experience</p>
                  <strong>{doctor.experience}</strong>
                </StatItem>
                <StatItem>
                  <FaCalendarCheck aria-hidden="true" />
                  <p>Patients</p>
                  <strong>{doctor.patients}</strong>
                </StatItem>
                <StatItem>
                  <FaClock aria-hidden="true" />
                  <p>Rating</p>
                  <strong>{doctor.rating}</strong>
                </StatItem>
              </DoctorStats>
            </DoctorInfo>
          </DoctorCard>
        ))}
      </TeamGrid>
    </TeamContainer>
  );
};

export default Team; 