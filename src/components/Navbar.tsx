
import React from "react";
import { motion } from "framer-motion";

const navItems = [
  { id: "00", label: "Raw Materials", path: "raw-materials" },
  { id: "01", label: "Hello", path: "hello" },
  { id: "02", label: "Approach", path: "theme" },
  { id: "03", label: "Work", path: "work" },
  { id: "04", label: "Sponsors", path: "talent" },
  { id: "05", label: "Prizes", path: "prizes" },
  { id: "06", label: "Register Now", path: "register" },
  { id: "07", label: "FAQ", path: "faq" },
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
    <>
      {/* Mobile Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-sm z-50 md:hidden"
      >
        <div className="grid grid-cols-4 gap-1 p-2">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleClick(item.path)}
              className={`rounded-xl p-2 flex flex-col items-center justify-center ${getNavItemStyle(
                item.id
              )}`}
            >
              <div className="text-[10px] opacity-70 font-bold tracking-wider">{item.id}</div>
              <div className="text-[11px] font-bold leading-tight text-center tracking-wide">{item.label}</div>
            </motion.button>
          ))}
        </div>
      </motion.nav>

      {/* Desktop Navigation */}
      <motion.nav 
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed left-0 top-0 h-full w-[200px] p-4 space-y-2 z-50 hidden md:block"
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
            <div className="text-xs opacity-70 font-bold tracking-wider text-center">{item.id}</div>
            <div className="font-bold tracking-wide text-center">{item.label}</div>
          </motion.button>
        ))}
      </motion.nav>
    </>
  );
};

export default Navbar;
