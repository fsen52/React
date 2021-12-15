import React, { useContext, useState } from "react";
import { Col, Container, Row, Form, Button, Spinner } from "react-bootstrap";
import axios from "axios";
import { StoreContext } from "../store";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    ssn: "111-11-1111",
    password: "12345",
  });

  const context = useContext(StoreContext);
  const { setUser } = context;

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const API_URL = "https://banking-api-back-end.herokuapp.com/api/";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    axios.post(`${API_URL}users/login`, formData).then((resp) => {
      const token = resp.data.id_token;
      const authHeader = { Authorization: "Bearer" + token };

      axios(`${API_URL}users/auth`, {
        headers: authHeader,
      }).then((respUser) => {
        setUser(respUser.data);
        setLoading(false);
        navigate("/");
      });
    });
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={4}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>S.S.N</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter S.S.N"
                name="ssn"
                value={formData.ssn}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={loading}>
              {loading && (
                <Spinner animation="border" variant="light" size="sm" />
              )}
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
