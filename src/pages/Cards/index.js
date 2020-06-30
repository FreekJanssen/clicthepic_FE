import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";
import "./index.css";

export default function Cards() {
  return (
    <div className="all">
      <h2 className="head">flipping cards</h2>
      <Container className="container">
        <Form as={Col} xs={6} sm={6} md={5} lg={4} xl={4}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Choose category</Form.Label>
            <Form.Group className="mt-5">
              <Button variant="primary" type="submit">
                Clothes{" "}
              </Button>
            </Form.Group>
            <Form.Group className="mt-5">
              <Button variant="info" type="submit">
                Transport{" "}
              </Button>
            </Form.Group>
            <Form.Group className="mt-5">
              <Button variant="warning" type="submit">
                Items{" "}
              </Button>
            </Form.Group>
            <Form.Group className="mt-5">
              <Button variant="success" type="submit">
                Sport{" "}
              </Button>
            </Form.Group>
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
}
