import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";

import { Link } from "react-router-dom";

export default class Pricing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pricingData: [
        {
          price: "$29",
          bandwidth: "1GB",
          onlinespace: "50MB",
          support: "no",
          domain: 1,
        },
        {
          price: "$59",
          bandwidth: "2GB",
          onlinespace: "500MB",
          support: "Yes",
          domain: 5,
        },
        {
          price: "$79",
          bandwidth: "4GB",
          onlinespace: "1 GB",
          support: "yes",
          domain: 10,
        },
      ],
    };
  }

  render() {
    const PricingBox = this.state.pricingData.map((item, key) => {
      return (
        <Col lg={4} key={key}>
          <div className="bg-white price-box text-center mt-3">
            <div className="plan-price fw-bold">
              <h1 className="mb-0 fw-bold">{item.price}</h1>
              <p className="mb-0">Per Month</p>
            </div>
            <div className="plan-features text-muted mt-5 mb-5">
              <p>
                Bandwidth: <b className="text-primary">{item.bandwidth}</b>
              </p>
              <p>Onlinespace: {item.onlinespace}</p>
              <p>Support: {item.support}</p>
              <p>{item.domain} Domain</p>
              <p className="mb-0">No Hidden Fees</p>
            </div>
            <div>
              <Link to="#" className="btn btn-primary btn-round">
                Join Now
              </Link>
            </div>
          </div>
        </Col>
      );
    });
    return (
      <React.Fragment>
        <section className="section bg-light" id="pricing">
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg={12}>
                <i className="ti-package title-icon text-muted"></i>
                <h3 className="title">
                  Our <span className="fw-bold">Pricing</span>
                </h3>
                <p className="text-muted mt-3 title-subtitle mx-auto">
                  It is a long established fact that a reader will be of a page
                  when established fact looking at its layout.
                </p>
              </Col>
            </Row>
            <Row className="mt-5">{PricingBox}</Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
