import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card } from '@/components/ui/card';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
  projectImage: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sofia Bianchi',
    role: 'Proprietaria di Casa',
    content: 'Costruzioni Infinity 3.0 ha trasformato la nostra visione in realtà. La loro attenzione ai dettagli e l\'impegno per la qualità sono ineguagliabili. La casa dei nostri sogni ha superato ogni aspettativa.',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sofia',
    projectImage: '/renders/render10.jpg'
  },
  {
    id: 2,
    name: 'Marco Rossi',
    role: 'Imprenditore',
    content: 'Lo spazio commerciale che hanno costruito per noi è stupendo. Professionali, puntuali e nel budget. Consiglio vivamente Costruzioni Infinity 3.0 per qualsiasi progetto edilizio.',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marco',
    projectImage: '/renders/render13.jpg'
  },
  {
    id: 3,
    name: 'Giulia Ferrari',
    role: 'Sviluppatrice Immobiliare',
    content: 'Lavorare con Costruzioni Infinity 3.0 è stato un piacere assoluto. La loro maestria e dedizione all\'eccellenza brillano in ogni progetto.',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Giulia',
    projectImage: '/renders/render15.jpg'
  },
  {
    id: 4,
    name: 'Alessandro Conti',
    role: 'Architetto',
    content: 'Il livello di precisione e cura nell\'esecuzione dei nostri progetti è notevole. Costruzioni Infinity 3.0 porta le visioni architettoniche alla vita con qualità eccezionale.',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alessandro',
    projectImage: '/renders/render4.jpg'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Testimonianze dei Clienti
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Scopri cosa dicono i nostri clienti soddisfatti della loro esperienza con Costruzioni Infinity 3.0
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto px-4"
        >
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id}>
                  <Card className="p-6 sm:p-8 md:p-12 bg-gray-50 border-none shadow-lg">
                    <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
                      <div className="order-2 md:order-1">
                        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#9d8665]"
                          />
                          <div>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                              {testimonial.name}
                            </h3>
                            <p className="text-sm sm:text-base text-[#9d8665] font-medium">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                        <p className="text-base sm:text-lg text-gray-700 leading-relaxed italic">
                          "{testimonial.content}"
                        </p>
                      </div>
                      <div className="order-1 md:order-2">
                        <img
                          src={testimonial.projectImage}
                          alt="Progetto"
                          className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-lg shadow-md"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex left-0 -translate-x-12" />
            <CarouselNext className="hidden sm:flex right-0 translate-x-12" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}