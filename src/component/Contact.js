import React, { Component } from "react";
import { Col, Container, Form, Input, Row, Button } from "reactstrap";

export default class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section" id="contact">
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg={6}>
                <i className="ti-headphone-alt title-icon text-muted"></i>
                <h3 className="title">
                  Get In <span className="fw-bold">Touch</span>
                </h3>
                <p className="text-muted mt-3 title-subtitle mx-auto">
                  It is a long established fact that a reader will be of a page
                  when established fact looking at its layout.
                </p>
              </Col>
            </Row>
            <Row>
              <Col lg={4}>
                <div className="mt-4 pt-4">
                  <p className="text-muted mt-4">
                    {" "}
                    <span className="fw-bold ">Customer care:</span>
                    <br /> <span className="d-block mt-2">+1 234 56 7894</span>
                  </p>
                  <p className="text-muted mt-4">
                    <span className="fw-bold ">Office Address:</span>
                    <br />{" "}
                    <span className="d-block mt-2">
                      4461 Cedar Street Moro, AR 72368
                    </span>
                  </p>
                  <p className="text-muted mt-4">
                    <span className="fw-bold ">Email Address:</span>
                    <br /> <span className="d-block mt-2">info@gmail.com</span>
                  </p>
                  <p className="text-muted mt-4">
                    <span className="fw-bold ">Office Time:</span>
                    <br />{" "}
                    <span className="d-block mt-2">9:00AM To 6:00PM</span>
                  </p>
                </div>
              </Col>
              <Col lg={8}>
                <div className="custom-form mt-4 pt-4">
                  <Form method="post" name="myForm">
                    <p id="error-msg"></p>
                    <div id="simple-msg"></div>
                    <Row>
                      <Col lg={6}>
                        <div className="mb-3 mt-2">
                          <Input
                            name="name"
                            id="name"
                            type="text"
                            className="form-control"
                            placeholder="Your name*"
                          />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="mb-3 mt-2">
                          <Input
                            name="email"
                            id="email"
                            type="email"
                            className="form-control"
                            placeholder="Your email*"
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12}>
                        <div className="mb-3 mt-2">
                          <Input
                            name="subject"
                            id="subject"
                            type="text"
                            className="form-control"
                            placeholder="Your Subject.."
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12}>
                        <div className="mb-3 mt-2">
                          <Input
                            type="textarea"
                            name="comments"
                            id="comments"
                            rows="4"
                            className="form-control"
                            placeholder="Your message..."
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12} className="text-end">
                        <Button className="submitBnt btn btn-primary">
                          Send Message
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
