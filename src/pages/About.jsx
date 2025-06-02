import React, { useState, useEffect } from 'react';
import {
  AboutContainer,
  HeroSection,
  HeroTitle,
  HeroSubtitle,
  CtaButton,
  SectionTitle,
  SectionSubtitle,
  FeaturesGrid,
  FeatureCard,
  FeatureIcon,
  FeatureTitle,
  FeatureDescription,
  StatsSection,
  StatsGrid,
  StatItem,
  StatNumber,
  StatLabel,
  TeamSection,
  TeamGrid,
  TeamMember,
  MemberImage,
  MemberName,
  MemberRole,
  ClientsSection,
  ClientsGrid,
  ClientLogo,
} from '../styles/styleAbout';
import { 
  FaPrint, 
  FaClock, 
  FaChartLine, 
  FaMobileAlt, 
  FaLeaf, 
  FaUniversity,
  FaBusinessTime,
  FaRegSmile
} from 'react-icons/fa';
import { IoMdSchool } from 'react-icons/io';
import { MdSecurity } from 'react-icons/md';

const AboutPage = () => {
  const [ setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  return (
    <AboutContainer>
      <HeroSection>
        <HeroTitle>
          Transforming <span>Print Management</span> for the Digital Age
        </HeroTitle>
        <HeroSubtitle>
          Our advanced Printing Queue Management System optimizes workflow, reduces waste, 
          and delivers unparalleled efficiency for businesses and institutions of all sizes.
        </HeroSubtitle>
        <CtaButton>Request a Demo</CtaButton>
      </HeroSection>

      <section>
        <SectionTitle>Why Choose Our Solution</SectionTitle>
        <SectionSubtitle>
          Designed with cutting-edge technology and user experience at its core, our system
          revolutionizes how organizations manage their printing needs.
        </SectionSubtitle>
        <FeaturesGrid>
          <FeatureCard>
            <FeatureIcon><FaPrint /></FeatureIcon>
            <FeatureTitle>Intelligent Job Prioritization</FeatureTitle>
            <FeatureDescription>
              Our AI-powered algorithm automatically prioritizes print jobs based on urgency, 
              document type, and resource availability to maximize efficiency.
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon><FaClock /></FeatureIcon>
            <FeatureTitle>Real-time Monitoring</FeatureTitle>
            <FeatureDescription>
              Track every print job in real-time with detailed progress indicators and 
              automated notifications when your documents are ready for pickup.
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon><MdSecurity /></FeatureIcon>
            <FeatureTitle>Enterprise-grade Security</FeatureTitle>
            <FeatureDescription>
              End-to-end encryption and secure release printing ensure sensitive documents 
              are protected throughout the entire workflow.
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon><FaChartLine /></FeatureIcon>
            <FeatureTitle>Comprehensive Analytics</FeatureTitle>
            <FeatureDescription>
              Detailed reporting tools provide insights into printing patterns, costs, 
              and environmental impact to support data-driven decisions.
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon><FaMobileAlt /></FeatureIcon>
            <FeatureTitle>Mobile Integration</FeatureTitle>
            <FeatureDescription>
              Submit, monitor, and manage print jobs from anywhere with our intuitive 
              mobile interface and cross-platform compatibility.
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon><FaLeaf /></FeatureIcon>
            <FeatureTitle>Sustainability Focus</FeatureTitle>
            <FeatureDescription>
              Reduce paper waste by up to 40% with our smart duplex printing suggestions 
              and resource optimization features.
            </FeatureDescription>
          </FeatureCard>
        </FeaturesGrid>
      </section>

      <StatsSection>
        <SectionTitle style={{ color: 'white' }}>By The Numbers</SectionTitle>
        <StatsGrid>
          <StatItem>
            <StatNumber>98%</StatNumber>
            <StatLabel>Customer Satisfaction</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>750+</StatNumber>
            <StatLabel>Organizations Served</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>2.5M+</StatNumber>
            <StatLabel>Print Jobs Daily</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>45%</StatNumber>
            <StatLabel>Cost Reduction</StatLabel>
          </StatItem>
        </StatsGrid>
      </StatsSection>

      <TeamSection>
        <SectionTitle>Meet Our Leadership</SectionTitle>
        <SectionSubtitle>
          A team of passionate innovators dedicated to transforming print management
        </SectionSubtitle>
        <TeamGrid>
          <TeamMember>
            <MemberImage>MR</MemberImage>
            <MemberName>AKASH ASATI</MemberName>
            <MemberRole>CTO</MemberRole>
            <FeatureDescription>
              Technical specialist with expertise in queue optimization algorithms.
            </FeatureDescription>
          </TeamMember>

          <TeamMember>
            <MemberImage>AG</MemberImage>
            <MemberName>AKSHAT GHATIYA</MemberName>
            <MemberRole>Lead Developer</MemberRole>
            <FeatureDescription>
              Full-stack engineer passionate about creating scalable, efficient systems.
            </FeatureDescription>
          </TeamMember>

          <TeamMember>
            <MemberImage>ST</MemberImage>
            <MemberName>ADTIYA TYAGI</MemberName>
            <MemberRole>UX Director & FRONTEND DEVELOPER</MemberRole>
            <FeatureDescription>
              Human-centered design expert focused on intuitive user experiences.
            </FeatureDescription>
          </TeamMember>
        </TeamGrid>
      </TeamSection>

      <ClientsSection>
        <SectionTitle>Trusted By Leading Organizations</SectionTitle>
        <ClientsGrid>
          <ClientLogo><IoMdSchool /></ClientLogo>
          <ClientLogo><FaUniversity /></ClientLogo>
          <ClientLogo><FaBusinessTime /></ClientLogo>
          <ClientLogo><FaRegSmile /></ClientLogo>
        </ClientsGrid>
      </ClientsSection>
    </AboutContainer>
  );
};

export default AboutPage;
