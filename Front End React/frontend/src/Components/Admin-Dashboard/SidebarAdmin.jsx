import React, { useEffect, useState } from "react";
import { SidebarData } from "../../Data/Data";

const SidebarAdmin = () => {
    const[selected, setSelected] = useState(0)
  return (
    <div className="Sidebar">
      <div className="menu">
        {SidebarData.map((item, index) =>{
            return(
                <div className={selected === index? 'menu-items active': 'menu-item'}
                key={index}
                onClick={()=>setSelected(index)}
                >
                    <span>{item.heading}</span>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default SidebarAdmin