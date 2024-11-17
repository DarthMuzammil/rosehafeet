// "use client";
// import Logo from './Logo';

// export default function SplashScreen({ loading }) {
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
//       <Logo />
//     </div>
//   )
// }

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";
import {
  splashScreenTime,
  progressBarSpeed,
} from "@/lib/constants/splashscreen";

function LogoAnimted() {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center mb-8"
    >
      <Logo width={120} height={360} />
    </motion.div>
  );
}

function ProgressBarAnimated({ progress }) {
  return (
    <div className="w-full bg-gray-100 rounded-full h-2.5 mb-8">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5 }}
        className="h-2.5 rounded-full bg-primary"
      />
    </div>
  );
}

function DecorativeIllustrationsAnimated() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.img
        src="/swimming.svg"
        alt=""
        className="absolute top-0 left-0 w-48 opacity-100"
        animate={{
          y: [0, -20, 0],
          rotate: [-5, 5, -5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.img
        src="/meditation.svg"
        alt=""
        className="absolute top-1/2 left-0 w-48 opacity-100"
        animate={{
          x: [0, 20, 0],
          rotate: [-5, 5, -5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.img
        src="/surfing.svg"
        alt=""
        className="absolute top-1/2 right-0 w-48 opacity-100"
        animate={{
          x: [0, 20, 0],
          rotate: [-5, 5, -5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.img
        src="/surfing2.svg"
        alt=""
        className="absolute top-0 right-0 w-48 opacity-100"
        animate={{
          x: [0, 20, 0],
          rotate: [-5, 5, -5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  );
}

function MotionContainerFullScreen({ loading, children }) {
  return (
    <motion.div
      initial={{ opacity: 100 }}
      animate={{ opacity: loading ? 1 : 0 }}
      transition={{ duration: splashScreenTime }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
    >
      <div className="relative w-full max-w-3xl px-4">{children}</div>
    </motion.div>
  );
}

export default function SplashScreen({ loading = true }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (loading) {
      const timer = setInterval(() => {
        setProgress((prev) => {
          const next = prev + Math.random() * 15;
          if (next >= 100) {
            clearInterval(timer);
            return 100;
          }
          return next;
        });
      }, progressBarSpeed);
      return () => clearInterval(timer);
    }
  }, [loading]);

  return (
    <MotionContainerFullScreen loading={loading}>
      <LogoAnimted />
      <ProgressBarAnimated progress={progress} />
      <DecorativeIllustrationsAnimated />
    </MotionContainerFullScreen>
  );
}
