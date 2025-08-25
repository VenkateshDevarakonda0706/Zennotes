"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    text: "This platform has completely transformed our workflow! Highly recommended.",
    name: "Alice Brown",
    position: "CEO, InnovateX",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81iX4Mo49Z3oCPSx-GtgiMAkdDop2uVmVvw&s",
  },
  {
    id: 2,
    text: "Exceptional service with outstanding results. A pleasure to work with!",
    name: "David Wilson",
    position: "Marketing Director, BrightCorp",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81iX4Mo49Z3oCPSx-GtgiMAkdDop2uVmVvw&s",
  },
  {
    id: 3,
    text: "It's unbelievable how smooth an online block-note editor can be.",
    name: "Sudarshan Rao",
    position: "UI/UX Dev, PCBCupid",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81iX4Mo49Z3oCPSx-GtgiMAkdDop2uVmVvw&s",
  },
];

function TestimonialSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="flex flex-col items-center justify-center w-full px-4 md:px-8 max-w-7xl"
      id="testimonials"
    >
      <motion.h4
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        className="w-full text-3xl font-medium tracking-tight text-center text-black lg:text-5xl lg:leading-tight dark:text-white"
      >
        What they say about us!
      </motion.h4>
      <div className="grid gap-6 py-20 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, idx) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 + idx * 0.2 }}
          >
            <TestimonialCard testimonial={testimonial} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function TestimonialCard({ testimonial }) {
  return (
    <div className="flex flex-col justify-between p-5 space-y-6 transition-all duration-500 ease-in-out bg-white border border-gray-100 rounded-lg shadow-2xl md:p-6 dark:bg-gray-950 dark:border-gray-900 shadow-gray-100/70 dark:shadow-gray-800/80 hover:scale-105">
      <p className="font-medium text-gray-700 dark:text-gray-300">
        {testimonial.text}
      </p>
      <div className="flex items-start gap-4">
        <Image
          src={testimonial.image}
          alt="Author avatar"
          width={48}
          height={48}
          className="flex object-cover w-12 h-12 rounded-full"
        />
        <div className="flex-1 space-y-1">
          <h2 className="text-lg font-semibold leading-none text-gray-800 dark:text-gray-200">
            {testimonial.name}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {testimonial.position}
          </p>
        </div>
      </div>
    </div>
  );
}

function AnimatedTestimonialAI({name}) {
  const aiMessages = {
    "Alice": "AI helped Alice organize her research notes instantly!",
    "Bob": "Bob's team collaborated in real-time with zero friction.",
    "Charlie": "Charlie summarized a 10-page doc in seconds!"
  };
  const [show, setShow] = useState(false);
  return (
    <div className="relative" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.5 }}
          className="absolute left-1/2 -translate-x-1/2 top-0 z-50 px-4 py-2 bg-gradient-to-r from-blue-400 via-pink-400 to-purple-400 text-white rounded shadow text-sm font-semibold"
        >
          {aiMessages[name]}
        </motion.div>
      )}
    </div>
  );
}
// Add AnimatedTestimonialAI to each testimonial card
{testimonials.map((testimonial, idx) => (
  <motion.div
    key={testimonial.name}
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 + idx * 0.2 }}
    className="testimonial-card"
  >
    <div className="flex flex-col items-center">
      <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mb-2" />
      <div className="font-bold text-lg">{testimonial.name}</div>
      <div className="text-neutral-500 dark:text-neutral-300 text-sm mb-2">{testimonial.position}</div>
      <div className="text-center text-base mb-2">{testimonial.text}</div>
      <AnimatedTestimonialAI name={testimonial.name} />
    </div>
  </motion.div>
))}
export default TestimonialSection;