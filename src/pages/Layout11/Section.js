import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";

import { Link } from "react-router-dom";
import ReactTextRotator from "react-text-rotator";

const rotatetext = [
  {
    text: "We love make things amazing and simple",
    animation: "false",
  },
  {
    text: "Create amazing landing page with Globing",
    animation: "false",
  },
  {
    text: "Perfact solution for small businesses",
    animation: "false",
  },
];

class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          image: "assets/images/slide-1.jpg",
        },
        {
          id: 2,
          image: "assets/images/slide-2.jpg",
        },
        {
          id: 3,
          image: "assets/images/slide-3.jpg",
        },
      ],
    };
  }
  render() {
    var settings = {
      autoplay: true,
      infinite: true,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      draggable: true,
      pauseOnHover: true,
    };
    const slides = this.state.items.map((item, key) => {
      return (
        <section className="back-slide" id="home" key={key}>
          <img name="silde" className="slide-img" src={item.image} alt="" />
          <div className="bg-overlay"></div>
          <div className="home-center">
            <div className="home-desc-center">
              <Container>
                <Row className="justify-content-center">
                  <Col lg={9}>
                    <div className="text-center">
                      <h1
                        className="home-title text-white text-rotate"
                        id="target"
                      >
                        <ReactTextRotator content={rotatetext} time={3000} />
                      </h1>
                      <p className="text-white home-subtitle-center home-subtitle mt-4 mb-0 mx-auto">
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
      );
    });
    return (
      <React.Fragment>
        <section className="main-slider">
          <Slider className="slides" {...settings}>
            {slides}
          </Slider>
        </section>
      </React.Fragment>
    );
  }
}

export default Section;
