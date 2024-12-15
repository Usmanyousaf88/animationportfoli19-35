import React from "react";
import { motion } from "framer-motion";

const IntroSection = () => {
  const letterVariants = {
    animate: {
      rotateX: [0, 360],
      rotateY: [0, 360],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

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
        <div className="max-w-4xl perspective-[1000px]">
          <motion.h1 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[100px] md:text-[200px] font-bold leading-none flex justify-center items-center gap-4"
          >
            <motion.span
              variants={letterVariants}
              animate="animate"
              className="inline-block transform-style-3d letter-3d"
              style={{ 
                transformStyle: 'preserve-3d', 
                display: 'inline-block',
                textShadow: '0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15)'
              }}
            >
              A
            </motion.span>
            <motion.span
              variants={letterVariants}
              animate="animate"
              className="inline-block transform-style-3d letter-3d"
              style={{ 
                transformStyle: 'preserve-3d', 
                display: 'inline-block',
                textShadow: '0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15)'
              }}
            >
              S
            </motion.span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl mt-4 md:mt-8 max-w-2xl mx-auto"
          >
            Results-driven graphic designer and lead marketing strategist based in the San Francisco Bay Area, dedicated to helping small local businesses establish a compelling, cohesive presence across digital and traditional platforms.
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};

export default IntroSection;