import React, { useState } from "react";
import {
  Container,
  Form,
  Row,
  Col,
  Button,
  Alert,
  Spinner,
} from "react-bootstrap";

const Form2 = () => {
  const [ad, setAd] = useState("");
  const [soyad, setSoyad] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [mesaj, setMesaj] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAd = (e) => {
    setAd(e.target.value);
  };

  const handleSoyad = (e) => {
    setSoyad(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleTelefon = (e) => {
    setTel(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setMesaj("");
    setTimeout(() => {
      setMesaj("Bilgileriniz gönderildi");
      setLoading(false);
    }, 3000);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={5}>
          {mesaj && <Alert variant="info">{mesaj}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="ad">
              <Form.Label>Adınız</Form.Label>
              <Form.Control
                type="text"
                placeholder="Adınızı Giriniz"
                value={ad}
                onChange={handleAd}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="soyad">
              <Form.Label>Soyadınız</Form.Label>
              <Form.Control
                type="text"
                placeholder="Soydınızı Giriniz"
                value={soyad}
                onChange={handleSoyad}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                type="email"
                placeholder="E-mailinizi Giriniz"
                value={email}
                onChange={handleEmail}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="telefon">
              <Form.Label>Telefonunuz</Form.Label>
              <Form.Control
                type="text"
                placeholder="Telefonunuzu Giriniz"
                value={tel}
                onChange={handleTelefon}
              />
            </Form.Group>

            <Button variant="danger" type="submit" disable={loading}>
              {loading && (
                <Spinner animation="border" size="sm" variant="light" />
              )}
              KAYDET
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default Form2;
