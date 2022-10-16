import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Form, Input, Row, Label , Button} from "reactstrap";

export default class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="bg-login d-flex align-items-center">
          <Container>
            <Row className="justify-content-center mt-4">
              <Col lg={4}>
                <div className="bg-white p-4 rounded">
                  <div className="text-center">
                    <h4 className="fw-bold mb-3">Globing</h4>
                  </div>
                  <Form className="login-form">
                    <Row>
                      <Col lg={12} className="mt-2">
                        <Input type="email" className="form-control" placeholder="Email" required="" />
                      </Col>
                      <Col lg={12} className="mt-2">
                        <Input type="password" className="form-control" placeholder="Password" required="" />
                      </Col>
                      <Col lg={12} className="mt-2">
                        <div className="form-check">
                          <Label className="form-check-label" for="flexCheckDefault">
                            <Input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />{' '}
                          Remember me
                        </Label>
                        </div>
                      </Col>
                      <Col lg={12} className="mt-3 mb-4">
                        <Button className="btn btn-primary w-100">Sign in</Button>
                      </Col>
                      <div className="text-center">
                        <p className="mb-0 mt-2 text-center">
                          <Link to="/PasswordForgot" className="text-dark fw-bold">Forgot your
                                            password ?</Link>
                        </p>
                      </div>
                    </Row>
                  </Form>
                </div>
                <div className="text-center mt-3">
                  <p><small className="text-white me-2">Don't have an account ?</small>
                    <Link to="/signup" className="text-white fw-bold">Create an account</Link></p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
