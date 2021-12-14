import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NoteForm from "./NoteForm";
import Notes from "./Notes";

const ToDoApp = () => {
  const [notes, setNotes] = useState([]);
  const ekle = (note) => {
    setNotes([note, ...notes]);
  };

  const sil = (id) => {
    setNotes(notes.filter((note) => note.id != id));
  };

  return (
    <Container>
      <Row>
        <Col md={4}>
          <NoteForm ekle={ekle} />
        </Col>
        <Col md={8}>
          <Notes notes={notes} sil={sil} />
        </Col>
      </Row>
    </Container>
  );
};

export default ToDoApp;
