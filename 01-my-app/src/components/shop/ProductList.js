import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import data from "../../data/products.json";
import Product from "./Product";

const ProductList = () => {

    

  return (
    <Container className="my-5">
      <Row className="g-5">
        {data.map((product) => {
          return (
            <Col md={4}>
              <Product
                title={product.title}
                image={product.image}
                desc={product.desc}
                price={product.price}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ProductList;
