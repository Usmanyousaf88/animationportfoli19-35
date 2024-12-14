import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Sections from "@/components/Sections";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const isMobile = useIsMobile();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-[#FEF7F5]"
    >
      {!isMobile && <Navbar />}
      <div className={`${!isMobile ? "pl-[200px]" : ""}`}>
        <Sections />
      </div>
    </motion.div>
  );
};

export default Index;