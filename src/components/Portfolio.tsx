import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Complesso Residenziale Moderno',
    category: 'Residenziale',
    image: '/renders/render7.jpg',
    description: 'Abitazioni contemporanee con terrazze verdi'
  },
  {
    id: 2,
    title: 'Sviluppo Urbano',
    category: 'Commerciale',
    image: '/renders/render2.jpg',
    description: 'Architettura urbana sostenibile'
  },
  {
    id: 3,
    title: 'Appartamenti di Lusso',
    category: 'Residenziale',
    image: '/renders/render6.jpg',
    description: 'Sviluppo residenziale premium'
  },
  {
    id: 4,
    title: 'Complesso Eco-Sostenibile',
    category: 'Residenziale',
    image: '/renders/render8.jpg',
    description: 'Design residenziale ecologico'
  },
  {
    id: 5,
    title: 'Abitazioni Contemporanee',
    category: 'Residenziale',
    image: '/renders/render9.jpg',
    description: 'Eccellenza architettonica moderna'
  },
  {
    id: 6,
    title: 'Residenze con Cortile',
    category: 'Residenziale',
    image: '/renders/render14.jpg',
    description: 'Spazi abitativi con giardino privato'
  },
  {
    id: 7,
    title: 'Sviluppo Vista Strada',
    category: 'Commerciale',
    image: '/renders/render16.jpg',
    description: 'Design di integrazione urbana'
  },
  {
    id: 8,
    title: 'Abitazioni con Terrazza',
    category: 'Residenziale',
    image: '/renders/render11.jpg',
    description: 'Appartamenti con giardino sul balcone'
  },
  {
    id: 9,
    title: 'Complesso Vista Aerea',
    category: 'Commerciale',
    image: '/renders/render3.jpg',
    description: 'Sviluppo su larga scala'
  }
];

const categories = ['Tutti', 'Residenziale', 'Commerciale'];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('Tutti');

  const filteredProjects = selectedCategory === 'Tutti' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

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
            Il Nostro Portfolio
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Esplora la nostra collezione di progetti eccezionali che dimostrano il nostro impegno per la qualità e l'artigianalità
          </p>
        </motion.div>

        <div className="flex justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 flex-wrap px-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 sm:px-6 py-2 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                selectedCategory === category
                  ? 'bg-[#9d8665] text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group cursor-pointer bg-white">
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                      <p className="text-xs sm:text-sm mb-2">{project.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 truncate">{project.title}</h3>
                    <span className="text-xs sm:text-sm text-[#9d8665] font-medium whitespace-nowrap">{project.category}</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}