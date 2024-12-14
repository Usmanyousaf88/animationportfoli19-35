import React from "react";

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
    <nav className="fixed left-0 top-0 h-full w-[200px] p-4 space-y-2 z-50">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => handleClick(item.path)}
          className={`block w-full rounded-xl p-4 transition-transform hover:scale-105 ${getNavItemStyle(
            item.id
          )}`}
        >
          <div className="text-xs opacity-70">{item.id}</div>
          <div className="font-medium">{item.label}</div>
        </button>
      ))}
    </nav>
  );
};

export default Navbar;