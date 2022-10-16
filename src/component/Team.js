import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

export default class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamData: [
        {
          profile: "assets/images/team/team-1.png",
          name: "@Donald Laughlin",
          description:
            "You want customer to your store. Easily your coupans and has Clooger.",
        },
        {
          profile: "assets/images/team/team-2.png",
          name: "@Rigoberto Valenza",
          description:
            "You want customer to your store. Easily your coupans and has Clooger.",
        },
        {
          profile: "assets/images/team/team-3.png",
          name: "@Venessa Smith",
          description:
            "You want customer to your store. Easily your coupans and has Clooger.",
        },
      ],
    };
  }
  render() {
    return (
      <React.Fragment>
        <section className="section bg-light" id="team">
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg={12}>
                <i className="ti-user title-icon text-muted"></i>
                <h3 className="title">
                  Our <span className="fw-bold">Team</span>
                </h3>
                <p className="text-muted mt-3 title-subtitle mx-auto">
                  It is a long established fact that a reader will be of a page
                  when established fact looking at its layout.
                </p>
              </Col>
            </Row>

            <Row className="mt-5">
              {this.state.teamData.map((team, key) => (
                <Col lg={4} key={key}>
                  <div className="text-center bg-white team-box mt-3 p-5">
                    <div className="">
                      <img
                        src={team.profile}
                        alt=""
                        className="img-fluid rounded-circle mx-auto d-block"
                      />
                    </div>
                    <div className="team-name">
                      <p className="fw-bold mb-0 mt-4">{team.name}</p>
                      <p className="text-muted mt-4">{team.description}</p>
                    </div>
                    <div className="">
                      <ul className="list-inline team-social mt-4 mb-0">
                        <li className="list-inline-item">
                          <Link to="#">
                            <i className="ti-github"></i>
                          </Link>
                        </li>
                        <li className="list-inline-item">
                          <Link to="#">
                            <i className="ti-skype"></i>
                          </Link>
                        </li>
                        <li className="list-inline-item">
                          <Link to="#">
                            <i className="ti-twitter-alt"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
