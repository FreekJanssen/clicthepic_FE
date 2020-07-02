import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCards, setCards } from "../../store/cards/actions";
import { selectCards } from "../../store/cards/selectors";
import Button from "react-bootstrap/Button";
import "./index.css";

export default function Cards() {
  const dispatch = useDispatch();
  const cards = useSelector(selectCards);

  const findCard = (category) => {
    dispatch(fetchCards(category));
  };

  //effect with cleanup:
  useEffect(() => {
    return () => {
      dispatch(setCards([]));
    };
  }, []);

  return (
    <div>
      <h1 className="head">Flip the Pic</h1>
      <div className="">
        <p className="chooseCategory">
          Choose category and flip the pic to see its description
        </p>
        <div className="cardsContainer">
          <Button
            className="oneButton"
            variant="info"
            type="button"
            onClick={(event) => findCard(event.currentTarget.innerText)}
          >
            Activities
          </Button>

          <Button
            className="oneButton"
            variant="warning"
            type="button"
            onClick={(event) => findCard(event.currentTarget.innerText)}
          >
            Jobs
          </Button>

          <Button
            className="oneButton"
            variant="success"
            type="button"
            onClick={(event) => findCard(event.currentTarget.innerText)}
          >
            Places
          </Button>
        </div>
      </div>
      <div className="cardsAreaWrapper">
        {cards.length > 0 &&
          cards.map((item) => (
            <div className="cardsArea" key={item.id}>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      className="picture"
                      src={item.image}
                      alt="Illustration"
                    />
                  </div>
                  <div className="flip-card-back">
                    <h3 className="txtOnImg">{item.word}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
