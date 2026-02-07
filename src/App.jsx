import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Courses from './components/Courses';
import Levels from './components/Levels';
import Benefits from './components/Benefits';
import Duration from './components/Duration';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Enroll from './components/Enroll';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import PopupForm from "./components/PopUpform";
function App() {
  return (
    <div className="min-h-screen bg-[#FAF6F0]">
      <Navbar />
      <main>
        <PopupForm />
        <Hero />
        <About />
        <WhyChooseUs />
        <Courses />
        <Levels />
        <Benefits />
        <Duration />
        <Testimonials />
        <Contact />
        <Enroll />
        <Footer />
      </main>
      <WhatsAppButton />
    </div>
  );
}

export default App;
