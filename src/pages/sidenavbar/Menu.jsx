import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="sideMenu">
      <div className="logo">TESTYANTRA</div>
      <div className="menu">
        <ul>
          <li>
            <NavLink
              to="/"
              // style={({ isActive }) => ({
              //   background: isActive ? "#361968" : "",
              //   borderBottom: isActive ? "1px solid  #ffc10778" : "",
              // })}
              // activeClassName="selected"
              // activeStyle={{ color: "red" }}
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              // style={({ isActive }) => ({
              //   background: isActive ? "#361968" : "",
              //   borderBottom: isActive ? "1px solid  #ffc10778" : "",
              // })}
              // activeClassName="selected"
              // activeStyle={{ color: "red" }}
            >
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
