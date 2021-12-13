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

const Form4 = () => {
  const [formData, setFormData] = useState({
    ad: "",
    soyad: "",
    email: "",
    telefon: "",
  });
  const [mesaj, setMesaj] = useState("");
  const [loading, setLoading] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleForm = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    if (!form.checkValidity()) {
      setValidated(true);
      return;
    }

    setValidated(true);

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
          <Form noValidate onSubmit={handleSubmit} validated={validated}>
            <Form.Group className="mb-3" controlId="ad">
              <Form.Label>Adınız</Form.Label>
              <Form.Control
                required
                minLength={3}
                name="ad"
                type="text"
                placeholder="Adınızı Giriniz"
                value={formData.ad}
                onChange={handleForm}
              />
              <Form.Control.Feedback type="invalid">
                Lütfen adınızı giriniz.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="soyad">
              <Form.Label>Soyadınız</Form.Label>
              <Form.Control
                required
                name="soyad"
                type="text"
                placeholder="Soyadınızı Giriniz"
                value={formData.soyad}
                onChange={handleForm}
              />

              <Form.Control.Feedback type="invalid">
                Lütfen soyadınızı giriniz.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                required
                name="email"
                type="email"
                placeholder="E-mailinizi Giriniz"
                value={formData.email}
                onChange={handleForm}
              />
              <Form.Control.Feedback type="invalid">
                Lütfen geçerli bir mail adresi giriniz.
              </Form.Control.Feedback>
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
export default Form4;
