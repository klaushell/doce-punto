import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";

import { Link } from "react-router-dom";

class Section extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 1,
                    title: 'We love make things amazing and simple',
                    description: 'It is a long established fact that a reader will be of a page when established fact looking at its layout.',
                },
                {
                    id: 2,
                    title: 'Create amazing landing page with Globing',
                    description: 'It is a long established fact that a reader will be of a page when established fact looking at its layout.',
                },
                {
                    id: 3,
                    title: 'Perfact solution for small businesses',
                    description: 'It is a long established fact that a reader will be of a page when established fact looking at its layout.',
                },
            ],
        };
    }
    render() {
        var settings = {
            dots: true,
            arrows: false,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            dotsClass: 'slick-dots carousel-indicators mx-auto',
            appendDots: dots => {
                return (
                  <div>
                    <ul>
                      {dots.map((item, index) => {
                        return (
                          <li key={index}>{item.props.children}</li>
                        );
                      })}
                    </ul>
                  </div>
                )
              },
        };
        const slides = this.state.items.map((item, key) => {
            return (
                <div className="carousel-item" key={key}>
                    <h1 className="text-white home-title mb-0"><span className="text-rotate">{item.title}</span></h1>
                    <p className="text-muted home-subtitle-center home-subtitle mt-4 mb-0 mx-auto">{item.description}</p>
                    <div className="mt-4 mb-4">
                        <Link to="#" className="btn btn-outline-white btn-round">Read More</Link>
                    </div>
                </div>
            );
        });

        return (
            <React.Fragment>
                <section className="section bg-home half-home" id="home">
                    <div className="home-center">
                        <div className="home-desc-center">
                            <div className="container">
                                <Container>
                                    <Row className="justify-content-center">
                                        <Col className="10">
                                            <div id="carouselExampleIndicators" className="carousel slide text-center home-carousel">
                                                <Slider className="slides" {...settings}>
                                                    {slides}
                                                </Slider>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Section;
