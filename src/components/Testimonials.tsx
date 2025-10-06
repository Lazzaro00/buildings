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
    name: 'Sarah Johnson',
    role: 'Homeowner',
    content: 'Heritage Builders transformed our vision into reality. Their attention to detail and commitment to quality is unmatched. Our dream home exceeded all expectations.',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    projectImage: '/renders/render10.jpg'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Business Owner',
    content: 'The commercial space they built for us is stunning. Professional, on-time, and within budget. I highly recommend Heritage Builders for any construction project.',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
    projectImage: '/renders/render13.jpg'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Property Developer',
    content: 'Working with Heritage Builders has been an absolute pleasure. Their craftsmanship and dedication to excellence shine through in every project.',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
    projectImage: '/renders/render15.jpg'
  },
  {
    id: 4,
    name: 'David Martinez',
    role: 'Architect',
    content: 'The level of precision and care in executing our designs is remarkable. Heritage Builders brings architectural visions to life with exceptional quality.',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
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
            Client Testimonials
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Hear what our satisfied clients have to say about their experience with Heritage Builders
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
                          alt="Project"
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