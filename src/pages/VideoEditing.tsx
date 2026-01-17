import { useState } from "react";
import { motion } from "framer-motion";

const videoData = [
  {
    id: 1,
    title: "UKM Karate Content",
    description: "This is a documentation video of a UKM Karate event.",
    thumbnail: "images/thumbnails/thumbnail1.png",
    videoUrl: "https://drive.google.com/file/d/1jm1KSMtliL4A9wJmQXVnQy9lg-rEuMW3/preview",
  },
  {
    id: 2,
    title: "Cinematic Video",
    description: "This is a Cinematic Video that I created using After Effects.",
    thumbnail: "images/thumbnails/thumbnail2.png",
    videoUrl: "https://drive.google.com/file/d/1Cujb8vd5dHI3ynjFuF_ZRjT6rePwOa09/preview",
  },
  {
    id: 3,
    title: "Minecraft Animation",
    description: "Created using Mine-imator and After Effects for visual effects.",
    thumbnail: "images/thumbnails/thumbnail3.png",
    videoUrl: "https://drive.google.com/file/d/1joCkFfa3dzLoQSkofbXBpVaQfujOcVgm/preview",
  },
];

const amvData = [
    { id: 4, thumb: "images/thumbnails/thumbnail4.png", url: "https://drive.google.com/file/d/12-JALjQNZWpl02tMMGUOy7OB_G4ptoyT/preview" },
    { id: 5, thumb: "images/thumbnails/thumbnail5.png", url: "https://drive.google.com/file/d/1uDSScmdSolXvb5q1zwhH65O6-sz_Aixy/preview" },
    { id: 6, thumb: "images/thumbnails/thumbnail6.png", url: "https://drive.google.com/file/d/1eFctxpAOh1GjSIkN-KXkD-zNy9Y5kqMT/preview" },
    { id: 7, thumb: "images/thumbnails/thumbnail7.jpeg", url: "https://drive.google.com/file/d/1kXyYkukJwLsdP2atjPQgzbrRmfYw6CTM/preview" },
    { id: 8, thumb: "images/thumbnails/thumbnail8.jpeg", url: "https://drive.google.com/file/d/1kPPC9EIS7bWI6SknklBV7b1dJoolrPR3/preview" },
    { id: 9, thumb: "images/thumbnails/thumbnail9.jpeg", url: "https://drive.google.com/file/d/1k9QwRyZG9KtqUr0SUfCA_Gyh4Dk2ZHRd/preview" },
    { id: 10, thumb: "images/thumbnails/thumbnail10.png", url: "https://drive.google.com/file/d/1qYEVMxMY5H7WXnjmEKcTsMvDi-gasiTC/preview" },
    { id: 11, thumb: "images/thumbnails/thumbnail11.jpeg", url: "https://drive.google.com/file/d/1km7NxVLbzPWDPvefGlEFiWgIVMZIBJ4Q/preview" },
];

const VideoCard = ({ item, isSmall = false }: { item: any; isSmall?: boolean }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const finalUrl = item.videoUrl || item.url;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`group bg-gray-50 dark:bg-gray-800/40 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-700 transition-all duration-500 hover:shadow-2xl ${!isSmall && 'hover:-translate-y-2'}`}
    >
      <div className="relative aspect-video bg-black overflow-hidden">
        {!isPlaying ? (
          <div className="cursor-pointer h-full w-full" onClick={() => setIsPlaying(true)}>
            <img 
              src={item.thumbnail || item.thumb} 
              alt={item.title || "Video Thumbnail"} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-all flex items-center justify-center">
              <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform shadow-xl">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-7 h-7 ml-1" viewBox="0 0 16 16">
                  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                </svg>
              </div>
            </div>
          </div>
        ) : (
          <iframe 
            src={finalUrl} 
            className="absolute inset-0 w-full h-full" 
            allow="autoplay; fullscreen; encrypted-media"
            allowFullScreen
            // Sandbox membantu browser melonggarkan proteksi jika link aman
            sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation"
          ></iframe>
        )}
      </div>
      {!isSmall && (
        <div className="p-8">
          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h4>
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.description}</p>
        </div>
      )}
    </motion.div>
  );
};

const VideoEditing = () => {
  return (
    <div className="pt-32 pb-24 bg-transparent dark:bg-gray-900/50 min-h-screen">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="text-center mb-20">
          <h3 className="text-blue-600 font-semibold uppercase tracking-[0.4em] text-xs mb-3">Portfolio</h3>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Video Editing</h1>
          <div className="h-1.5 w-20 bg-blue-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32">
          {videoData.map((video) => (
            <VideoCard key={video.id} item={video} />
          ))}
        </div>

        <div className="text-center mb-16">
          <h3 className="text-blue-600 font-semibold uppercase tracking-[0.3em] text-sm">AND</h3>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 text-gray-900 dark:text-white">More AMVs</h1>
          <div className="h-1.5 w-20 bg-blue-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {amvData.map((amv) => (
            <VideoCard key={amv.id} item={amv} isSmall={true} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoEditing;