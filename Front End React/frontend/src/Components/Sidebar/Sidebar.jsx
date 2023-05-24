import React, { useState } from "react";
import "./sidebar.css";
import { SidebarData } from "../../Data/Data";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();
  const HandleClick = (index, heading) => {
    if (index === 0 && heading === "Dashboard") {
      navigate("/dashboard");
    }
    if (index === 1 && heading === "My Courses") {
      navigate("/mycourse");
    }
  };

  return (
    <div className="Sidebar">
      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div
              className={selected === index ? "menu-items active" : "menu-item"}
              key={index}
              onClick={() => {
                setSelected(index);
                HandleClick(index, item.heading);
              }}
            >
              <span>{item.heading}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Sidebar;
