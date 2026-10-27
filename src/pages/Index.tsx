import { useEffect } from "react";
import AnimatedBackground from "@/components/background/AnimatedBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import ServicesSection from "@/components/ServicesSection";
import HowIWorkSection from "@/components/HowIWorkSection";
import MoreWorkSection from "@/components/MoreWorkSection";
import ExperienceSection from "@/components/ExperienceSection";
import TechStackSection from "@/components/TechStackSection";
import ResultsSection from "@/components/ResultsSection";
import CertificationsSection from "@/components/CertificationsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  // The page renders after the browser's initial hash jump, so honour deep links like /#projects here.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (id) document.getElementById(id)?.scrollIntoView();
  }, []);

  return (
    <div className="min-h-screen overflow-x-clip">
      <AnimatedBackground />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="relative z-10">
        <HeroSection />
        <AboutSection />
        <FeaturedProducts />
        <ServicesSection />
        <HowIWorkSection />
        <MoreWorkSection />
        <ExperienceSection />
        <TechStackSection />
        <ResultsSection />
        <CertificationsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
