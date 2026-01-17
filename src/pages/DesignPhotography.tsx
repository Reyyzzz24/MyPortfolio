import { useState } from 'react';
import { motion, type Variants, AnimatePresence } from 'framer-motion';

const DesignPhotography = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.5 } 
    }
  };

  const designItems = [
    { src: "https://ar-hosting.pages.dev/1740927219082.jpg", title: "Minimalist Poster", tag: "Branding", color: "blue", desc: "A modern minimalist poster design with clean typography." },
    { src: "https://ar-hosting.pages.dev/1740927218274.jpg", title: "Social Media Banner", tag: "Marketing", color: "green", desc: "A vibrant social media banner designed for promotional content." },
    { src: "https://ar-hosting.pages.dev/1740927219888.jpg", title: "Product Packaging", tag: "Packaging", color: "purple", desc: "A sleek product packaging concept emphasizing brand identity." },
    { src: "https://ar-hosting.pages.dev/1740927226326.jpg", title: "Typography Experiment", tag: "Artistic", color: "yellow", desc: "An artistic typography design exploring creative letterforms." },
    { src: "https://ar-hosting.pages.dev/1740927228041.jpg", title: "UI/UX Concept", tag: "Interface", color: "pink", desc: "A user interface and experience design for a mobile app." },
    { src: "https://ar-hosting.pages.dev/1740927228934.jpg", title: "Brand Identity", tag: "Corporate", color: "indigo", desc: "A cohesive brand identity design including logo and branding." },
    { src: "https://ar-hosting.pages.dev/1740927220691.jpg", title: "Business Card", tag: "Stationery", color: "red", desc: "A professional business card layout with modern aesthetics." },
    { src: "https://ar-hosting.pages.dev/1740927227210.jpg", title: "Infographic", tag: "Data", color: "cyan", desc: "A visually engaging infographic with clear data representation." },
    { src: "https://ar-hosting.pages.dev/1740927222290.jpg", title: "Magazine Cover", tag: "Editorial", color: "orange", desc: "A bold and stylish magazine cover layout design." },
    { src: "https://ar-hosting.pages.dev/1740927261624.jpg", title: "Nature Layout", tag: "Nature", color: "emerald", desc: "A visually refreshing design inspired by the beauty of nature." },
    { src: "https://ar-hosting.pages.dev/1740927867946.jpg", title: "Movie Poster", tag: "Cinema", color: "rose", desc: "A modern movie poster layout with expressive textures." },
  ];

  const photos = [
    "1740928494502", "1740928492475", "1740928490612", "1740928491516", "1740928493501",
    "1740928500844", "1740928498814", "1740928499757", "1740928501839", "1740928502748",
    "1740928503648", "1740928504579", "1740928512036", "1740928507699", "1740928506572",
    "1740928505481", "1740929511965", "1740929512766", "1740929514184", "1740929450951",
    "1740929450046", "1740929452956"
  ];

  return (
    /* PERBAIKAN: bg-white menjadi bg-transparent agar CursorBlur di App.js terlihat */
    <div className="bg-transparent text-gray-900 dark:text-gray-100 transition-colors duration-300 antialiased relative min-h-screen">
      
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 cursor-zoom-out backdrop-blur-md"
          >
            <button 
              className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all"
              onClick={() => setSelectedImg(null)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={selectedImg}
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- DESIGN SECTION --- */}
      {/* PERBAIKAN: Menggunakan bg-transparent */}
      <section id="design-layout" className="pt-32 pb-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h3 className="text-blue-600 font-semibold uppercase tracking-[0.4em] text-xs mb-3">Portfolio</h3>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Design & Layout</h1>
            <div className="h-1.5 w-20 bg-blue-600 mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.5)]"></div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {designItems.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                /* PERBAIKAN: bg-gray-50 menjadi transparan + glassmorphism */
                className="group bg-white/40 dark:bg-gray-800/40 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 dark:border-gray-700/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedImg(item.src)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={item.src} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8 text-center">
                  <span className={`inline-block px-3 py-1 text-[10px] font-bold tracking-widest uppercase bg-blue-100/50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full mb-4`}>
                    {item.tag}
                  </span>
                  <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- PHOTOGRAPHY SECTION --- */}
      {/* PERBAIKAN: bg-gray-50/80 (untuk mode terang agar tetap bersih tapi tembus pandang) */}
      <section id="photography" className="py-24 bg-gray-50 dark:bg-gray-800/50 backdrop-blur-sm border-t border-gray-100/10 dark:border-gray-800/50">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h3 className="text-blue-600 font-semibold uppercase tracking-[0.4em] text-xs mb-2">Visual Arts</h3>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Photography</h1>
            </div>
            <p className="text-gray-500 dark:text-gray-400 max-w-md text-sm leading-relaxed">
              Capturing moments through the lens, exploring light, and telling stories without words.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
          >
            {photos.map((id, idx) => {
              const imgSrc = `https://ar-hosting.pages.dev/${id}.jpg`;
              return (
                <motion.div 
                  key={idx}
                  variants={itemVariants}
                  className="aspect-square overflow-hidden rounded-2xl shadow-sm group relative bg-gray-200/50 dark:bg-gray-800/50 cursor-pointer border border-white/10"
                  onClick={() => setSelectedImg(imgSrc)}
                >
                  <img src={imgSrc} alt={`Photography ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                     <svg className="w-8 h-8 text-white opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                     </svg>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DesignPhotography;