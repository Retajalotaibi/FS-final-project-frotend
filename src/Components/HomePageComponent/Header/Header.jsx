import React from "react";
import logo from "./Rtaj.png";
import "./Header.css";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  state = {
    open: false,
  };
  render() {
    const isOn = this.state.open;

    return (
      <header>
        <nav>
          <ul className="nav-links">
            <div className="logo-container">
              <img src={logo} alt="OurLogo" className="main-logo" />
              <h1 className="logo-header">الامل</h1>
            </div>
            <li>
              <NavLink exact to="/profile" className="nav-link">
                صفحة المستخدم
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/" className="nav-link">
                الرئيسية
              </NavLink>
            </li>
            <li>
              <a href="/#" className="nav-link">
                الرئيسية
              </a>
            </li>
            <li>
              <a href="/#" className="nav-link"></a>
            </li>
            <div className="burger">
              <div
                className={this.state.open ? "menu-btn open" : "menu-btn"}
                onClick={() => {
                  this.setState({ open: !isOn });
                }}
              >
                <div className="menu-btn__burger"></div>
              </div>
            </div>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
