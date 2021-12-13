import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <ListGroup>
      <ListGroup.Item>
        <Link to="/bsclassic"> Bootstrap Classic</Link>
      </ListGroup.Item>
      <ListGroup.Item>
        <Link to="/bsreact"> Bootstrap React</Link>
      </ListGroup.Item>
      <ListGroup.Item>
        <Link to="/image"> Image</Link>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default Menu;
