import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const Features = () => {
  const FeatureData = [
    {
      title: "Quick Learning",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis cum esse suscipit! Ratione, inventore dolores quas dolor temporibus earum porro quos deserunt corporis? Animi explicabo harum voluptas aliquid magni excepturi?",
      icon: "ri-draft-line",
    },
    {
      title: "24/7 Support",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis cum esse suscipit! Ratione, inventore dolores quas dolor temporibus earum porro quos deserunt corporis? Animi explicabo harum voluptas aliquid magni excepturi?",
      icon: "ri-discuss-line",
    },
    {
      title: "Certification",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis cum esse suscipit! Ratione, inventore dolores quas dolor temporibus earum porro quos deserunt corporis? Animi explicabo harum voluptas aliquid magni excepturi?",
      icon: "ri-contacts-book-line",
    },
  ];
  return (
    <section>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
