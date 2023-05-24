import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import "./footer.css";

const footerQuickLinks = [
  {
    display: "Home",
    url: "/",
  },
  {
    display: "About Us",
    url: "/about",
  },
  {
    display: "Courses",
    url: "/course",
  },
];

const footerInfoLinks = [
  {
    display: "Privacy Policy",
    url: "#",
  },
  {
    display: "Membership",
    url: "#",
  },
  {
    display: "Purchases Guide",
    url: "#",
  },
  {
    display: "Terms of Services",
    url: "#",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <h2 className=" d-flex align-items-center gap-1">
              <i class="ri-pantone-line"></i> Learners.{" "}
            </h2>
            <div className="follows">
              <span>
                {" "}
                <a href="https://www.facebook.com">
                  <i class="ri-facebook-line"></i>
                </a>
              </span>
              <span>
                {" "}
                <a href="https://www.instagram.com">
                  <i class="ri-instagram-line"></i>
                </a>
              </span>
              <span>
                {" "}
                <a href="https://www.twitter.com">
                  <i class="ri-twitter-line"></i>
                </a>
              </span>
              <span>
                {" "}
                <a href="https://www.linkedin.com">
                  <i class="ri-linkedin-line"></i>
                </a>
              </span>
            </div>
          </Col>

          <Col lang="3">
            <h6 className="fw-bold">Explore</h6>
            <ListGroup className="link__list">
              {footerQuickLinks.map((item, index) => (
                <ListGroupItem key={index} className='border-0 ps-0 link__items'>
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lang="3">
            <h6 className="fw-bold">Information</h6>
            <ListGroup className="link__list">
              {footerInfoLinks.map((item, index) => (
                <ListGroupItem key={index} className='border-0 ps-0 link__items'>
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg='3'>
            <h6 className="fw-bold">Get in Touch</h6>
            <p>Address: Street # Office # Islamabad, PK</p>
            <p>Phone: +923125381057</p>
            <p>Email: tahadar4321@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
