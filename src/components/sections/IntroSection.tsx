
import React from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const IntroSection = () => {
  const isMobile = useIsMobile();

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
      className="min-h-screen snap-start bg-white flex flex-col py-8 md:py-12"
    >
      {/* Header with Name and Description */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-4 md:px-16 mb-8 md:mb-16">
        <h1 className="text-2xl md:text-4xl font-medium text-left">Bolt.new</h1>
        <h2 className="text-lg md:text-2xl font-medium text-left md:text-right mt-2 md:mt-0">AI-Powered Web Development</h2>
      </div>
      
      {/* Bolt Logo */}
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center max-w-4xl px-4 md:px-0 perspective-[1000px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 md:mb-16 relative w-48 h-48 md:w-64 md:h-64 mx-auto"
          >
            <div className="absolute left-0 top-0 right-0 bottom-0 flex items-center justify-center">
              <div className="text-[140px] md:text-[180px] font-bold text-gray-800 drop-shadow-xl tracking-tighter">
                ⚡
              </div>
            </div>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base md:text-xl max-w-2xl mx-auto text-center leading-relaxed"
          >
            Bolt.new is an AI-powered web development tool that allows you to create, run, edit, and deploy full-stack applications directly from your browser. This eliminates the need for local installations. Build, iterate, and launch your web applications faster than ever before.
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};

export default IntroSection;
