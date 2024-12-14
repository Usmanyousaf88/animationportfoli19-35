import React from "react";
import { motion } from "framer-motion";

const navItems = [
  { id: "00", label: "Raw Materials", path: "raw-materials" },
  { id: "01", label: "Hello", path: "hello" },
  { id: "02", label: "Approach", path: "approach" },
  { id: "03", label: "Work", path: "work" },
  { id: "04", label: "Talent", path: "talent" },
  { id: "05", label: "Careers", path: "careers" },
  { id: "06", label: "Contact", path: "contact" },
  { id: "07", label: "Unusual Index", path: "unusual-index" },
];

const getNavItemStyle = (id: string) => {
  switch (id) {
    case "01":
      return "bg-[#FF4500] text-white";
    case "02":
      return "bg-[#6B46C1] text-white";
    case "03":
      return "bg-black text-white";
    case "04":
      return "bg-[#4169E1] text-white";
    case "05":
      return "bg-[#FF1493] text-white";
    case "06":
      return "bg-[#FFD700] text-black";
    case "07":
      return "bg-[#32CD32] text-white";
    default:
      return "bg-white text-black";
  }
};

const Navbar = () => {
  const handleClick = (path: string) => {
    const element = document.getElementById(path);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav 
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed left-0 top-0 h-full w-[200px] p-4 space-y-2 z-50 md:block hidden"
    >
      {navItems.map((item, index) => (
        <motion.button
          key={item.id}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 * index }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleClick(item.path)}
          className={`block w-full rounded-xl p-4 transition-transform ${getNavItemStyle(
            item.id
          )}`}
        >
          <div className="text-xs opacity-70">{item.id}</div>
          <div className="font-medium">{item.label}</div>
        </motion.button>
      ))}
    </motion.nav>
  );
};

export default Navbar;