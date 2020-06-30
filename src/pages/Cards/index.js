import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";
import "./index.css";

export default function Cards() {
  return (
    <>
      <h2 className="head">flipping cards</h2>
      <div className="all">
        <Container className="container">
          <Form as={Col} xs={6} sm={6} md={5} lg={4} xl={4}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Choose category</Form.Label>
              <div className="categoryButtons">
                <Form.Group className="mt-5">
                  <Button className="oneButton" variant="primary" type="submit">
                    Clothes{" "}
                  </Button>
                </Form.Group>
                <Form.Group className="mt-5">
                  <Button className="oneButton" variant="info" type="submit">
                    Transport{" "}
                  </Button>
                </Form.Group>
                <Form.Group className="mt-5">
                  <Button className="oneButton" variant="warning" type="submit">
                    Items{" "}
                  </Button>
                </Form.Group>
                <Form.Group className="mt-5">
                  <Button className="oneButton" variant="success" type="submit">
                    Sport{" "}
                  </Button>
                </Form.Group>
              </div>
            </Form.Group>
          </Form>
        </Container>
      </div>
    </>
  );
}
