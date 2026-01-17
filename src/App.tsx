// GANTI BrowserRouter menjadi HashRouter
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

// Komponen Pembungkus Halaman Utama
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
    // Menggunakan HashRouter agar routing ditangani oleh React, bukan server GitHub
    <Router>
      <div className="bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300 min-h-screen">
        <Navbar />
        
        <main className="w-full"> 
          <Routes>
            {/* Halaman Utama */}
            <Route path="/" element={<HomePage />} />
            
            {/* Halaman Internal */}
            <Route path="/DesignPhotography" element={<DesignPhotography />} />
            <Route path="/VideoEditing" element={<VideoEditing />} />

            {/* PENTING: Rute pengaman jika path tidak ditemukan */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;