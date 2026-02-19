import { useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';

interface Project {
  title: string;
  image: string;
  category: string;
}

interface ImageGridProps {
  projects: Project[];
}

export default function ImageGrid({ projects }: ImageGridProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <Badge className="w-fit mb-2 bg-secondary text-secondary-foreground">
                {project.category}
              </Badge>
              <h3 className="text-xl font-bold text-primary-foreground">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl">
          <DialogTitle className="text-2xl font-bold">{selectedProject?.title}</DialogTitle>
          {selectedProject && (
            <div className="mt-4">
              <Badge className="mb-4 bg-primary text-primary-foreground">
                {selectedProject.category}
              </Badge>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full rounded-lg"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
