import ServiceCard from '../components/services/ServiceCard';

const services = [
  {
    title: 'Residential Construction',
    description: 'We specialize in building custom homes that reflect your lifestyle and preferences. From foundation to finishing, our team ensures every detail meets the highest standards of quality and craftsmanship. Whether you\'re building your dream home or a multi-unit residential complex, we bring expertise and dedication to every project.',
    image: '/assets/generated/service-residential.dim_300x300.png',
    features: ['Custom Home Design', 'Quality Materials', 'Expert Craftsmanship', 'Timely Completion'],
  },
  {
    title: 'Commercial Construction',
    description: 'Our commercial construction services cater to businesses of all sizes. We understand the unique requirements of commercial spaces and deliver functional, aesthetically pleasing buildings that enhance your business operations. From offices to retail spaces, we handle projects with professionalism and efficiency.',
    image: '/assets/generated/service-commercial.dim_300x300.png',
    features: ['Office Buildings', 'Retail Spaces', 'Industrial Facilities', 'Turnkey Solutions'],
  },
  {
    title: 'Interior Designing',
    description: 'Transform your spaces with our innovative interior design services. Our talented designers work closely with you to create interiors that are both beautiful and functional. We handle everything from concept development to final installation, ensuring your space reflects your personality and meets your needs.',
    image: '/assets/generated/service-interior.dim_300x300.png',
    features: ['Space Planning', 'Custom Furniture', 'Color Consultation', '3D Visualization'],
  },
  {
    title: 'Renovation & Remodeling',
    description: 'Breathe new life into your existing spaces with our renovation and remodeling services. Whether you want to update a single room or transform your entire property, our team has the expertise to handle projects of any scale. We work efficiently to minimize disruption while delivering outstanding results.',
    image: '/assets/generated/service-renovation.dim_300x300.png',
    features: ['Kitchen Remodeling', 'Bathroom Renovation', 'Home Extensions', 'Structural Updates'],
  },
  {
    title: 'Civil Contracting',
    description: 'Our comprehensive civil contracting services cover all aspects of construction projects. From site preparation to structural work, we provide reliable and professional services that form the foundation of successful projects. Our experienced team ensures compliance with all regulations and standards.',
    image: '/assets/generated/service-civil.dim_300x300.png',
    features: ['Site Development', 'Foundation Work', 'Structural Engineering', 'Project Management'],
  },
];

export default function Services() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive construction and interior design solutions tailored to your specific needs
          </p>
        </div>

        <div className="space-y-12">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
