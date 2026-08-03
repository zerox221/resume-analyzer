import { motion } from "framer-motion";

const PulsatingDots = ({ className = "" }) => {
  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="h-3 w-3 rounded-full bg-black/90"
          animate={{
            scale: [0.7, 1.2, 0.7],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  );
};

export default PulsatingDots;