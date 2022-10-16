import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

export default class Cta extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="text-center">
                  <h3 className="mb-4">You have another questions or need help?</h3>
                  <div className="">
                    <Link to="#" className="btn btn-round btn-primary">Contact Us</Link>
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
