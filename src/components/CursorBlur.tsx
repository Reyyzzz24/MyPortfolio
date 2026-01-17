import { motion, useSpring, useMotionValue } from "framer-motion";
import { useEffect } from "react";

const CursorBlur = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // SUPER SMOOTH + CINEMATIC DELAY
  const springConfig = {
    damping: 50,     // makin besar = makin halus
    stiffness: 70,   // makin kecil = makin delay
    mass: 2.5,       // makin berat = liquid feel
  };

  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 400);
      mouseY.set(e.clientY - 400);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          filter: "saturate(0.85)", // bikin warna lebih soft
        }}
        className="relative w-[800px] h-[800px] transform-gpu will-change-transform"
      >
        {/* LIQUID BLOB */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            borderRadius: [
              "45% 55% 65% 35% / 45% 50% 60% 55%",
              "60% 40% 35% 65% / 55% 40% 65% 45%",
              "45% 55% 65% 35% / 45% 50% 60% 55%",
            ],
          }}
          transition={{
            duration: 20, // lebih lambat = cinematic
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute inset-0
            blur-[160px]
            opacity-60
            bg-[radial-gradient(circle_at_30%_30%,rgba(251,146,60,0.22),transparent_45%),radial-gradient(circle_at_70%_40%,rgba(236,72,153,0.23),transparent_50%),radial-gradient(circle_at_50%_70%,rgba(168,85,247,0.20),transparent_55%)]
            bg-[length:200%_200%]
          "
        />
      </motion.div>
    </div>
  );
};

export default CursorBlur;
