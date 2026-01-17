import { motion, useSpring, useMotionValue, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const CursorBlur = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile / touch device
  useEffect(() => {
    const check = () => {
      setIsMobile(
        window.innerWidth < 768 ||
        "ontouchstart" in window
      );
    };

    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // 🚀 LIGHTER SPRING (still smooth)
  const springConfig = {
    damping: 35,
    stiffness: 90,
    mass: 1.6,
  };

  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Desktop only mouse tracking
  useEffect(() => {
    if (isMobile) return;

    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);

      rafId = requestAnimationFrame(() => {
        mouseX.set(e.clientX - 300);
        mouseY.set(e.clientY - 300);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, isMobile]);

  // ❌ Disable heavy effect on mobile
  if (isMobile || prefersReducedMotion) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          filter: "saturate(0.85)",
        }}
        className="relative w-[600px] h-[600px] transform-gpu will-change-transform"
      >
        {/* OPTIMIZED LIQUID */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute inset-0
            blur-[110px]
            opacity-45
            bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,0.22),transparent_50%),radial-gradient(circle_at_70%_40%,rgba(168,85,247,0.20),transparent_55%),radial-gradient(circle_at_50%_70%,rgba(34,211,238,0.18),transparent_60%)]
            bg-[length:180%_180%]
          "
        />
      </motion.div>
    </div>
  );
};

export default CursorBlur;
