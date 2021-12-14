import React from "react";
import { Card, Button } from "react-bootstrap";

const Note = (props) => {
  const { id, note, sil } = props;

  const handleClick = () => {
    sil(id);
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>{note}</Card.Title>
      </Card.Body>
      <Card.Footer className="text-muted">
        {" "}
        <Button variant="primary" onClick={handleClick}>
          Sil
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default Note;
