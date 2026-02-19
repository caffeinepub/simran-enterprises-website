import { Mail, Phone, MapPin, Heart } from 'lucide-react';
import { SiFacebook, SiInstagram, SiLinkedin, SiX } from 'react-icons/si';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(window.location.hostname || 'simran-enterprises');

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src="/assets/generated/logo.dim_200x200.png" alt="Simran Enterprises" className="h-12 w-12" />
              <h3 className="text-xl font-bold">Simran Enterprises</h3>
            </div>
            <p className="text-sm text-primary-foreground/90 mb-4">
              All Types Civil Works & Interior Designs
            </p>
            <p className="text-xs text-primary-foreground/80">
              GST: 27DEQPP2708B1ZG
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <a href="tel:9022119244" className="flex items-center space-x-2 hover:text-secondary transition-colors">
                <Phone className="h-4 w-4" />
                <span>9022119244</span>
              </a>
              <a href="tel:7754910092" className="flex items-center space-x-2 hover:text-secondary transition-colors">
                <Phone className="h-4 w-4" />
                <span>7754910092</span>
              </a>
              <a href="mailto:simranenterprises06082013@gmail.com" className="flex items-center space-x-2 hover:text-secondary transition-colors">
                <Mail className="h-4 w-4" />
                <span className="break-all">simranenterprises06082013@gmail.com</span>
              </a>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>Mahatma Jyotiba Phule Nagar, Near Water Tank, Ambernath (West) 421502</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Facebook">
                <SiFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Instagram">
                <SiInstagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors" aria-label="LinkedIn">
                <SiLinkedin className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors" aria-label="X (Twitter)">
                <SiX className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm">
          <p className="text-primary-foreground/80">
            © {currentYear} Simran Enterprises. All rights reserved.
          </p>
          <p className="mt-2 text-primary-foreground/70">
            Built with <Heart className="inline h-4 w-4 text-secondary" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
