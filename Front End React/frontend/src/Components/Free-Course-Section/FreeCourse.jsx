import React from "react";
import { Container, Row, Col } from "reactstrap";
import CourseImg1 from "../../assests/images/web-development.png";
import CourseImg2 from "../../assests/images/kids-learning.png";
import CourseImg3 from "../../assests/images/seo.png";
import CourseImg4 from "../../assests/images/ui-ux.png";
import "./freecourse.css";
import FreeCourseCard from "./FreeCourseCard";

const FreeCourseData = [
  {
    id: "01",
    title: "Basic Web Development",
    imgUrl: CourseImg1,
    student: 5.3,
    rating: 1.3,
  },
  {
    id: "02",
    title: "Coding For Junior Bsic Course",
    imgUrl: CourseImg2,
    student: 5.3,
    rating: 1.3,
  },
  {
    id: "03",
    title: "Search Engine Optimization - Basic",
    imgUrl: CourseImg3,
    student: 5.3,
    rating: 1.3,
  },
  {
    id: "04",
    title: "UI/UX Design - Figma",
    imgUrl: CourseImg4,
    student: 5.3,
    rating: 1.3,
  },
];
const FreeCourse = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-5">
            <h2 className="fw-bold">Our Free Courses</h2>
          </Col>

          {FreeCourseData.map((item) => (
            <Col lg="3" key={item.id}>
              <FreeCourseCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FreeCourse;
