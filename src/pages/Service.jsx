import React from 'react';
import {
  ServicesContainer,
  HeroSection,
  HeroTitle,
  HeroSubtitle,
  CtaButton,
  SectionTitle,
  SectionSubtitle,
  ServicesGrid,
  ServiceCard,
  ServiceIcon,
  ServiceTitle,
  ServiceDescription,
  ServicePrice,
  ComingSoonBadge,
  FeaturesSection,
  FeaturesGrid,
  FeatureItem,
  FeatureIcon,
  FeatureTitle,
  FeatureText,
} from '../styles/styleService';
import { 
  FaPrint, 
  FaCopy, 
  FaFilePdf, 
  FaLaptop, 
  FaShippingFast, 
  FaBoxOpen,
  FaPalette,
  FaPenNib,
  FaRuler,
  FaBook,
  FaTshirt,
  FaClock
} from 'react-icons/fa';
import { MdLocalOffer, MdSupportAgent } from 'react-icons/md';

const Service = () => {
  return (
    <ServicesContainer>
      <HeroSection>
        <HeroTitle>
          Premium <span>Printing & Stationery</span> Services
        </HeroTitle>
        <HeroSubtitle>
          High-quality printing solutions and office supplies delivered with speed and precision.
          Order online and get your documents and stationery when you need them.
        </HeroSubtitle>
        <CtaButton>Order Now</CtaButton>
      </HeroSection>

      <section>
        <SectionTitle>Our Printing Services</SectionTitle>
        <SectionSubtitle>
          Professional printing solutions for all your needs, with quick turnaround times
          and competitive pricing.
        </SectionSubtitle>
        <ServicesGrid>
          <ServiceCard>
            <ServiceIcon><FaPrint /></ServiceIcon>
            <ServiceTitle>Standard Black & White Printing</ServiceTitle>
            <ServiceDescription>
              High-quality black and white printing for documents, reports, and assignments.
              Crisp text and sharp graphics every time.
            </ServiceDescription>
            <ServicePrice>$0.10 <span>per page</span></ServicePrice>
          </ServiceCard>

          <ServiceCard>
            <ServiceIcon><FaCopy /></ServiceIcon>
            <ServiceTitle>Photocopy Services</ServiceTitle>
            <ServiceDescription>
              Fast and accurate photocopying with options for resizing and quality enhancement.
              Perfect for duplicating important documents.
            </ServiceDescription>
            <ServicePrice>$0.15 <span>per page</span></ServicePrice>
          </ServiceCard>

          <ServiceCard>
            <ServiceIcon><FaFilePdf /></ServiceIcon>
            <ServiceTitle>Color Printing</ServiceTitle>
            <ServiceDescription>
              Vibrant color printing for presentations, flyers, posters, and more.
              Premium paper options available.
            </ServiceDescription>
            <ServicePrice>$0.50 <span>per page</span></ServicePrice>
          </ServiceCard>

          <ServiceCard>
            <ServiceIcon><FaLaptop /></ServiceIcon>
            <ServiceTitle>Thesis & Dissertation Printing</ServiceTitle>
            <ServiceDescription>
              Specialized printing and binding services for academic works.
              Multiple binding options available.
            </ServiceDescription>
            <ServicePrice>From $15 <span>per copy</span></ServicePrice>
          </ServiceCard>

          <ServiceCard>
            <ServiceIcon><FaBoxOpen /></ServiceIcon>
            <ServiceTitle>Bulk Printing Orders</ServiceTitle>
            <ServiceDescription>
              Discounted rates for large volume printing orders.
              Perfect for businesses and organizations.
            </ServiceDescription>
            <ServicePrice>From $0.07 <span>per page</span></ServicePrice>
          </ServiceCard>

          <ServiceCard>
            <ServiceIcon><FaShippingFast /></ServiceIcon>
            <ServiceTitle>Express Printing Service</ServiceTitle>
            <ServiceDescription>
              Need it urgently? Our express service guarantees your prints within 2 hours.
              Additional charges apply.
            </ServiceDescription>
            <ServicePrice>+$5 <span>surcharge</span></ServicePrice>
          </ServiceCard>
        </ServicesGrid>
      </section>

      <FeaturesSection>
        <SectionTitle>Why Choose Our Services</SectionTitle>
        <FeaturesGrid>
          <FeatureItem>
            <FeatureIcon><MdLocalOffer /></FeatureIcon>
            <FeatureTitle>Competitive Pricing</FeatureTitle>
            <FeatureText>
              We offer the most affordable rates in town without compromising on quality.
            </FeatureText>
          </FeatureItem>

          <FeatureItem>
            <FeatureIcon><FaClock /></FeatureIcon>
            <FeatureTitle>Fast Turnaround</FeatureTitle>
            <FeatureText>
              Most orders completed within 24 hours. Express options available.
            </FeatureText>
          </FeatureItem>

          <FeatureItem>
            <FeatureIcon><MdSupportAgent /></FeatureIcon>
            <FeatureTitle>24/7 Support</FeatureTitle>
            <FeatureText>
              Our customer service team is always ready to assist with your printing needs.
            </FeatureText>
          </FeatureItem>

          <FeatureItem>
            <FeatureIcon><FaPrint /></FeatureIcon>
            <FeatureTitle>Quality Guarantee</FeatureTitle>
            <FeatureText>
              If you're not satisfied with the print quality, we'll reprint it for free.
            </FeatureText>
          </FeatureItem>
        </FeaturesGrid>
      </FeaturesSection>

      <section>
        <SectionTitle>Coming Soon: Stationery Shop</SectionTitle>
        <SectionSubtitle>
          We're expanding our services to include a full range of office and school supplies
          that you can order online.
        </SectionSubtitle>
        <ServicesGrid>
          <ServiceCard>
            <ServiceIcon><FaPenNib /></ServiceIcon>
            <ServiceTitle>Writing Instruments</ServiceTitle>
            <ServiceDescription>
              Premium pens, pencils, markers, and highlighters from top brands.
            </ServiceDescription>
            <ComingSoonBadge>Coming Soon</ComingSoonBadge>
          </ServiceCard>

          <ServiceCard>
            <ServiceIcon><FaBook /></ServiceIcon>
            <ServiceTitle>Notebooks & Journals</ServiceTitle>
            <ServiceDescription>
              High-quality notebooks, planners, and journals for all your writing needs.
            </ServiceDescription>
            <ComingSoonBadge>Coming Soon</ComingSoonBadge>
          </ServiceCard>

          <ServiceCard>
            <ServiceIcon><FaPalette /></ServiceIcon>
            <ServiceTitle>Art Supplies</ServiceTitle>
            <ServiceDescription>
              Complete range of art materials for students and professionals.
            </ServiceDescription>
            <ComingSoonBadge>Coming Soon</ComingSoonBadge>
          </ServiceCard>

          <ServiceCard>
            <ServiceIcon><FaRuler /></ServiceIcon>
            <ServiceTitle>Office Essentials</ServiceTitle>
            <ServiceDescription>
              Everything from staplers to paper clips to keep your office running smoothly.
            </ServiceDescription>
            <ComingSoonBadge>Coming Soon</ComingSoonBadge>
          </ServiceCard>

          <ServiceCard>
            <ServiceIcon><FaTshirt /></ServiceIcon>
            <ServiceTitle>Branded Merchandise</ServiceTitle>
            <ServiceDescription>
              Custom printed t-shirts, mugs, and other promotional items.
            </ServiceDescription>
            <ComingSoonBadge>Coming Soon</ComingSoonBadge>
          </ServiceCard>
        </ServicesGrid>
      </section>
    </ServicesContainer>
  );
};

export default Service;