import ImageGrid from '../components/gallery/ImageGrid';

const projects = [
  {
    title: 'Modern Living Room',
    image: '/assets/generated/gallery-interior-1.dim_800x600.png',
    category: 'Interior Design',
  },
  {
    title: 'Contemporary Kitchen',
    image: '/assets/generated/gallery-interior-2.dim_800x600.png',
    category: 'Interior Design',
  },
  {
    title: 'Residential Building',
    image: '/assets/generated/gallery-residential-1.dim_800x600.png',
    category: 'Residential',
  },
  {
    title: 'Commercial Complex',
    image: '/assets/generated/gallery-commercial-1.dim_800x600.png',
    category: 'Commercial',
  },
];

export default function Gallery() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Projects</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our portfolio of completed construction and interior design projects
          </p>
        </div>

        <ImageGrid projects={projects} />
      </div>
    </div>
  );
}
