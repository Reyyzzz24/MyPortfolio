const Portfolio = () => {
  const projects = [
    {
      title: "Machine Learning",
      image: "./images/portofolios/figure4.jpg",
      tags: ["Machine Learning", "Data Science", "TensorFlow"],
      description: "These are some machine learning projects I worked on at university, applying various techniques to real-world problems.",
      link: "https://github.com/Reyyzzz24/Machine-Learning"
    },
    {
      title: "Web & Mobile App",
      image: "./images/portofolios/figure2.jpg",
      tags: ["Web Dev", "UI/UX", "Mobile App"],
      description: "Developed and deployed dynamic applications focusing on performance, security, and user-friendly design.",
      link: "/"
    },
    {
      title: "Video Editing",
      image: "./images/portofolios/figure6.jpg",
      tags: ["Premiere Pro", "Motion Graphics", "VFX"],
      description: "Cinematic films and animations, showcasing my skills in editing, animation, and visual storytelling.",
      link: "#/VideoEditing"
    },
    {
      title: "Game Project",
      image: "./images/portofolios/figure7.webp",
      tags: ["Game Dev", "Unity", "GML"],
      description: "Pixel game projects using GameMaker, focusing on 2D mechanics, AI, and interactive gameplay.",
      link: "https://github.com/Reyyzzz24/Game-Project"
    },
    {
      title: "Design & Photography",
      image: "./images/portofolios/figure8.jpg",
      tags: ["Graphic Design", "Photography", "Photoshop"],
      description: "Exploring visual composition, branding, and creative storytelling through graphics and photography.",
      link: "#/DesignPhotography" // Ganti dari design&photography.html ke /portfolio
    }
  ];

  return (
    <section id="portofolios" className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto max-w-7xl px-6 md:px-12">
        {/* Header Section */}
        <div className="mb-16">
          <h3 className="text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-widest text-sm">
            My Works
          </h3>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 text-gray-900 dark:text-white">
            Featured Portfolios
          </h1>
        </div>

        {/* Portofolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* Content Container */}
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h4>
                  <a
                    href={project.link}
                    className="p-2 bg-blue-50 dark:bg-gray-700 rounded-full text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition-all shadow-sm"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z" />
                    </svg>
                  </a>
                </div>

                {/* Tags */}
                <div className="flex space-x-2 overflow-x-auto no-scrollbar mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase rounded-full whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;