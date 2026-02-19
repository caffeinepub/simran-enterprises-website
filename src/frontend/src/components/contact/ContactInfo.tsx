import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ContactInfo() {
  const whatsappNumber = '919022119244';
  const whatsappMessage = encodeURIComponent('Hello! I would like to inquire about your construction services.');

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Get In Touch</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">Phone Numbers</p>
                <a href="tel:9022119244" className="text-muted-foreground hover:text-primary transition-colors block">
                  9022119244
                </a>
                <a href="tel:7754910092" className="text-muted-foreground hover:text-primary transition-colors block">
                  7754910092
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">Email</p>
                <a
                  href="mailto:simranenterprises06082013@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors break-all"
                >
                  simranenterprises06082013@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">Address</p>
                <p className="text-muted-foreground">
                  Mahatma Jyotiba Phule Nagar, Near Water Tank<br />
                  Ambernath (West) 421502
                </p>
              </div>
            </div>
          </div>

          <Button
            className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
            onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Chat on WhatsApp
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-muted/30">
        <CardContent className="pt-6">
          <h3 className="font-semibold text-foreground mb-2">Business Hours</h3>
          <p className="text-sm text-muted-foreground">Monday - Saturday: 9:00 AM - 7:00 PM</p>
          <p className="text-sm text-muted-foreground">Sunday: By Appointment</p>
        </CardContent>
      </Card>
    </div>
  );
}
