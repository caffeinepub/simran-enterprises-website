import { Award, Clock, Users, ThumbsUp } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Quality Workmanship',
    description: 'We use premium materials and employ skilled craftsmen to ensure the highest quality in every project.',
  },
  {
    icon: Users,
    title: 'Experienced Team',
    description: 'Our team of professionals brings years of expertise in construction and interior design.',
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    description: 'We respect your time and ensure projects are completed within agreed timelines.',
  },
  {
    icon: ThumbsUp,
    title: 'Customer Satisfaction',
    description: 'Your satisfaction is our priority. We work closely with you to exceed expectations.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We are committed to delivering excellence in every aspect of our work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-card hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
