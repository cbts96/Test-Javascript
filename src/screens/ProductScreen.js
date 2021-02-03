import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from "react-bootstrap";

import products from "../products";

const ProductScreen = ({ match }) => {
  const product = products.find(
    (p) => Number(p.id) === Number(match.params.id)
  );
  const [qty, setQty] = useState(0);
  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image.src} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.title}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              {product.variants.map((item) => {
                return (
                  <Card.Text key={item.id} as="h3">
                    Discount:
                    {(
                      ((item.compare_at_price - item.price) * 100) /
                      item.compare_at_price
                    ).toFixed(2)}
                    %
                  </Card.Text>
                );
              })}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>
                      {" "}
                      {product.variants.map((item) => {
                        return (
                          <Card.Text key={item.id}>
                            <div className="old-price">
                              ${item.compare_at_price}
                            </div>
                            <h3>{item.price}$</h3>
                          </Card.Text>
                        );
                      })}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.variants.map((item) => {
                      return (
                        <Card.Text key={item.id}>
                          {item.inventory_quantity > 0
                            ? "In Stock"
                            : "Out of Stock"}
                        </Card.Text>
                      );
                    })}
                  </Col>
                </Row>
              </ListGroup.Item>

              {product.variants.map((item) => {
                return (
                  <ListGroup.Item>
                    <Row>
                      <Col>Qty</Col>
                      <Col>
                        {item.inventory_quantity >
                          0?(
                            <Form.Control
                              as="select"
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(item.inventory_quantity).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </Form.Control>):null
                          }
                        
                      </Col>
                    </Row>
                  </ListGroup.Item>
                );
              })}

              <ListGroup.Item>
                <Button
                  className="btn-block"
                  type="button"
                  disabled={product.variants.map((item) => {
                    return (
                      <Card key={item.id}>{item.inventory_quantity === 0}</Card>
                    );
                  })}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
