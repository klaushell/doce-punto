import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";


class Feature extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section bg-light" id="features">
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg={12} className="text-center">
                <i className="ti-bookmark-alt title-icon text-muted"></i>
                <h3 className="title">
                  Our <span className="fw-bold">Features</span>
                </h3>
                <p className="text-muted mt-3 title-subtitle mx-auto">
                  It is a long established fact that a reader will be of a page
                  when established fact looking at its layout.
                </p>
              </Col>
            </Row>

            <Row className="mt-5 vertical-content">
              <Col lg={6} className="mt-2">
                <div>
                  <img
                    src="assets/images/mockup1.png"
                    alt=""
                    className="img-fluid mx-auto d-block"
                  />
                </div>
              </Col>
              <Col lg={5} className="offset-lg-1 mt-2">
                <div className="features-desc">
                  <h2>
                    This is Improve Your Marketing <br /> business
                  </h2>
                  <p className="text-muted mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua Ut enim ad minim veniam, quis nostrud .
                  </p>
                  <Link to="#" className="btn btn-primary btn-round mt-3">
                    Read more<i className="mdi mdi-chevron-right"></i>
                  </Link>
                </div>
              </Col>
            </Row>
            <Row className="mt-5 pt-5 vertical-content">
              <Col lg={5} className="mt-2">
                <div className="features-desc">
                  <h2>
                    This Is Increase Your Marketing <br /> Performance
                  </h2>
                  <p className="text-muted mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua Ut enim ad minim veniam, quis nostrud .
                  </p>
                  <Link to="#" className="btn btn-primary btn-round mt-3">
                    Read more<i className="mdi mdi-chevron-right"></i>
                  </Link>
                </div>
              </Col>
              <Col lg={6} className="offset-lg-1 mt-2">
                <div>
                  <img
                    src="assets/images/mockup1.png"
                    alt=""
                    className="img-fluid mx-auto d-block"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Feature;
