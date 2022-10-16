import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

export default class Services extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section" id="services">
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg={12}>
                <i className="ti-ruler-pencil title-icon text-muted"></i>
                <h3 className="title">
                  Best <span className="fw-bold">Services</span>
                </h3>
                <p className="text-muted mt-3 title-subtitle mx-auto">
                  It is a long established fact that a reader will be of a page
                  when established fact looking at its layout.
                </p>
              </Col>
            </Row>

            <Row className="mt-5">
              <Col md={4}>
                <div className="services-box">
                  <div className="services-icon">
                    <i className="ti-settings text-primary"></i>
                  </div>
                  <div className="mt-3">
                    <h5 className="services-title fw-bold mb-3">
                      Digital Design
                    </h5>
                    <p className="services-subtitle text-muted">
                      {" "}
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </Col>

              <Col md={4}>
                <div className="services-box">
                  <div className="services-icon">
                    <i className="ti-palette text-primary"></i>
                  </div>
                  <div className="mt-3">
                    <h5 className="services-title fw-bold mb-3">
                      Unlimited Colors
                    </h5>
                    <p className="services-subtitle text-muted">
                      {" "}
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </Col>

              <Col md={4}>
                <div className="services-box">
                  <div className="services-icon">
                    <i className="ti-stats-up text-primary"></i>
                  </div>
                  <div className="mt-3">
                    <h5 className="services-title fw-bold mb-3">
                      Strategy Solutions
                    </h5>
                    <p className="services-subtitle text-muted">
                      {" "}
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <div className="services-box">
                  <div className="services-icon">
                    <i className="ti-package text-primary"></i>
                  </div>
                  <div className="mt-3">
                    <h5 className="services-title fw-bold mb-3">
                      Awesome Support
                    </h5>
                    <p className="services-subtitle text-muted">
                      {" "}
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="services-box">
                  <div className="services-icon">
                    <i className="ti-dashboard text-primary"></i>
                  </div>
                  <div className="mt-3">
                    <h5 className="services-title fw-bold mb-3">
                      Truly Multipurpose
                    </h5>
                    <p className="services-subtitle text-muted">
                      {" "}
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="services-box">
                  <div className="services-icon">
                    <i className="ti-headphone text-primary"></i>
                  </div>
                  <div className="mt-3">
                    <h5 className="services-title fw-bold mb-3">
                      Easy to customize
                    </h5>
                    <p className="services-subtitle text-muted">
                      {" "}
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
