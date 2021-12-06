import React from "react";
import { Card, Button } from "react-bootstrap";

const Product = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={require(`../../assets/img/${props.image}`).default} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.desc}</Card.Text>
        <Card.Text>{props.price}</Card.Text>

        <Button variant="warning">Add chart</Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
