import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row } from "reactstrap";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSwitchToggle: false,
    };
    this.toggleSwitcher = this.toggleSwitcher.bind(this);
    this.setTheme = this.setTheme.bind(this);
    this.scrollTop = this.scrollTop.bind(this);
  }
  setTheme = (color) => {
    document.getElementById("colorTheme").href =
      "assets/css/colors/" + color + ".css";
  };

  toggleSwitcher = () => {
    this.setState({ isSwitchToggle: !this.state.isSwitchToggle });
  };

 //Scroll to top
  scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  componentDidMount() {
    window.addEventListener("scroll", this.scrollNavigation, true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      document.getElementById("back-to-top").style.display = "inline";
    } else {
      document.getElementById("back-to-top").style.display = "none";
    }
  }
  render() {
    return (
      <React.Fragment>
        {/* Footer Start */}
        <footer className="section footer">
          <Container>
            <Row>
              <div className="text-center">
                <ul className="list-inline social mb-0">
                  <li className="list-inline-item">
                    <Link to="#" className="social-icon text-muted">
                      <i className="ti-facebook"></i>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#" className="social-icon text-muted">
                      <i className="ti-twitter-alt"></i>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#" className="social-icon text-muted">
                      <i className="ti-linkedin"></i>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="footer-terms">
                <ul className="mb-0 list-inline text-center mt-4 pt-2">
                  <li className="list-inline-item">
                    <Link to="#" className="text-muted">
                      Terms & Condition
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#" className="text-muted">
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#" className="text-muted">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-4 pt-2 text-center">
                <p className="copy-rights text-muted mb-0">
                  {new Date().getFullYear()} © Globing. Design by Themesbrand
                </p>
              </div>
            </Row>
          </Container>
        </footer>
        {/* Footer End */}
        
        {/* scrollup button */}
        <Link to="#" onClick={this.scrollTop} className="back-to-top" id="back-to-top"> <i className="ti-angle-up"> </i> </Link>


        <div
          id="style-switcher"
          style={{ left: this.state.isSwitchToggle ? "0px" : "-189px" }}
        >
          <div>
            <h3>Select your color</h3>
            <ul className="pattern">
              <li>
                <Link
                  className="color1"
                  onClick={() => this.setTheme("default")}
                  to="#"
                ></Link>
              </li>
              <li>
                <Link
                  className="color2"
                  onClick={() => this.setTheme("pink")}
                  to="#"
                ></Link>
              </li>
              <li>
                <Link
                  className="color3"
                  onClick={() => this.setTheme("yellow")}
                  to="#"
                ></Link>
              </li>
              <li>
                <Link
                  className="color4"
                  onClick={() => this.setTheme("green")}
                  to="#"
                ></Link>
              </li>
              <li>
                <Link
                  className="color5"
                  onClick={() => this.setTheme("purple")}
                  to="#"
                ></Link>
              </li>
              <li>
                <Link
                  className="color6"
                  onClick={() => this.setTheme("light-blue")}
                  to="#"
                ></Link>
              </li>
            </ul>
          </div>
          <div className="bottom">
            <Link
              to="#"
              onClick={this.toggleSwitcher}
              className="settings rounded-right"
            >
              <i className="ti-settings ti-spin"></i>
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
