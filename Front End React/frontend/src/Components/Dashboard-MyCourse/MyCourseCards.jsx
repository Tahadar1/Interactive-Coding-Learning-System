import React from "react";
import { Container, Row, Col } from "reactstrap";
import CourseImg1 from "../../assests/images/web-design.png";
import "./mycourse.css";
import MyCourse from "./MyCourse";

const coursesData = [
  {
    id: "01",
    title: "Web Design BootCamp-2023 for Beginners",
    imgUrl: CourseImg1,
  },
];

const MyCourseCards = () => {
  return (
    <section>
      <Container>
        <Row>
          {coursesData.map((item) => (
            <Col lg="3" md="6">
              <MyCourse key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default MyCourseCards;
