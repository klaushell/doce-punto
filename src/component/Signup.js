import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Form, Input, Row, Label , Button} from "reactstrap";

export default class Signup extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="bg-login d-flex align-items-center">
          <Container>
              <Row className="justify-content-center mt-4">
                <Col lg="4">
                  <div className="bg-white p-4 mt-5 rounded">
                    <div className="text-center">
                        <h4 className="fw-bold mb-3">Globing</h4>
                    </div>
                    <Form className="login-form">
                      <Row>
                        <Col lg={12} className="mt-2">
                            <Input type="text" className="form-control" placeholder="First Name" required="" />
                        </Col>
                        <Col lg={12} className="mt-2">
                            <Input type="email" class="form-control" placeholder="Email" required="" />
                        </Col>
                        <Col lg={12} className="mt-2">
                          <Input type="password" className="form-control" placeholder="Password" required="" />
                        </Col>
                        <Col lg={12} className="mt-2">
                        <div className="form-check">
                          <Input className="form-check-input" type="checkbox" id="flexCheckDefault" />
                          <Label>I Accept {" "}<Link to="#">Terms And Condition</Link></Label>
                        </div>
                        </Col>
                        <Col lg={12} className="mt-4">
                          <Button className="btn btn-primary w-100">Register</Button>
                        </Col>
                      </Row>
                    </Form>
                  </div>
                  <div class="text-center mt-3">
                      <p><small class="text-white mr-2">Already have an account ?</small> <Link to="/Login" class="text-white fw-bold">Sign in</Link></p>
                  </div>
                </Col>
              </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
