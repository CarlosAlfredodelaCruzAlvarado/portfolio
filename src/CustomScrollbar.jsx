import React from "react";
import './css/CustomScrollbar.css'

const CustomScrollbar = ({ children }) => {
  return (
    <div className="custom-scrollbar">
      <div className="scroll-content">{children}</div>
    </div>
  );
};

export default CustomScrollbar;