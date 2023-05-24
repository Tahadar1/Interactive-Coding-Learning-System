import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./cards.css";
import CourseImg1 from "../../assests/images/web-design.png";
import CourseImg2 from "../../assests/images/graphics-design.png";
import CourseImg3 from "../../assests/images/ui-ux.png";
import DashCard from "./DashCard";


const coursesData = [
    {
      id: "01",
      title: "Web Design BootCamp-2023 for Beginners",
      imgUrl: CourseImg1,
    },
    {
      id: "02",
      title: "Professional Graphics Design, Figma",
      imgUrl: CourseImg2,
    },
    {
      id: "03",
      title: "UI/UX BootCamp for Beginners in 2023",
      imgUrl: CourseImg3,
    },
    {
      id: "04",
      title: "UI/UX BootCamp for Beginners in 2023",
      imgUrl: CourseImg3,
    },
  ];


const Cards = () => {
  return (
    <section>
      <Container>
        <Row>
          {coursesData.map((item) => (
            <Col lg="3" md="6">
              <DashCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Cards;
