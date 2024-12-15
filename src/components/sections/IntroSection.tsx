import React from "react";
import { motion } from "framer-motion";

const IntroSection = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.6 }}
      id="raw-materials"
      className="h-screen snap-start bg-white flex flex-col"
    >
      <div className="flex flex-col md:flex-row justify-between p-4 md:p-8">
        <div className="text-xl md:text-2xl font-medium">Armando Sanchez</div>
        <div className="text-xl md:text-2xl font-medium mt-2 md:mt-0">Design & Marketing Strategist</div>
      </div>
      
      <div className="flex-1 flex items-center justify-center p-4 md:p-8">
        <div className="max-w-4xl">
          <motion.h1 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[100px] md:text-[200px] font-bold leading-none"
          >
            AS
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl mt-4 md:mt-8 max-w-2xl"
          >
            Results-driven graphic designer and lead marketing strategist based in the San Francisco Bay Area, dedicated to helping small local businesses establish a compelling, cohesive presence across digital and traditional platforms.
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};

export default IntroSection;