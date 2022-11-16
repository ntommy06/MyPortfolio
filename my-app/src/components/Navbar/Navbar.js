import React from "react";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>Logo</h1>
        </NavLink>
        <Bars />
        <NavLink to="/about" activeStyle>
          About
        </NavLink>
        <NavLink to="/projects" activeStyle>
          Projects
        </NavLink>
        <NavLink to="/contact-me" activeStyle>
          Contact Me
        </NavLink>
        {/* <NavBtnLink to="/contact-me"></NavBtnLink> */}
      </Nav>
    </>
  );
};

export default Navbar;
