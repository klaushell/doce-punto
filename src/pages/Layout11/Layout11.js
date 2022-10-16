import React, { Component } from "react";

// Importing Section
import NavbarPage from "../../component/Navbar/NavBar";
import Section from "../Layout11/Section";
import Services from "../../component/Services";
import Feature from "../../component/Feature";
import Clients from "../../component/Clients";
import Team from "../../component/Team";
import Cta from "../../component/Cta";
import Faq from "../../component/Faq";
import Pricing from "../../component/Pricing";
import Contact from "../../component/Contact";
import Footer from "../../component/Footer/Footer";

class Layout11 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: [
        { id: 1, idnm: "home", navheading: "Home" },
        { id: 2, idnm: "services", navheading: "Services" },
        { id: 3, idnm: "features", navheading: "Features" },
        { id: 3, idnm: "testi", navheading: "Client" },
        { id: 3, idnm: "team", navheading: "Team" },
        { id: 3, idnm: "faq", navheading: "FAQ" },
        { id: 3, idnm: "pricing", navheading: "Pricing" },
        { id: 3, idnm: "contact", navheading: "Contact" },
      ],
      pos: document.documentElement.scrollTop,
      navPos: true,
      navClass: "navbar-light",
      navClassDiv: "",
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollNavigation, true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    if (
      document.body.scrollTop > 960 ||
      document.documentElement.scrollTop > 960
    ) {
      this.setState({
        navClassDiv: "is-sticky",
        navClass: "nav-sticky fixed-top navbar-light",
      });
    } else {
      this.setState({ navClass: "navbar-light", navClassDiv: "is-sticky" });
    }
  };

  render() {
    return (
      <React.Fragment>
        {/* Importing Section */}
        <Section />
        <div
          className={"sticky-wrapper " + this.state.navClassDiv}
          style={{ height: "80px" }}
          id="navbardiv"
        >
          <NavbarPage
            navItems={this.state.navItems}
            navClass={this.state.navClass}
            navPos={this.state.navPos}
            navClassDiv={this.state.navClassDiv}
          />
        </div>
        {/* Importing Services */}
        <Services />

        {/* Importing Feature */}
        <Feature />

        {/* Importing Clients */}
        <Clients />

        {/* Importing Team */}
        <Team />

        {/* Importing Faq */}
        <Faq />
        
        {/* Importing Cta */}
        <Cta />

        {/* Importing Pricing */}
        <Pricing />

        {/* Importing Contact */}
        <Contact />

        {/* Importing Footer */}
        <Footer />
      </React.Fragment>
    );
  }
}

export default Layout11;
