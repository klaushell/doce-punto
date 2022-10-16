import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import ReactPlayer from "react-player";

import { Link } from "react-router-dom";

class Section extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section vh-100" id="home">
          <ReactPlayer
            id="myVideo"
            url="https://themesbrand.com/background-video.mp4"
            type="video/mp4"
            width="100%"
            height="unset"
            loop={true}
            playing={true}
            muted={true}
          />
          <div className="bg-overlay"></div>
          <div className="home-center">
            <div className="home-desc-center">
              <Container>
                <Row>
                  <Col lg={7}>
                    <div>
                      <h1 className="text-white home-title mb-0">
                        We Love Make Things Amazing And Simple
                      </h1>
                      <p className="text-muted home-subtitle mt-4 mb-0">
                        It is a long established fact that a reader will be of a
                        page when established fact looking at its layout.
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
