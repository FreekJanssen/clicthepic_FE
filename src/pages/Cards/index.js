import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";
import "./index.css";

export default function Cards() {
  return (
    <div>
      <h2 className="head">flipping cards</h2>
      <div className="all">
        <Container className="container">
          <Form.Group controlId="formBasicName">
            <Form.Label>Choose category</Form.Label>
            <div className="categoryButtons">
              <Form.Group className="mt-5">
                <Button className="oneButton" variant="primary" type="submit">
                  People{" "}
                </Button>
              </Form.Group>
              <Form.Group className="mt-5">
                <Button className="oneButton" variant="info" type="submit">
                  Fruits{" "}
                </Button>
              </Form.Group>
              <Form.Group className="mt-5">
                <Button className="oneButton" variant="warning" type="submit">
                  Jobs{" "}
                </Button>
              </Form.Group>
              <Form.Group className="mt-5">
                <Button className="oneButton" variant="success" type="submit">
                  Places{" "}
                </Button>
              </Form.Group>
            </div>
          </Form.Group>
        </Container>
      </div>
      <div className="cardsArea">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img
                className="picture"
                src="https://cdn.pixabay.com/photo/2020/02/17/15/05/fair-4856748_1280.jpg"
                alt="Illustration"
              />
            </div>
            <div class="flip-card-back">
              <h1 className="txtOnImg">TEXT</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
