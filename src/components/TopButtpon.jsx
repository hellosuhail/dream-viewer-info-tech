import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion, useAnimation, useScroll, useSpring } from "framer-motion";

export default function ScrollToTopWithProgress() {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll Y progress (0 to 1)
  const { scrollYProgress } = useScroll();
  const strokeProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });

  // Show button after scrollY > 300
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-md flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg className="absolute" width="56" height="56">
          <motion.circle
            cx="28"
            cy="28"
            r="24"
            stroke="#3B82F6"
            strokeWidth="4"
            fill="transparent"
            strokeLinecap="round"
            style={{
              pathLength: strokeProgress,
            }}
          />
        </svg>
        <FaArrowUp className="text-blue-600 z-10" />
      </motion.button>
    )
  );
}
