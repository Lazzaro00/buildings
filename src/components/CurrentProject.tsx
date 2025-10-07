import { motion } from 'framer-motion';
import { Building2, Users, Calendar, MapPin } from 'lucide-react';

export default function CurrentProject() {
  return (
    <section id="current-project" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#9d8665] to-[#7a6850] text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Cantiere Attuale
          </h2>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto px-4">
            Scopri il nostro progetto in corso e la passione che mettiamo in ogni dettaglio
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Borgo San Nicola
              </h3>
              <p className="text-base sm:text-lg text-white/90 leading-relaxed mb-6">
                Un complesso residenziale di prestigio nel cuore della Puglia. 
                Stiamo costruendo 53 appartamenti moderni che combinano tradizione e innovazione, 
                con spazi pensati per il comfort e la qualità della vita. Un progetto che valorizza 
                il territorio e crea una nuova comunità residenziale.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Building2 className="w-8 h-8 mb-2" />
                <p className="text-sm text-white/80">Appartamenti</p>
                <p className="text-xl font-bold">53 Unità</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Users className="w-8 h-8 mb-2" />
                <p className="text-sm text-white/80">Team</p>
                <p className="text-xl font-bold">40 Esperti</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Calendar className="w-8 h-8 mb-2" />
                <p className="text-sm text-white/80">Completamento</p>
                <p className="text-xl font-bold">Giugno 2027</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <MapPin className="w-8 h-8 mb-2" />
                <p className="text-sm text-white/80">Località</p>
                <p className="text-xl font-bold">Ceglie, Bari</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h4 className="text-xl font-semibold mb-3">Chi Siamo</h4>
              <p className="text-white/90 leading-relaxed">
                Costruzioni Infinity 3.0 è un'azienda familiare con oltre 35 anni di esperienza 
                nel settore edilizio. La nostra missione è creare spazi che ispirano, utilizzando 
                materiali di prima qualità e tecniche costruttive innovative. Ogni progetto è 
                un'opera d'arte che riflette la nostra dedizione all'eccellenza.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="relative h-64 sm:h-80 rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/renders/render1.jpg"
                alt="Cantiere Borgo San Nicola"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                In Costruzione
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-32 sm:h-40 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/renders/render5.jpg"
                  alt="Dettaglio cantiere"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative h-32 sm:h-40 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/renders/render12.jpg"
                  alt="Progetto render"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}