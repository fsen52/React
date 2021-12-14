import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Note from "./Note";

const Notes = (props) => {
  return (
    <Container style={{ margin: "0", padding: "0" }}>
      <Row className="g-4">
        {props.notes.map((item) => {
          return (
            <Col md={2} key={item.id}>
              <Note id={item.id} note={item.note} sil={props.sil} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Notes;
