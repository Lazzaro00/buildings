import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToCurrentProject = () => {
    const element = document.getElementById('current-project');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/renders/render1.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative h-full flex flex-col items-center justify-center text-white px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
            Costruzioni Infinity 3.0
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 text-white/90">
            Eccellenza Artigianale in Ogni Struttura dal 1985
          </p>
          <motion.button
            onClick={scrollToCurrentProject}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#9d8665] hover:bg-[#8a7558] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-colors inline-flex items-center gap-2"
          >
            Scopri il Cantiere Attuale
            <ArrowDown className="w-5 h-5" />
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}