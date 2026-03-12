import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Expertise } from './components/Expertise';
import { Process } from './components/Process';
import { Impact } from './components/Impact';
import { CaseStudy } from './components/CaseStudy';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Process />
        <Impact />
        <CaseStudy />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
