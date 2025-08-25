// Core component that receives mouse positions and renders pointer and content

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export const FollowPointer = ({
  x,
  y,
  title,
  color,
}: {
  x: number;
  y: number;
  title?: string | React.ReactNode;
  color: string;
}) => {
  return (
    <AnimatePresence>
      <motion.div
        className="absolute w-6 h-6 rounded-full shadow-lg"
        style={{
          top: y,
          left: x,
          zIndex: 500,
          pointerEvents: "none",
          boxShadow: `0 0 12px 2px ${color}80`,
        }}
        initial={{
          scale: 0.8,
          opacity: 0.7,
        }}
        animate={{
          scale: 1.15,
          opacity: 1,
          transition: {
            type: "spring",
            stiffness: 300,
            damping: 20,
          },
        }}
        exit={{
          scale: 0.7,
          opacity: 0,
        }}
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="1"
          viewBox="0 0 24 24"
          className={`h-8 w-8 text-[${color}] transform -rotate-[70deg] -translate-x-[16px] -translate-y-[14px] stroke-[${color}] drop-shadow-lg`}
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="10" fill={color} opacity="0.3" />
          <path d="M19.082 4.182a.5.5 0 0 1 .103.557L12.528 21.467a.5.5 0 0 1-.917-.007L9.57 16.694 2.803 13.652a.5.5 0 0 1-.006-.916l14.728-6.657a.5.5 0 0 1 .556.103z" fill="#fff" />
        </svg>
        <motion.div
          style={{
            backgroundColor: color,
            animationDuration: "2s",
            boxShadow: `0 0 8px 2px ${color}80`,
          }}
          initial={{
            scale: 0.7,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
            transition: {
              type: "spring",
              stiffness: 200,
              damping: 18,
            },
          }}
          exit={{
            scale: 0.7,
            opacity: 0,
          }}
          className={
            "px-3 py-2 bg-neutral-800 text-white whitespace-nowrap min-w-max text-sm rounded-full font-semibold shadow-lg border border-white/20"
          }
        >
          {title}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};