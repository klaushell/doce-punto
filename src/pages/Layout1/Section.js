import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Input,
  Form,
  Label,
  Button,
  FormGroup,
} from "reactstrap";

import { Link } from "react-router-dom";

class Section extends Component {
  render() {
    return (
      <React.Fragment>
        {/* Hero Start */}
        <section className="section bg-home" id="home">
          <div className="home-center">
            <div className="home-desc-center">
              <Container>
                <Row className="vertical-content">
                  <Col lg={7}>
                    <div>
                      <h1 className="text-white home-title mb-0">
                        Create amazing landing page with globing template
                      </h1>
                      <p className="text-muted home-subtitle mt-4 mb-0">
                        It is a long established fact that a reader will be of a
                        page when established fact looking at its layout.
                        Maecenas class semper class semper sollicitudin lectus
                        lorem iaculis imperdiet aliquam.
                      </p>
                      <div className="mt-4">
                        <Link
                          to="#"
                          className="btn btn-outline-white btn-round"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </Col>
                  <Col lg={5} className="mt-3">
                    <div className="home-registration-form mx-auto bg-white w-75 p-4">
                      <h5 className="form-title mb-4 text-center fw-bold">
                        Get 30 days FREE Trial
                      </h5>
                      <Form className="registration-form">
                        <FormGroup>
                          <Label
                            htmlFor="exampleInputName1"
                            className="text-muted"
                          >
                            First Name
                          </Label>
                          <Input
                            type="text"
                            id="exampleInputName1"
                            className="form-control mb-2 registration-input-box"
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label
                            htmlFor="exampleInputEmail1"
                            className="text-muted"
                          >
                            Email
                          </Label>
                          <Input
                            type="email"
                            id="exampleInputEmail1"
                            className="form-control mb-2 registration-input-box"
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label htmlFor="password1" className="text-muted">
                            Password
                          </Label>
                          <Input
                            type="password"
                            id="password1"
                            className="form-control mb-2 registration-input-box"
                          />
                        </FormGroup>
                        <Button className="btn btn-primary w-100 mt-3 text-uppercase">
                          Get Started
                        </Button>
                      </Form>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </section>
        {/* Hero End */}
      </React.Fragment>
    );
  }
}

export default Section;
