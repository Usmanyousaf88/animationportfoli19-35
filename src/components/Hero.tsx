import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="min-h-screen pl-[200px] flex flex-col relative">
      {/* 3D Model Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="sketchfab-embed-wrapper h-full"> 
          <iframe 
            title="San Francisco City" 
            className="w-full h-full"
            frameBorder="0" 
            allowFullScreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
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
        <div className="text-2xl font-medium text-white">Raw Materials</div>
        <div className="text-2xl font-medium text-white">An Unusual Design Company</div>
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
            className="text-[200px] font-bold leading-none text-white"
          >
            RM
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-xl mt-8 max-w-xl text-white"
          >
            We design and launch unusually creative digital products that change brands' fortunes.
          </motion.p>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="bg-[#6B46C1] text-white p-8 relative z-10"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-4xl font-medium mb-8"
          >
            A CULTURE BUILT FOR CONSTANT ADAPTATION.
          </motion.h2>
          <div className="grid grid-cols-4 gap-8">
            {[
              { id: "01", text: "Creator Led" },
              { id: "02", text: "Phase Zero" },
              { id: "03", text: "Anti Transactional" },
              { id: "04", text: "One Team" }
            ].map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
              >
                <div className="text-sm opacity-70">{item.id}</div>
                <div className="font-medium">{item.text}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;