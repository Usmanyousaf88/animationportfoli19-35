
import React from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <div className={`min-h-screen ${!isMobile ? "pl-[200px]" : "pl-0"} flex flex-col relative`}>
      {/* 3D Model Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="sketchfab-embed-wrapper h-full"> 
          <iframe 
            title="San Francisco City" 
            className="w-full h-full"
            frameBorder="0" 
            allowFullScreen
            allow="autoplay; fullscreen; xr-spatial-tracking"
            src="https://sketchfab.com/models/108841754fd3485886c1dde13301d341/embed?autospin=1&autostart=1&preload=1&transparent=1&ui_theme=dark"
          /> 
        </div>
      </div>

      {/* Content Overlay */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-between p-8 relative z-10"
      >
        <div className="text-lg md:text-2xl font-medium text-white">Virtual Event</div>
        <div className="text-lg md:text-2xl font-medium text-white">Date: TBD</div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex-1 flex items-center justify-center p-8 relative z-10"
      >
        <div className="max-w-4xl">
          <motion.h1 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-[100px] md:text-[200px] font-bold leading-none text-white"
          >
            $1M+
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg md:text-xl mt-8 max-w-xl text-white"
          >
            The World's Largest Hackathon with over $1 million in prizes.
          </motion.p>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="bg-[#6B46C1] text-white p-4 md:p-8 relative z-10"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-2xl md:text-4xl font-medium mb-4 md:mb-8"
          >
            CREATE. INNOVATE. TRANSFORM.
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { id: "01", text: "Multiple Prize Categories" },
              { id: "02", text: "Global Participation" },
              { id: "03", text: "Industry Mentors" },
              { id: "04", text: "Career Opportunities" }
            ].map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                className="mb-2 md:mb-0"
              >
                <div className="text-xs md:text-sm opacity-70">{item.id}</div>
                <div className="text-sm md:text-base font-medium">{item.text}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
