import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import StarRatings from "react-star-ratings";
import Slider from "react-slick";


function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <React.Fragment>
      <div className="test_nav_right owl-nex" onClick={onClick}>
        <i className="ti-angle-right"></i>
      </div>
    </React.Fragment>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <React.Fragment>
      <div className="test_nav_left owl-prev" onClick={onClick}>
        <i className="ti-angle-left"></i>
      </div>
    </React.Fragment>
  );
}

export default class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          image: "assets/images/testi/testi-1.jpg",
          name: "John Litts, Globing",
          rating: 5,
          desc:
            "Risus cubilia etiam parturient augue nostra sodales sit aptent venenatis magna sapienante hendrerit ullamcorper tincidunt urna eget Ante feugiat.",
        },
        {
          id: 2,
          image: "assets/images/testi/testi-2.jpg",
          name: "John Litts, Globing",
          rating: 5,
          desc:
            "Risus cubilia etiam parturient augue nostra sodales sit aptent venenatis ullamcorper tincidunt urna, eget magna sapienante hendrerit Ante feugiat.",
        },
        {
          id: 3,
          image: "assets/images/testi/testi-3.jpg",
          name: "John Litts, Globing",
          rating: 4,
          desc:
            "Risus cubilia etiam parturient augue nostra sodales sit aptent venenatis magna ullamcorper tincidunt urna, eget sapienante hendrerit Ante feugiat.",
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
      arrows: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    const slides = this.state.items.map((item, key) => {
      return (
        <div className="carousel-item" key={key}>
          <div className="text-center w-75 mx-auto">
            <div className="testi-icon text-white">
              <i className="ti-quote-left"></i>
            </div>
            <div className="mt-3">
              <p className="user-review text-center">{item.desc}</p>
              <div className="">
                <img
                  src={item.image}
                  alt=""
                  className="rounded-circle testi-user mx-auto d-block"
                />
              </div>
              <p className="testi-user-name text-center text-white mb-0 mt-4">
                - {item.name}
              </p>
              <div className="text-muted">
                <StarRatings
                  items={3}
                  rating={item.rating}
                  starRatedColor="#ffc107"
                  numberOfStars={5}
                  name="rating"
                  starDimension="15px"
                  starSpacing="3px"
                />
              </div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <React.Fragment>
        <section className="section bg-client" id="testi">
          <Container>
            <Row className="justify-content-center mt-5 mb-5">
              <Col lg={12}>
                <div
                  id="carouselExampleControls"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <Slider className="slides" {...settings}>
                      {slides}
                    </Slider>
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
