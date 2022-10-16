import React, { Component } from "react";

// Importing Section
import NavbarPage from "../../component/Navbar/NavBar";
import Section from "../Layout8/Section";
import Services from "../../component/Services";
import Feature from "../../component/Feature";
import Clients from "../../component/Clients";
import Team from "../../component/Team";
import Cta from "../../component/Cta";
import Faq from "../../component/Faq";
import Pricing from "../../component/Pricing";
import Contact from "../../component/Contact";
import Footer from "../../component/Footer/Footer";

class Layout8 extends Component {
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
      navClass: "navbar-light",
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
      this.setState({ navClass: "nav-sticky navbar-light fixed-top" });
    } else {
      this.setState({ navClass: "navbar-light bg-white" });
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
        {/* Importing Pricing */}

        {/* Importing Cta */}
        <Cta />

        <Pricing />
        {/* Importing Contact */}

        <Contact />
        {/* Importing Footer */}
        <Footer />
      </React.Fragment>
    );
  }
}

export default Layout8;
