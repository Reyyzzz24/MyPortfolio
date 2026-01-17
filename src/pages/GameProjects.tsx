const gameProjects = [
  {
    title: "Cyber Rush: Neon City",
    genre: "Endless Runner",
    description: "Game arcade bertema futuristik yang dibuat dengan Unity. Memenangkan peringkat ke-3 dalam Global Game Jam 2025.",
    platform: "PC / Web",
    image: "https://via.placeholder.com/800x450", // Gunakan rasio 16:9
    playLink: "#",
    tech: ["C#", "Unity", "Blender"]
  },
  {
    title: "Kingdom Defense",
    genre: "Tower Defense",
    description: "Game strategi di mana pemain harus mempertahankan benteng dari serangan orc menggunakan berbagai menara sihir.",
    platform: "Android / iOS",
    image: "https://via.placeholder.com/800x450",
    playLink: "#",
    tech: ["Godot", "GDScript", "Aseprite"]
  }
];

const GameProject = () => {
  return (
    <section id="game-projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Game <span className="text-purple-600">Development</span>
            </h2>
            <div className="w-20 h-1.5 bg-purple-600 rounded-full"></div>
            <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-xl">
              Selain pengembangan web, saya juga antusias dalam menciptakan pengalaman interaktif melalui pembuatan game indie.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="text-sm font-semibold px-4 py-2 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-full border border-purple-100 dark:border-purple-800">
              Total Proyek: {gameProjects.length}
            </span>
          </div>
        </div>

        {/* Game Cards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {gameProjects.map((game, index) => (
            <div 
              key={index}
              className="group relative bg-gray-50 dark:bg-gray-800/50 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-purple-500 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={game.image} 
                  alt={game.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay Play Button */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <a 
                    href={game.playLink}
                    className="bg-white text-black p-4 rounded-full scale-75 group-hover:scale-100 transition-transform duration-300 shadow-xl"
                   >
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                     </svg>
                   </a>
                </div>
                {/* Genre Tag */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-white text-xs font-bold rounded-lg uppercase tracking-widest">
                    {game.genre}
                  </span>
                </div>
              </div>

              {/* Game Info */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 transition-colors">
                    {game.title}
                  </h3>
                  <span className="text-xs font-mono text-gray-500 dark:text-gray-400">{game.platform}</span>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-2">
                  {game.description}
                </p>

                {/* Tech Stack & Action */}
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {game.tech.map((t, i) => (
                      <div 
                        key={i} 
                        className="w-8 h-8 rounded-full bg-white dark:bg-gray-700 border-2 border-gray-50 dark:border-gray-800 flex items-center justify-center text-[10px] font-bold dark:text-white shadow-sm"
                        title={t}
                      >
                        {t.charAt(0)}
                      </div>
                    ))}
                  </div>
                  
                  <a 
                    href={game.playLink}
                    className="text-purple-600 dark:text-purple-400 font-bold text-sm flex items-center group/btn"
                  >
                    Play Game 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
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

export default GameProject;