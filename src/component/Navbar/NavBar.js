import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavbarToggler,
  NavItem,
  NavLink,
  Container,
  Collapse,
} from "reactstrap";

import { Link } from "react-router-dom";

import ScrollspyNav from "./Scrollspy";

class NavbarPage extends Component {
  // render() {
  constructor(props) {
    super(props);
    this.state = {
      isOpenMenu: false,
    };
  }
  render() {
    let targetId = this.props.navItems.map((item) => {
      return item.idnm;
    });
    return (
      <React.Fragment>
        <Navbar
          expand="lg"
          fixed={this.props.top === true ? "top" : ""}
          className={"navbar-custom sticky sticky-dark " + this.props.navClass}
          id="navbar"
        >
          <Container>
            <Link to="#" className="navbar-brand">
              Globing
            </Link>
            <NavbarToggler onClick={this.toggle}>
              <span className="ti-menu"></span>
            </NavbarToggler>
            <Collapse
              id="navbarCollapse"
              isOpen={this.state.isOpenMenu}
              className=" navbar-collapse"
            >
              <ScrollspyNav
                scrollTargetIds={targetId}
                scrollDuration="800"
                headerBackground="true"
                activeNavClass="active"
                className="navbar-collapse"
              >
                <Nav className="navbar-nav mx-auto" id="navbar-navlist">
                  {this.props.navItems.map((item, key) => (
                    <NavItem
                      key={key}
                      className={item.navheading === "Home" ? "active" : ""}
                    >
                      <NavLink
                        className={item.navheading === "Home" ? "active" : ""}
                        href={"#" + item.idnm}
                      >
                        {item.navheading}
                      </NavLink>
                    </NavItem>
                  ))}
                </Nav>
                <div>
                  <ul className="text-end list-unstyled list-inline mb-0 nav-social">
                    <li className="list-inline-item text-white nav-number">
                      <i className="ti-mobile"></i> <span>+1 234 567 789</span>
                    </li>{" "}
                    <li className="list-inline-item">
                      <Link to="#" className="facebook">
                        <i className="ti-facebook"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </ScrollspyNav>
            </Collapse>
          </Container>
        </Navbar>
      </React.Fragment>
    );
  }
}
// }
export default NavbarPage;
