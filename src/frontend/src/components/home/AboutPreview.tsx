import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function AboutPreview() {
  const navigate = useNavigate();

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Welcome to Simran Enterprises
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Led by <span className="font-semibold text-foreground">Sandeep Paswan</span>, Simran Enterprises has been delivering exceptional construction and interior design services in Ambernath and surrounding areas.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              We specialize in all types of civil works and interior designs, bringing your vision to life with quality craftsmanship, timely delivery, and unwavering commitment to customer satisfaction.
            </p>
            <Button
              onClick={() => navigate({ to: '/about' })}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Learn More About Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="/assets/generated/owner-portrait.dim_400x400.png"
              alt="Sandeep Paswan - Owner"
              className="rounded-lg shadow-xl w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
