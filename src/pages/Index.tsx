import React from "react";
import Navbar from "@/components/Navbar";
import Sections from "@/components/Sections";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-[#FEF7F5]">
      {!isMobile && <Navbar />}
      <div className={`${!isMobile ? "pl-[200px]" : ""}`}>
        <Sections />
      </div>
    </div>
  );
};

export default Index;