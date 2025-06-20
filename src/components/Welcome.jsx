import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WelcomeAnimation() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 4000); 
    return () => clearTimeout(t);
  }, []);

  const particles = Array.from({ length: 80 });

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-gray-900 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative w-104 h-screen">
            {particles.map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-accent rounded-full mix-blend-add"
                style={{
                  width: 8,
                  height: 8,
                  top: "50%",
                  left: "50%",
                }}
                initial={{ x: 0, y: 0, opacity: 0 }}
                animate={{
                  x: [
                    0,
                    (Math.random() - 0.5) * 300,
                    (Math.random() - 0.5) * 400,
                  ],
                  y: [
                    0,
                    (Math.random() - 0.5) * 300,
                    (Math.random() - 0.5) * 400,
                  ],
                  opacity: [1, 0],
                }}
                transition={{
                  duration: 2 + Math.random(),
                  ease: "easeOut",
                  delay: 0.2 + Math.random() * 0.5,
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
