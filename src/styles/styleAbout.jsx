import styled, { keyframes } from 'styled-components';

// Animations
export const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Styled components
export const AboutContainer = styled.div`
  font-family: 'Poppins', sans-serif;
  color: #2d3748;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  overflow-x: hidden;
`;

export const HeroSection = styled.section`
  background: linear-gradient(135deg, #1a365d 0%, #2b5876 100%);
  color: white;
  padding: 100px 20px;
  border-radius: 0 0 20px 20px;
  text-align: center;
  margin-bottom: 80px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(to right, #4299e1, #9f7aea);
  }

  @media (max-width: 768px) {
    padding: 80px 20px;
    border-radius: 0 0 15px 15px;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 25px;
  font-weight: 700;
  line-height: 1.2;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.8s ease-out;

  span {
    background: linear-gradient(to right, #4299e1, #9f7aea);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  max-width: 800px;
  margin: 0 auto 40px;
  line-height: 1.6;
  opacity: 0.9;
  animation: ${fadeIn} 0.8s ease-out 0.2s both;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const CtaButton = styled.button`
  background: linear-gradient(to right, #4299e1, #9f7aea);
  color: white;
  border: none;
  padding: 15px 40px;
  font-size: 1.1rem;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(66, 153, 225, 0.3);
  animation: ${fadeIn} 0.8s ease-out 0.4s both;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(66, 153, 225, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 60px;
  color: #1a365d;
  position: relative;
  padding-bottom: 15px;
  font-weight: 700;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(to right, #4299e1, #9f7aea);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 40px;
  }
`;

export const SectionSubtitle = styled.p`
  text-align: center;
  max-width: 700px;
  margin: -40px auto 60px;
  font-size: 1.1rem;
  color: #4a5568;
  line-height: 1.7;

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 40px;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

export const FeatureCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 40px 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.03);
  animation: ${fadeIn} 0.6s ease-out;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
    border-color: rgba(66, 153, 225, 0.2);
  }
`;

export const FeatureIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 25px;
  background: linear-gradient(to right, #4299e1, #9f7aea);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
`;

export const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #1a365d;
  font-weight: 600;
`;

export const FeatureDescription = styled.p`
  color: #4a5568;
  line-height: 1.7;
`;

export const StatsSection = styled.section`
  background: linear-gradient(135deg, #1a365d 0%, #2b5876 100%);
  color: white;
  padding: 80px 20px;
  border-radius: 20px;
  margin: 80px 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(to right, #4299e1, #9f7aea);
  }

  @media (max-width: 768px) {
    padding: 60px 20px;
    margin: 60px 0;
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;
`;

export const StatItem = styled.div`
  animation: ${fadeIn} 0.6s ease-out;
`;

export const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 10px;
  background: linear-gradient(to right, #fff, #cbd5e0);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

export const StatLabel = styled.div`
  font-size: 1.2rem;
  opacity: 0.9;
`;

export const TeamSection = styled.section`
  margin: 100px 0;

  @media (max-width: 768px) {
    margin: 70px 0;
  }
`;

export const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
`;

export const TeamMember = styled.div`
  text-align: center;
  background: white;
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.6s ease-out;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  }
`;

export const MemberImage = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background: linear-gradient(135deg, #4299e1, #9f7aea);
  margin: 0 auto 25px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3.5rem;
  font-weight: 700;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

export const MemberName = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 5px;
  color: #1a365d;
  font-weight: 600;
`;

export const MemberRole = styled.p`
  color: #9f7aea;
  margin-bottom: 20px;
  font-weight: 500;
`;

export const ClientsSection = styled.section`
  margin: 100px 0;
  text-align: center;

  @media (max-width: 768px) {
    margin: 70px 0;
  }
`;

export const ClientsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 40px;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
`;

export const ClientLogo = styled.div`
  font-size: 2.5rem;
  color: #4a5568;
  opacity: 0.7;
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
    color: #1a365d;
  }
`;