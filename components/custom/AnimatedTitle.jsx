"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export function AnimatedTitle({isShow = True}) {
  return (
    <AnimatePresence>
      {isShow && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 bg-white pt-16"
        >
          <nav className="flex flex-col items-center space-y-8 py-8">
            <a href="#home" className="text-xl" onClick={() => setMenu(false)}>
              Home
            </a>
            <a
              href="#services"
              className="text-xl"
              onClick={() => setMenu(false)}
            >
              Services
            </a>
            <a href="#about" className="text-xl" onClick={() => setMenu(false)}>
              About
            </a>
            <a
              href="#contact"
              className="text-xl"
              onClick={() => setMenu(false)}
            >
              Contact
            </a>
            <Button onClick={() => setMenu(false)}>Book Now</Button>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
