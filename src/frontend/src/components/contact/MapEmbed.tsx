import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function MapEmbed() {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.8!2d73.2!3d19.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDEyJzAwLjAiTiA3M8KwMTInMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890";

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Find Us Here</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
          <iframe
            src={mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Simran Enterprises Location"
          />
        </div>
        <p className="text-sm text-muted-foreground mt-4 text-center">
          Mahatma Jyotiba Phule Nagar, Near Water Tank, Ambernath (West) 421502
        </p>
      </CardContent>
    </Card>
  );
}
