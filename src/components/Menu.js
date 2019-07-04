import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  Collapse,
  NavLink
} from "reactstrap";

export default function Menu(props) {
  const [isopen, setIsOpen] = useState(false);
  return (
    <>
      <Navbar color="dark" dark expand="sm" fixed="top">
        <NavbarToggler onClick={() => setIsOpen(!isopen)} />
        <NavbarBrand href="/">
          <img
            src={require("./img/ADF-LOGO.png")}
            alt="logo"
            className="img-responsive"
            style={{ height: "41px", width: "50px" }}
          />
        </NavbarBrand>
        <Collapse isOpen={isopen} navbar>
          <Nav className="ml-auto" navbar>
            {props.items.map((w, key) => (
              <NavItem key={key}>
                <NavLink
                  href={`/${w}`.replace(" ", '').toLowerCase().trim()}
                  className="font-weight-bold"
                >
                  {w}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
}
