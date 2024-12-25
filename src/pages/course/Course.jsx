import React from "react";
import "../../index.css";
import "./Course.css";
import { courseData } from "../../data";
import { useParams } from "react-router-dom";
import MyNavbar from "../../components/navbar/Navbar";
import { Container, Row, Col } from "react-bootstrap";

function Course() {
  // Get the courseId from the URL params
  const courseId = useParams().courseId;

  // Find the course by its ID (ensure both are of the same type)
  const courseInfo = courseData.find(
    (course) => course.id === Number(courseId)
  );

  // If no course is found, you can show an error or fallback content
  if (!courseInfo) {
    return <div>Course not found</div>;
  }

  return (
    <div>
      <MyNavbar />
      <Container>
        <Row className="align-items-center">
          <Col md={5}>
            <img
              className="img-fluid"
              src={courseInfo.img}
              alt={courseInfo.title}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Col>
          <Col md={7} className="my-3">
            <h2 style={{ fontFamily: "lalezar" }}>{courseInfo.title}</h2>
            <p className="lalezar">Teacher: {courseInfo.teacher}</p>
            <p>
              <b>{courseInfo.text}</b>
            </p>
            <p style={{ textAlign: "justify" }}>
              Lorem Ipsum is a placeholder text generated by the printing
              industry to create an unreadable, simplistic output. Lorem Ipsum
              is a placeholder text generated by the printing industry to create
              an unreadable, simplistic output. Lorem Ipsum is a placeholder
              text generated by the printing industry to create an unreadable,
              simplistic output. Lorem Ipsum is a placeholder text generated by
              the printing industry to create an unreadable, simplistic output.
              Lorem Ipsum is a placeholder text generated by the printing
              industry to create an unreadable, simplistic output. Lorem Ipsum
              is a placeholder text generated by the printing industry to create
              an unreadable, simplistic output.Lorem Ipsum is a placeholder text
              generated by the printing industry to create an unreadable,
              simplistic output
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Course;
