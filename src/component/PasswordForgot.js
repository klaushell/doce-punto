import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Form, Input, Row, Button } from "reactstrap";

export default class PasswordForgot extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="bg-login d-flex align-items-center">
          <Container>
            <Row className="justify-content-center mt-4">
              <Col lg={4}>
                <div className="bg-white p-4 mt-5 rounded">
                  <div className="text-center">
                    <h4 className="fw-bold mb-3">Globing</h4>
                  </div>
                  <h6 className="text-center text-muted fw-normal forgot-pass-txt">Enter your email address
                            and we'll send you an email with instructions to reset your password.</h6>
                  <Form className="login-form">
                    <Row>
                      <Col lg={12} className="mt-3">
                        <Input type="email" className="form-control" placeholder="Email" required="" />
                      </Col>
                      <Col lg={12} className="mt-3">
                        <Button className="btn btn-primary w-100">Reset your Password</Button>
                      </Col>
                    </Row>
                  </Form>
                </div>
                <div className="text-center mt-3">
                  <p><small className="text-white me-2">Already have account?</small> <Link to="/Login" className="text-white fw-bold">Sign In</Link></p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
