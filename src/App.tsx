import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import DesignPhotography from "./pages/DesignPhotography"; // Pastikan path file benar
import VideoEditing from "./pages/VideoEditing"; // Pastikan path file benar  

// Kita bungkus konten utama ke dalam satu komponen agar rapi
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
      <div className="bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300 min-h-screen">
        <Navbar />
        
        <main className="w-full"> 
          <Routes>
            {/* Halaman Utama */}
            <Route path="/" element={<HomePage />} />
            
            {/* Halaman Baru Design & Photography */}
            <Route path="/DesignPhotography" element={<DesignPhotography />} />
            <Route path="/VideoEditing" element={<VideoEditing />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;