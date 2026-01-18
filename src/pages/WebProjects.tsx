const projects = [
  {
    title: "E-Commerce App",
    description: "Platform belanja online dengan integrasi payment gateway dan manajemen stok real-time.",
    tech: ["React", "Tailwind", "Firebase"],
    link: "#",
    github: "#",
    // Gambar bertema shopping online/coding dashboard
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Portfolio Website",
    description: "Website personal dengan fitur dark mode, animasi framer-motion, dan desain responsif.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    link: "#",
    github: "#",
    // Gambar bertema minimal modern web design
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Task Management Tool",
    description: "Aplikasi kolaborasi tim untuk mengelola tugas dengan fitur drag-and-drop.",
    tech: ["React", "Redux", "Node.js"],
    link: "#",
    github: "#",
    // Gambar bertema productivity/kanban board
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=800&auto=format&fit=crop"
  }
];

const WebProjects = () => {
  return (
    <section id="portofolios" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Header Bagian */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl">
            Berikut adalah beberapa proyek web yang telah saya kerjakan. Fokus pada performa, aksesibilitas, dan pengalaman pengguna yang maksimal.
          </p>
        </div>

        {/* Grid Proyek */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              {/* Gambar Proyek */}
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Konten Proyek */}
              <div className="p-6">
                <div className="flex gap-2 mb-4 flex-wrap">
                  {project.tech.map((tag, i) => (
                    <span 
                      key={i} 
                      className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Tombol Link */}
                <div className="flex items-center space-x-4">
                  <a 
                    href={project.link} 
                    className="flex items-center text-sm font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition"
                  >
                    Live Demo 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <a 
                    href={project.github} 
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition"
                  >
                    <span className="text-sm font-medium italic">GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebProjects;