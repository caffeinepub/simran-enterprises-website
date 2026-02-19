import HeroSection from '../components/home/HeroSection';
import AboutPreview from '../components/home/AboutPreview';
import ServicesHighlight from '../components/home/ServicesHighlight';
import WhyChooseUs from '../components/home/WhyChooseUs';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutPreview />
      <ServicesHighlight />
      <WhyChooseUs />
    </div>
  );
}
