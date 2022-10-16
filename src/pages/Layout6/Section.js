import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  FormGroup,
} from "reactstrap";
import Slider from "react-slick";

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
                  <Col lg={10}>
                    <div className="text-center">
                      <h1 className="text-white home-title mb-0">
                        A digital web studio creating stunning & engaging online
                        experiences
                      </h1>
                      <p className="text-white home-subtitle-center home-subtitle mt-4 mb-0 mx-auto">
                        It is a long established fact that a reader will be of a
                        page when established fact looking at its layout.
                      </p>
                      <div className="text-center search-form mt-4">
                        <Form>
                          <FormGroup>
                            <input type="text" placeholder="Email" />
                            <Button className="btn btn-primary">
                              SubCribe
                            </Button>
                          </FormGroup>
                        </Form>
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
