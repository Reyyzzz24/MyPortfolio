// Ganti BrowserRouter menjadi HashRouter
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
    // HashRouter adalah solusi terbaik untuk GitHub Pages agar tidak 404/blank
    <Router>
      <div className="bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300 min-h-screen">
        <Navbar />
        
        <main className="w-full"> 
          <Routes>
            {/* Rute Utama */}
            <Route path="/" element={<HomePage />} />
            
            {/* Rute Halaman Tambahan */}
            <Route path="/DesignPhotography" element={<DesignPhotography />} />
            <Route path="/VideoEditing" element={<VideoEditing />} />

            {/* SOLUSI KRUSIAL: Jika user mengakses /MyPortfolio/ tanpa hash, 
                atau rute tidak dikenal, paksa tampilkan HomePage */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;