import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import { Link } from "react-router-dom";
import Particles from "react-particles-js";

class Section extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section bg-home-full vh-100 bg-home" id="home">
          <Particles
            params={{
              particles: {
                number: {
                  value: 80,
                  density: {
                    enable: true,
                    value_area: 800,
                  },
                },
                color: {
                  value: "#ffffff",
                },
                shape: {
                  type: "circle",
                  stroke: {
                    width: 0,
                    color: "#000000",
                  },
                  polygon: {
                    nb_sides: 5,
                  },
                  image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100,
                  },
                },
                opacity: {
                  value: 0.5,
                  random: false,
                  anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false,
                  },
                },
                size: {
                  value: 5,
                  random: true,
                  anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false,
                  },
                },
                line_linked: {
                  enable: true,
                  distance: 150,
                  color: "#ffffff",
                  opacity: 0.4,
                  width: 1,
                },
                move: {
                  enable: true,
                  speed: 6,
                  direction: "none",
                  random: false,
                  straight: false,
                  out_mode: "out",
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                  },
                },
              },
              interactivity: {
                detect_on: "canvas",
                events: {
                  onhover: {
                    enable: true,
                    mode: "repulse",
                  },
                  onclick: {
                    enable: true,
                    mode: "push",
                  },
                  resize: true,
                },
                modes: {
                  grab: {
                    distance: 400,
                    line_linked: {
                      opacity: 1,
                    },
                  },
                  bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 2,
                    speed: 3,
                  },
                  repulse: {
                    distance: 200,
                  },
                  push: {
                    particles_nb: 4,
                  },
                  remove: {
                    particles_nb: 2,
                  },
                },
              },
              retina_detect: true,
              config_demo: {
                hide_card: false,
                background_color: "#b61924",
                background_image: "",
                background_position: "50% 50%",
                background_repeat: "no-repeat",
                background_size: "cover",
              },
            }}
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: "0px",
            }}
          />
          <div className="home-center">
            <div className="home-desc-center">
              <Container className="slidero">
                <Row className="justify-content-center">
                  <Col lg="10">
                    <div className="text-center">
                      <h1 className="text-white home-title mb-0">A digital web studio creating stunning & engaging
                                    online experiences</h1>
                      <p className="text-muted home-subtitle-center mx-auto home-subtitle mt-4 mb-0">It is a long
                      established fact that a reader will be of a page when established fact looking at
                                    its layout.</p>
                      <div className="mt-4">
                        <Link to="#" className="btn btn-primary btn-round">Learn More</Link>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Section;
