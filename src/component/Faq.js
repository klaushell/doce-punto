import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

export default class Faq extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section" id="faq">
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg={12}>
                <i className="ti-comments title-icon text-muted"></i>
                <h3 className="title">Our <span className="fw-bold">Support</span> Center</h3>
                <p className="text-muted mt-3 title-subtitle mx-auto">It is a long established fact that a reader will
                        be of a page when established fact looking at its layout.</p>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col lg={6}>
                <div className="ps-4 pe-4">
                  <div className="mt-4">
                    <div className="">
                      <h5 className="mb-0 f-18 font-weight-600">Q. What is Lorem Ipsum?</h5>
                    </div>
                    <div className="mt-3">
                      <p className="text-muted">You want customer to your store. Easily publish your coupans and
                      when a user has manage to catch one of your coupens, the coupens wil be deducted
                                    from your coupens account at Clooger.</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="">
                      <h5 className="mb-0 f-18 font-weight-600">Q. Why use Lorem Ipsum?</h5>
                    </div>
                    <div className="mt-3">
                      <p className="text-muted">You want customer to your store. Easily publish your coupans and
                      when a user has manage to catch one of your coupens, the coupens wil be deducted
                                    from your coupens account at Clooger.</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="">
                      <h5 className="mb-0 f-18 font-weight-600">Q. How many variations exist?</h5>
                    </div>
                    <div className="mt-3">
                      <p className="text-muted">You want customer to your store. Easily publish your coupans and
                      when a user has manage to catch one of your coupens, the coupens wil be deducted
                                    from your coupens account at Clooger.</p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="ps-4 pe-4">
                  <div className="mt-4">
                    <div className="">
                      <h5 className="mb-0 f-18 font-weight-600">Q. What is Lorem Ipsum?</h5>
                    </div>
                    <div className="mt-3">
                      <p className="text-muted">You want customer to your store. Easily publish your coupans and
                      when a user has manage to catch one of your coupens, the coupens wil be deducted
                                    from your coupens account at Clooger.</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="">
                      <h5 className="mb-0 f-18 font-weight-600">Q. Is safe use Lorem Ipsum?</h5>
                    </div>
                    <div className="mt-3">
                      <p className="text-muted">You want customer to your store. Easily publish your coupans and
                      when a user has manage to catch one of your coupens, the coupens wil be deducted
                                    from your coupens account at Clooger.</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="">
                      <h5 className="mb-0 f-18 font-weight-600">Q. When can be used?</h5>
                    </div>
                    <div className="mt-3">
                      <p className="text-muted">You want customer to your store. Easily publish your coupans and
                      when a user has manage to catch one of your coupens, the coupens wil be deducted
                                    from your coupens account at Clooger.</p>
                    </div>
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
