import React from "react";
import "./CourseItem.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
function CourseItem({ id, title, img, text }) {
  return (
    <Card>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title className="lalezar">{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="primary">
          <Link to={`/course/${id}`} className="buy-btn">
            Buy Course
          </Link>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CourseItem;
