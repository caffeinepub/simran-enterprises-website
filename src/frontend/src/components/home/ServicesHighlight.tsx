import { useNavigate } from '@tanstack/react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    title: 'Residential Construction',
    description: 'Custom homes built to your specifications with quality materials and expert craftsmanship.',
    image: '/assets/generated/service-residential.dim_300x300.png',
  },
  {
    title: 'Commercial Construction',
    description: 'Professional commercial spaces designed for functionality and aesthetic appeal.',
    image: '/assets/generated/service-commercial.dim_300x300.png',
  },
  {
    title: 'Interior Designing',
    description: 'Transform your spaces with innovative and stylish interior design solutions.',
    image: '/assets/generated/service-interior.dim_300x300.png',
  },
  {
    title: 'Renovation & Remodeling',
    description: 'Breathe new life into existing structures with our renovation expertise.',
    image: '/assets/generated/service-renovation.dim_300x300.png',
  },
  {
    title: 'Civil Contracting',
    description: 'Comprehensive civil engineering services for all your construction needs.',
    image: '/assets/generated/service-civil.dim_300x300.png',
  },
];

export default function ServicesHighlight() {
  const navigate = useNavigate();

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive construction and design solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="cursor-pointer hover:shadow-teal-glow transition-all duration-300 hover:-translate-y-1"
              onClick={() => navigate({ to: '/services' })}
            >
              <CardHeader>
                <div className="mb-4">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-md"
                  />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
