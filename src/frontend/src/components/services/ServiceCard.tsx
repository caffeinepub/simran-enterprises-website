import { Card, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';

interface ServiceCardProps {
  service: {
    title: string;
    description: string;
    image: string;
    features: string[];
  };
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const isEven = index % 2 === 0;

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow">
      <CardContent className="p-0">
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-0 ${isEven ? '' : 'md:grid-flow-dense'}`}>
          <div className={`${isEven ? '' : 'md:col-start-2'}`}>
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover min-h-[300px]"
            />
          </div>
          <div className="p-8 flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{service.title}</h3>
            <p className="text-muted-foreground mb-6">{service.description}</p>
            <div className="space-y-2">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
