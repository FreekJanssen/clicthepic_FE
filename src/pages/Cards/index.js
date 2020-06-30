import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { fetchCards } from "../../store/cards/actions";
import "./index.css";

export default function Cards() {
  const dispatch = useDispatch();

  const findCard = (category) => {
    dispatch(fetchCards(category));
  };

  return (
    <div>
      <h2 className="head">flipping cards</h2>
      <div className="all">
        <Container className="container">
          <Form.Group controlId="formBasicName">
            <Form.Label>Choose category</Form.Label>
            <div className="categoryButtons">
              <Form.Group className="mt-5">
                <Button
                  className="oneButton"
                  variant="info"
                  type="button"
                  onClick={(event) => findCard(event.currentTarget.innerText)}
                >
                  Activities
                </Button>
              </Form.Group>
              <Form.Group className="mt-5">
                <Button
                  className="oneButton"
                  variant="warning"
                  type="button"
                  onClick={(event) => findCard(event.currentTarget.innerText)}
                >
                  Jobs
                </Button>
              </Form.Group>
              <Form.Group className="mt-5">
                <Button
                  className="oneButton"
                  variant="success"
                  type="button"
                  onClick={(event) => findCard(event.currentTarget.innerText)}
                >
                  Places
                </Button>
              </Form.Group>
            </div>
          </Form.Group>
        </Container>
      </div>
      <div className="cardsArea">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                className="picture"
                src="https://cdn.pixabay.com/photo/2020/02/17/15/05/fair-4856748_1280.jpg"
                alt="Illustration"
              />
            </div>
            <div className="flip-card-back">
              <h1 className="txtOnImg">TEXT</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
