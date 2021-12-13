import React, { useState } from "react";
import { Container, Card, Button } from "react-bootstrap";

const RandomImages = () => {
  const [sayi, setSayi] = useState(Math.floor(Math.random() * 10 + 1));

  const sayiUret = () => {
    const rastgeleSayi = Math.floor(Math.random() * 10 + 1);
    setSayi(rastgeleSayi);

    console.log(sayi);
  };

  return (
    <Container className="mt-5">
      <Card style={{ width: "30rem" }}>
        {sayi <= 3 ? (
          <Card.Img
            variant="top"
            src="assets/img/Image1.jpg"
            style={{ width: "30rem", height: "30rem" }}
          />
        ) : sayi <= 7 ? (
          <Card.Img
            variant="top"
            src="assets/img/Image2.jpg"
            style={{ width: "30rem", height: "30rem" }}
          />
        ) : (
          <Card.Img
            variant="top"
            src="assets/img/Image3.jpg"
            style={{ width: "30rem", height: "30rem" }}
          />
        )}

        <Card.Body>
          <Button variant="primary" onClick={sayiUret}>
            Değiştir
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default RandomImages;
