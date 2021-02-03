import React from "react";
import { Row, Col,Alert } from "react-bootstrap";
import Product from "../components/Product";


const HomeScreen = ({ search }) => {
  console.log(search);
  return (
    <>
      <h1>Products List</h1>
      <Alert variant="success">
        <Alert.Heading>Hey, nice to see you</Alert.Heading>
        <p>
          <p>Please type in SearchBar to find your product (Example: egacro....) and click the product to see more detail</p>
        </p>
      </Alert>
      
      {search ? (
        <Row>
          {search.map((product) => (
            <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      ) : (
        "NotFound, Please search again!"
      )}
    </>
  );
};

export default HomeScreen;
