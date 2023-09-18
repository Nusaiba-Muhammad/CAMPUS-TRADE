import React from "react";
import {
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
} from "reactstrap";
import { Link } from "react-router-dom";

const Sidebar = ({ SidebarData, isOpen, toggleDropdown }) => {
  return (
    <Dropdown isOpen={isOpen} toggle={toggleDropdown}>
      <DropdownToggle caret>{SidebarData.text}</DropdownToggle>
      <DropdownMenu>
        {SidebarData.children.map((child, index) => (
          <DropdownItem key={index}>
            <Link to={child.route}>{child.text}</Link>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};
export default Sidebar;
