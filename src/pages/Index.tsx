import CursorEffect from "@/components/CursorEffect";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TimelineSection from "@/components/TimelineSection";
import TechStackSection from "@/components/TechStackSection";
import ProjectsSection from "@/components/ProjectsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <CursorEffect />
    <Navbar />
    <HeroSection />
    <AboutSection />
    <TimelineSection />
    <TechStackSection />
    <ProjectsSection />
    <FooterSection />
  </div>
);

export default Index;
