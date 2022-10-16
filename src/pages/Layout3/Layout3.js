import React, { Component } from "react";

// Importing Section
import NavbarPage from "../../component/Navbar/NavBar";
import Section from "../Layout3/Section";
import Services from "../../component/Services";
import Feature from "../../component/Feature";
import Clients from "../../component/Clients";
import Team from "../../component/Team";
import Cta from "../../component/Cta";
import Faq from "../../component/Faq";
import Pricing from "../../component/Pricing";
import Contact from "../../component/Contact";
import Footer from "../../component/Footer/Footer";

class Layout3 extends Component {
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
      navClass: "fixed-top",
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollNavigation, true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var scrollup = document.documentElement.scrollTop;
    if (scrollup > this.state.pos) {
      this.setState({ navClass: "nav-sticky fixed-top" });
    } else {
      this.setState({ navClass: "fixed-top" });
    }
  };

  render() {
    return (
      <React.Fragment>
        <NavbarPage
          navItems={this.state.navItems}
          navClass={this.state.navClass}
        />
        {/* Importing Section */}
        <Section />
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

export default Layout3;
