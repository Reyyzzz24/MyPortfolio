import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import DesignPhotography from "./pages/DesignPhotography"; 
import VideoEditing from "./pages/VideoEditing"; 
import ScrollToTop from "./components/ScrollToTop";
import CursorBlur from "./components/CursorBlur"; // Pastikan sudah diimport

const HomePage = () => (
  <>
    <Hero />
    <Services />
    <Projects />
    <Skills />
    <Contact />
  </>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* 1. Kontainer Paling Luar */}
      <div className="bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300 min-h-screen">
        
        {/* 2. Pindahkan Navbar, CursorBlur, dan Main ke dalam satu grup isolate yang sama */}
        <div className="relative isolate">
          
          {/* Layer paling dasar */}
          <CursorBlur />

          {/* Navbar sekarang sejajar dengan main, berada di depan blur */}
          <div className="relative z-10">
            <Navbar />
            
            <main className="w-full"> 
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/DesignPhotography" element={<DesignPhotography />} />
                <Route path="/VideoEditing" element={<VideoEditing />} />
                <Route path="*" element={<HomePage />} />
              </Routes>
            </main>
          </div>
          
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;