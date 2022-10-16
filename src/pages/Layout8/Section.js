import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import { Link } from "react-router-dom";

class Section extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section bg-gradient half-home" id="home">
          <div className="home-center">
            <div className="home-desc-center">
              <Container>
                <Row className="justify-content-center">
                  <Col lg={10}>
                    <div className="text-center">
                      <h1 className="text-white home-title mb-0">A digital web studio creating stunning & engaging
                                    online experiences</h1>
                      <p className="text-white home-subtitle-center home-subtitle mt-4 mb-0 mx-auto">It is a long
                      established fact that a reader will be of a page when established fact looking at
                                    its layout.</p>
                      <div className="mt-4">
                        <Link to="#" className="btn btn-outline-white btn-round">Read More</Link>
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