import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { servicesData } from '../data/servicesData';
import { ArrowRight,Sparkles, CheckCircle } from 'lucide-react';
import PartnersSection from '../components/PartnersSection';
import TestimonialsSection from '../components/TestimonialsSection';
import WhatsAppButton from '../components/Watsappfloat';
import WhyChooseUs from '../components/WhyChooseUs';
import HomeHeroSection from '../components/HomeHeroSection';
import HomeServicesSection from '../components/HomeServiceSection';
import { motion } from 'framer-motion';
import HomeCTA from '../components/HomeCTA';

const HomePage = () => {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const navigate = useNavigate();
  


  const handleLearnMore = (service) => {
    navigate(`/services/${service.id}`);
  };

  return (
    <div>
       <WhatsAppButton />
       <HomeHeroSection />
      <HomeServicesSection/>
      <WhyChooseUs/>
      <PartnersSection/>
      <TestimonialsSection />
      <HomeCTA/>
      

      
    </div>
  );
};

export default HomePage;