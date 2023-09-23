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
    <Dropdown
      className=" categories_item "
      isOpen={isOpen}
      toggle={toggleDropdown}
    >
      <DropdownToggle caret>{SidebarData.text}</DropdownToggle>
      <DropdownMenu>
        {SidebarData.children.map((child, index) => (
          <p key={index} className="categories_item">
            <Link to={child.route}>{child.text}</Link>
          </p>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};
export default Sidebar;
