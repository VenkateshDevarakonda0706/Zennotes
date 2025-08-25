"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function HeroSection() {
  return (
    <>
      <div
        className="relative flex flex-col items-center justify-center"
        id="hero-section"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col flex-1 w-full h-fit md:min-h-screen gap-8 text-center max-w-screen"
        >
          <div className="absolute inset-0 -z-10 pointer-events-none">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="w-full h-full bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 animate-gradient-move"
              style={{ filter: "blur(80px)" }}
            />
          </div>
          <div className="flex items-center justify-center gap-2 flex-col z-[5] px-4 md:px-8 lg:px-16 mt-16">
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight md:leading-snug"
            >
              Your Intelligent Workspace
              <br />
              for Real-Time Collaboration
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
              className="text-base sm:text-base md:text-lg lg:text-xl max-w-xl mx-auto leading-relaxed"
            >
              ZenNotes AI combines a powerful block-based editor, real-time
              collaboration, and AI-driven features to help you work smarter,
              faster, and better.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
              className="relative flex items-center justify-center flex-1 mt-6 md:mt-10 lg:mt-12 overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src="/images/lp-ss-1.png"
                width="1920"
                height="1080"
                className="w-full max-w-[1200px] h-auto"
                alt="Screenshot"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 1 }}
                className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 opacity-20 pointer-events-none"
              />
              <AnimatedAIMessage />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default HeroSection;

function AnimatedAIMessage() {
  const messages = [
    "AI is organizing your notes...",
    "Collaboration in real-time...",
    "Smart suggestions incoming...",
    "Summarizing your ideas..."
  ];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-white/80 dark:bg-black/80 rounded-full shadow-lg text-lg font-semibold text-blue-600 dark:text-pink-400"
    >
      {messages[index]}
    </motion.div>
  );
}