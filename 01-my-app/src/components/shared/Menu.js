import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <ListGroup defaultActiveKey="">
      <ListGroup.Item as={Link} to="/bsclassic" eventKey="bsclassic">
        Bootstrap Classic
      </ListGroup.Item>
      <ListGroup.Item as={Link} to="/bsreact" eventKey="bsreact">
        Bootstrap React
      </ListGroup.Item>
      <ListGroup.Item as={Link} to="/image" eventKey="image">
        Image
      </ListGroup.Item>
      <ListGroup.Item as={Link} to="/todoapp" eventKey="todoapp">
        To Do App
      </ListGroup.Item>
      <ListGroup.Item as={Link} to="/exchange" eventKey="exchange">
        Exchange
      </ListGroup.Item>
    </ListGroup>
  );
};

export default Menu;
