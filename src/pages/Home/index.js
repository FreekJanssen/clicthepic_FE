import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Dropdown, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setLanguage } from "../../store/appState/actions";
import "./index.css";

export default function Home() {
  const [dropdownText, setDropdownText] = useState("Choose Language");

  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className="buttonsArea">
      <Dropdown
        onSelect={(eventKey) => {
          const eventData = eventKey.split(",");
          dispatch(setLanguage(eventData[0]));
          setDropdownText(eventData[1]);
        }}
      >
        <Dropdown.Toggle className="languageButton" id="dropdown-basic">
          {dropdownText}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item eventKey="en,English">English</Dropdown.Item>
          <Dropdown.Item eventKey="es,Spanish">Spanish</Dropdown.Item>
          <Dropdown.Item eventKey="de,German">German</Dropdown.Item>
          <Dropdown.Item eventKey="fr,French">French</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <div className="gameButtons">
        <Button
          variant="success"
          className="clickButton"
          onClick={() => history.push("/click")}
        >
          Play Click the Pic
        </Button>
        <Button
          variant="info"
          className="flipButton"
          onClick={() => history.push("/flip")}
        >
          Play Flip the Pic
        </Button>
      </div>
    </div>
  );
}
