import React from "react";
import { Link } from "react-router-dom";

const navItems = [
  { id: "00", label: "Raw Materials", path: "/" },
  { id: "01", label: "Hello", path: "/hello" },
  { id: "02", label: "Approach", path: "/approach" },
  { id: "03", label: "Work", path: "/work" },
  { id: "04", label: "Talent", path: "/talent" },
  { id: "05", label: "Careers", path: "/careers" },
  { id: "06", label: "Contact", path: "/contact" },
  { id: "07", label: "Unusual Index", path: "/unusual-index" },
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
  return (
    <nav className="fixed left-0 top-0 h-full w-[200px] p-4 space-y-2">
      {navItems.map((item) => (
        <Link
          key={item.id}
          to={item.path}
          className={`block rounded-xl p-4 transition-transform hover:scale-105 ${getNavItemStyle(
            item.id
          )}`}
        >
          <div className="text-xs opacity-70">{item.id}</div>
          <div className="font-medium">{item.label}</div>
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;