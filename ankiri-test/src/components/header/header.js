import React from "react";

import { NavLink } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <ul className="header-block">
          <NavLink className="header-button " to="/category">
            category
          </NavLink>

          <NavLink className="header-button " to="/main">
            main
          </NavLink>

          <NavLink className="header-button " to="/shop">
            shop
          </NavLink>
        </ul>
      </div>
    );
  }
}
