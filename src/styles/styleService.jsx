import styled, { keyframes } from 'styled-components';

// Animations
export const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

// Styled components
export const ServicesContainer = styled.div`
  font-family: 'Poppins', sans-serif;
  color: #2d3748;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const HeroSection = styled.section`
  background: linear-gradient(135deg, #2b5876 0%, #4e4376 100%);
  color: white;
  padding: 100px 20px;
  border-radius: 0 0 20px 20px;
  text-align: center;
  margin-bottom: 80px;
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
    padding: 80px 20px;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 25px;
  font-weight: 700;
  line-height: 1.2;
  animation: ${fadeIn} 0.8s ease-out;

  span {
    background: linear-gradient(to right, #f6d365, #fda085);
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
  background: linear-gradient(to right, #f6d365, #fda085);
  color: white;
  border: none;
  padding: 15px 40px;
  font-size: 1.1rem;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(246, 211, 101, 0.3);
  animation: ${fadeIn} 0.8s ease-out 0.4s both;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(246, 211, 101, 0.4);
    animation: ${pulse} 1.5s infinite;
  }

  &:active {
    transform: translateY(0);
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 60px;
  color: #2b5876;
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

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

export const ServiceCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 40px 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.03);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 0;
    background: linear-gradient(to bottom, #4299e1, #9f7aea);
    transition: height 0.3s ease;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);

    &::before {
      height: 100%;
    }
  }
`;

export const ServiceIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 25px;
  background: linear-gradient(to right, #2b5876, #4e4376);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
  transition: all 0.3s ease;

  ${ServiceCard}:hover & {
    transform: rotate(10deg) scale(1.1);
  }
`;

export const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #2b5876;
  font-weight: 600;
`;

export const ServiceDescription = styled.p`
  color: #4a5568;
  line-height: 1.7;
  margin-bottom: 25px;
`;

export const ServicePrice = styled.div`
  font-size: 1.3rem;
  font-weight: 700;
  color: #2b5876;
  margin-bottom: 20px;

  span {
    font-size: 0.9rem;
    color: #718096;
    font-weight: 400;
  }
`;

export const ComingSoonBadge = styled.span`
  background: linear-gradient(to right, #f6d365, #fda085);
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  display: inline-block;
  margin-top: 10px;
`;

export const FeaturesSection = styled.section`
  background: #f7fafc;
  padding: 80px 20px;
  border-radius: 20px;
  margin: 80px 0;
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const FeatureItem = styled.div`
  text-align: center;
  padding: 30px;
  border-radius: 10px;
  transition: all 0.3s ease;
  background: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.03);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

export const FeatureIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #4e4376;
`;

export const FeatureTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 15px;
  color: #2b5876;
`;

export const FeatureText = styled.p`
  color: #4a5568;
  line-height: 1.6;
`;