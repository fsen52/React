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

const Form3 = () => {
  const [formData, setFormData] = useState({
    ad: "",
    soyad: "",
    email: "",
    telefon: "",
  });
  const [mesaj, setMesaj] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForm = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
                name="ad"
                type="text"
                placeholder="Adınızı Giriniz"
                value={formData.ad}
                onChange={handleForm}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="soyad">
              <Form.Label>Soyadınız</Form.Label>
              <Form.Control
                name="soyad"
                type="text"
                placeholder="Soydınızı Giriniz"
                value={formData.soyad}
                onChange={handleForm}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="E-mailinizi Giriniz"
                value={formData.email}
                onChange={handleForm}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="telefon">
              <Form.Label>Telefonunuz</Form.Label>
              <Form.Control
                name="telefon"
                type="text"
                placeholder="Telefonunuzu Giriniz"
                value={formData.telefon}
                onChange={handleForm}
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
export default Form3;
