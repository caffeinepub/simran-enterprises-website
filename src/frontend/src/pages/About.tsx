import { MapPin, Award, Target, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About Simran Enterprises</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your trusted partner for quality construction and interior design services
          </p>
        </div>

        {/* Owner & Company Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="/assets/generated/owner-portrait.dim_400x400.png"
              alt="Sandeep Paswan - Owner"
              className="rounded-lg shadow-xl w-full max-w-md mx-auto"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Meet Our Founder</h2>
            <p className="text-lg text-muted-foreground mb-4">
              <span className="font-semibold text-foreground">Sandeep Paswan</span>, the visionary behind Simran Enterprises, has dedicated years to building a company that stands for quality, integrity, and customer satisfaction.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              With a passion for construction and design, Sandeep has led our team to successfully complete numerous residential and commercial projects, earning the trust of clients throughout the region.
            </p>
            <div className="flex items-start space-x-3 text-muted-foreground">
              <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-foreground">Our Location</p>
                <p>Mahatma Jyotiba Phule Nagar, Near Water Tank</p>
                <p>Ambernath (West) 421502</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-card p-8 rounded-lg shadow-md">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">Our Mission</h3>
            <p className="text-muted-foreground">
              To deliver exceptional construction and interior design services that transform spaces and exceed client expectations through quality craftsmanship and innovative solutions.
            </p>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-md">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
              <Award className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">Our Vision</h3>
            <p className="text-muted-foreground">
              To be the most trusted and preferred construction and interior design company in the region, known for our commitment to quality, innovation, and customer satisfaction.
            </p>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-md">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
              <Heart className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">Our Values</h3>
            <p className="text-muted-foreground">
              Integrity, quality, customer focus, and innovation guide everything we do. We believe in building lasting relationships through honest communication and exceptional service.
            </p>
          </div>
        </div>

        {/* Company Details */}
        <div className="bg-muted/30 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Company Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Business Name</p>
              <p className="text-lg font-semibold text-foreground">Simran Enterprises</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Owner</p>
              <p className="text-lg font-semibold text-foreground">Sandeep Paswan</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Services</p>
              <p className="text-lg font-semibold text-foreground">All Types Civil Works & Interior Designs</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">GST Number</p>
              <p className="text-lg font-semibold text-foreground">27DEQPP2708B1ZG</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
