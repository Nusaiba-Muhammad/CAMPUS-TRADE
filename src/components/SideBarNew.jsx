import React, { useState } from "react";
import "./dropdown.css";
import {
  ChevronRight,
  MessageCircle,
  HelpCircle,
  MessageSquare,
  Bookmark,
} from "react-feather";
import { Link } from "react-router-dom";
import { Card } from "reactstrap";

function SideBarNew() {
  const dropdownData = [
    {
      text: "Academic Goods",
      children: [
        { text: "reading materials", icon: ChevronRight, route: "/cart" },
        { text: "past questions", icon: ChevronRight, route: "/child1.2" },
      ],
    },
    {
      text: "Academic Services",
      children: [
        { text: "Tutoring", icon: ChevronRight, route: "/cart" },
        { text: "Supervising", icon: ChevronRight, route: "/child1.2" },
      ],
    },
    {
      text: "Non-academic goods",
      children: [
        { text: "Mattress", icon: ChevronRight, route: "/cart" },
        { text: "Jackets", icon: ChevronRight, route: "/child1.2" },
      ],
    },
    {
      text: "Non-Academic Services",
      children: [
        { text: "Fetching water", icon: ChevronRight, route: "/MATERIALS" },
        { text: "Hair making", icon: ChevronRight, route: "/SERVICES" },
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
    <div className="dropdown ">
      {dropdownData.map((parent, index) => (
        <div key={index} className="categories_item">
          <p className="categories_item" onClick={() => toggleDropdown(index)}>
            {parent.text}
            <ChevronRight
              className={`fa fa-chevron-right icon ${
                isItemOpen(index) && "open"
              }`}
            />
          </p>
          <p
            className={`dropdown-body categoris_item ${
              isItemOpen(index) && "open"
            }`}
          >
            {parent.children.map((child, childIndex) => (
              <Link to={child.route} className="dropdown-item" key={childIndex}>
                <p className="">
                  <span
                    className={`dropdown-item-dot ${
                      isItemOpen(index) && "selected"
                    }`}
                  ></span>
                </p>
                {child.text}
              </Link>
            ))}
          </p>
          {/* <hr /> */}
        </div>
      ))}
      <hr />
      <p className="categories_item">
        {" "}
        <Bookmark className="space" />
        Favorites
      </p>
      <p className="categories_item">
        {" "}
        <MessageCircle className="space" />
        FAQs
      </p>
      <p className="categories_item">
        {" "}
        <HelpCircle className="space" />
        Help
      </p>
      <p className="categories_item">
        {" "}
        <MessageSquare className="space" />
        Supports
      </p>
    </div>
  );
}

export default SideBarNew;
