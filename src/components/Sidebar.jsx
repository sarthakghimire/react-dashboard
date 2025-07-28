import React from "react";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonFill,
  BsPeople,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from "react-icons/bs";

const Sidebar = () => {
  return (
    <aside>
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsCart3 className="icon" />
          SHOP
        </div>
        <span className="icon close_icon">X</span>
      </div>
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="">
            <BsGrid1X2Fill />
            Dashboard
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsFillArchiveFill />
            Products
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsFillGrid3X3GapFill />
            Categories
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsPeopleFill />
            Customers
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsListCheck />
            Inventory
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsMenuButtonWideFill />
            Reports
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsFillGearFill />
            Settings
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
