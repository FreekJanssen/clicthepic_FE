import React from "react";
import Button from "react-bootstrap/Button";
import "./index.css";

export default function About() {
  return (
    <div>
      <h1 className="head">About this project</h1>
      <p className="contentAbout">
        Hey! Let's talk about CLICK THE PIC - the language learning app...
        <br></br>
        This project was created by Ewa and Freek, just to practice programming
        with React, Redux, external API, Sequelize, Express and other tools. The
        main idea of this app is to have a fun while learning a foreign
        language. So, we provided 2 educational games, based on visual
        memorizing the vocabulary.
        <hr></hr>Please notice, this is just MVP, not a final version. This app
        can be developed in the future... For more details, please visit our
        Github repos:
      </p>
      <div className="twoButtons">
        <Button
          variant="outline-dark"
          className="repoButton"
          href="https://github.com/FreekJanssen/clicthepic_FE"
          target="blank"
        >
          <h6 className="goToRepo">FRONTEND</h6>
        </Button>
        <Button
          variant="outline-dark"
          className="repoButton"
          href="https://github.com/ewa-mi/clickthepic-server"
          target="blank"
        >
          <h6 className="goToRepo">BACKEND</h6>
        </Button>
      </div>
    </div>
  );
}
