import React, { useState } from "react";
import "./dropdown.css";
import { ChevronsRight } from "react-feather";
import { Link } from "react-router-dom";

function SideBarNew() {
  const dropdownData = [
    {
      text: "ACADEMIC",
      children: [
        { text: "READING MATERIALS", icon: ChevronsRight, route: "/cart" },
        { text: "TUTORING", icon: ChevronsRight, route: "/child1.2" },
      ],
    },
    {
      text: "NON-ACADEMIC",
      children: [
        { text: "MATERIALS", icon: ChevronsRight, route: "/MATERIALS" },
        { text: "SERVICES", icon: ChevronsRight, route: "/SERVICES" },
      ],
    },
  ];

  const [openItems, setOpenItems] = useState([]);

  const toggleDropdown = (index) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter((item) => item !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };

  const isItemOpen = (index) => openItems.includes(index);

  return (
    <div className="dropdown">
      <nav>
        {dropdownData.map((parent, index) => (
          <div key={index}>
            <div
              className="dropdown-header"
              onClick={() => toggleDropdown(index)}
            >
              <i
                className={`fa fa-chevron-right icon ${
                  isItemOpen(index) && "open"
                }`}
              ></i>
              {parent.text}
            </div>
            <div className={`dropdown-body ${isItemOpen(index) && "open"}`}>
              {parent.children.map((child, childIndex) => (
                <Link
                  to={child.route}
                  className="dropdown-item"
                  key={childIndex}
                >
                  <span
                    className={`dropdown-item-dot ${
                      isItemOpen(index) && "selected"
                    }`}
                  ></span>
                  {child.text}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </div>
  );
}

export default SideBarNew;
