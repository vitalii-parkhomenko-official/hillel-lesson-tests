import React from "react";
import { NavLink } from "react-router-dom";

function Layout(props) {
  return (
    <div className="d-flex flex-column h-100 mt-3">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <ul className="nav nav-pills">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/products"
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr/>
      <div className="container">
        {props.children}
      </div>
      <footer className="footer mt-auto py-3 bg-dark">
        <div className="container">
          <span className="text-light">Place sticky footer content here.</span>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
