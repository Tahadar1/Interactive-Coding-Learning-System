import React from "react";
import { Container, Row, Col } from "reactstrap";
import CourseImg1 from "../../assests/images/web-design.png";
import CourseImg2 from "../../assests/images/graphics-design.png";
import CourseImg3 from "../../assests/images/ui-ux.png";
import "./course.css";
import CourseCard from "./CourseCard";

const coursesData = [
  {
    id: "01",
    title: "Web Design BootCamp-2023 for Beginners",
    lesson: 12,
    student: 12.5,
    rating: 5.9,
    imgUrl: CourseImg1,
  },
  {
    id: "02",
    title: "Professional Graphics Design, Figma",
    lesson: 12,
    student: 12.5,
    rating: 5.9,
    imgUrl: CourseImg2,
  },
  {
    id: "03",
    title: "UI/UX BootCamp for Beginners in 2023",
    lesson: 12,
    student: 12.5,
    rating: 5.9,
    imgUrl: CourseImg3,
  },
];

const Course = () => {


  const handlesubmit = () =>{
    localStorage.getItem('isLoggedIn') === 'true' 
    ?
    window.location.href = 'http://localhost:3000/dashboard'
    :
    window.location.href = 'http://localhost:3000/course'
  }


  return (
    <section>
      <Container>
        <Row>
        <Col lg='12' className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
                <div className="course__top__left w-50">
                    <h2>Our Popular Courses</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur qui esse cum amet asperiores ea incidunt neque autem doloribus mollitia! Libero quae est blanditiis eos excepturi error sed itaque hic?</p>

                </div>
                <div className="w-50 text-end" onClick={handlesubmit}>
                    <button className="btn">See All</button>
                </div>
            </div>
        </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Course;
