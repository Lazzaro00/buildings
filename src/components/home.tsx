import Navigation from './Navigation';
import Hero from './Hero';
import CurrentProject from './CurrentProject';
import Portfolio from './Portfolio';
import Testimonials from './Testimonials';
import Contact from './Contact';

function Home() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Navigation />
      <Hero />
      <CurrentProject />
      <Portfolio />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default Home;