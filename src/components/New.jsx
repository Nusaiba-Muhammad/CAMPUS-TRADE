import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import { ChevronsRight } from "react-feather";
import { BrowserRouter as Router, Route } from "react-router-dom";


function New() {
  const dropdownData = [
    {
      text: "ACADEMIC",
      children: [
        { text: "READING MATERIALS", icon: ChevronsRight, route: "/child 1.1" },
        { text: "TUTORING", icon: ChevronsRight, route: "/child 1.2" },
      ],
    },
    {
      text: "NONE ACADEMIC",
      children: [
        { text: "MAERIALS", icon: ChevronsRight, route: "/MAERIALS" },
        { text: "SERVICES", icon: ChevronsRight, route: "/SERVICES" },
      ],
    },
  ];
  const [openDropdowns, setOpenDropdowns] = useState(
    Array(dropdownData.length).fill(false)
  );
  const toggleDropdown = (index) => {
    const newOpenDropdowns = openDropdowns.map((isOpen, i) =>
      i === index ? !isOpen : false
    );
    setOpenDropdowns(newOpenDropdowns);
  };
  return (
    <Router>
      <div className="new">
        <header className="new-header">
          <h1>dynamic dropdown</h1>
          {dropdownData.map((head, index) => (
            <Sidebar
              key={index}
              SidebarData={head}
              isOpen={openDropdowns[index]}
              toggleDropdown={() => toggleDropdown(index)}
            />
          ))}
        </header>

        {dropdownData.map((head) =>
          head.children.map((child, index) => (
            <Route key={index} path={child.route}>
              <ChildComponent text={child.text} />
            </Route>
          ))
        )}
      </div>
    </Router>
  );
}
const ChildComponent = ({ text }) => <div>{text}</div>;

export default New;
