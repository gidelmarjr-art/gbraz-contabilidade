import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Services } from "./components/sections/Services";
import { Testimonials } from "./components/sections/Testimonials";
import { Faq } from "./components/sections/Faq";
import { Contact } from "./components/sections/Contact";

function App() {
  return (
    <div className="min-h-screen bg-navy-950">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
