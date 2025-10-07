import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  detailedDescription: string;
  images: string[];
  specs: {
    area: string;
    duration: string;
    location: string;
    year: string;
  };
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Residence Portalge',
    category: 'Residenziale',
    image: '/progetto1-1.jpg',
    description: 'Complesso residenziale di lusso',
    detailedDescription: 'Un elegante complesso residenziale che unisce design moderno e comfort abitativo. Caratterizzato da finiture di pregio, ampi spazi e una posizione strategica nel cuore di Polignano a Mare. Il progetto include appartamenti con vista panoramica e servizi esclusivi per i residenti.',
    images: ['/progetto1-1.jpg', '/progetto1-2.jpg', '/renders/render10.jpg'],
    specs: {
      area: '3.200 m²',
      duration: '16 mesi',
      location: 'Polignano, Bari',
      year: '2022'
    }
  },
  {
    id: 2,
    title: 'Residenze Moderne',
    category: 'Residenziale',
    image: '/progetto2-1.jpg',
    description: 'Complesso residenziale contemporaneo',
    detailedDescription: 'Un progetto residenziale innovativo che combina architettura contemporanea e sostenibilità ambientale. Situato a Monopoli, offre appartamenti moderni con spazi verdi comuni, parcheggi privati e tecnologie eco-sostenibili per il massimo comfort abitativo.',
    images: ['/progetto2-1.jpg', '/progetto2-2.jpg', '/progetto2-3.jpg'],
    specs: {
      area: '4.800 m²',
      duration: '18 mesi',
      location: 'Monopoli, Bari',
      year: '2023'
    }
  },
  {
    id: 3,
    title: 'Velalta',
    category: 'Residenziale',
    image: '/progetto3-1.jpg',
    description: 'Residenze di prestigio urbane',
    detailedDescription: 'Un complesso residenziale di alta gamma nel cuore di Bari. Velalta rappresenta l\'eccellenza nell\'edilizia moderna, con appartamenti spaziosi, terrazze panoramiche, aree comuni eleganti e un\'attenzione particolare ai dettagli architettonici. Un progetto che ridefinisce il concetto di vita urbana di lusso.',
    images: ['/progetto3-1.jpg', '/progetto3-2.jpg', '/progetto3-3.jpg'],
    specs: {
      area: '5.500 m²',
      duration: '20 mesi',
      location: 'Bari',
      year: '2023'
    }
  }
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Progetti Completati
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Esplora i nostri progetti più prestigiosi che dimostrano eccellenza e maestria artigianale
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                className="overflow-hidden group cursor-pointer bg-white hover:shadow-2xl transition-shadow duration-300"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <p className="text-sm mb-2">{project.description}</p>
                      <p className="text-xs text-white/80">Clicca per saperne di più →</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs sm:text-sm text-[#9d8665] font-semibold mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">
                    {project.title}
                  </h3>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl sm:text-3xl font-bold text-gray-900">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="text-base text-[#9d8665] font-semibold">
                  {selectedProject.category}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                {/* Galleria Immagini */}
                <div className="grid grid-cols-1 gap-4">
                  <div className="relative h-64 sm:h-80 rounded-lg overflow-hidden">
                    <img
                      src={selectedProject.images[0]}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {selectedProject.images.slice(1).map((img, idx) => (
                      <div key={idx} className="relative h-32 sm:h-40 rounded-lg overflow-hidden">
                        <img
                          src={img}
                          alt={`${selectedProject.title} - ${idx + 2}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Descrizione */}
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Descrizione Progetto</h4>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedProject.detailedDescription}
                  </p>
                </div>

                {/* Specifiche */}
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Specifiche Tecniche</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-600 mb-1">Superficie</p>
                      <p className="text-lg font-bold text-[#9d8665]">{selectedProject.specs.area}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-600 mb-1">Durata</p>
                      <p className="text-lg font-bold text-[#9d8665]">{selectedProject.specs.duration}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-600 mb-1">Località</p>
                      <p className="text-lg font-bold text-[#9d8665]">{selectedProject.specs.location}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-600 mb-1">Anno</p>
                      <p className="text-lg font-bold text-[#9d8665]">{selectedProject.specs.year}</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}