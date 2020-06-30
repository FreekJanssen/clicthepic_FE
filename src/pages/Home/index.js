import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Dropdown, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { setLanguage } from '../../store/appState/actions';

export default function Home() {
  const [dropdownText, setDropdownText] = useState('Choose Language');

  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div>
      <Dropdown onSelect={(eventKey) => {
        const eventData = eventKey.split(',');
        dispatch(setLanguage(eventData[0]));
        setDropdownText(eventData[1]);
      }}>
        <Dropdown.Toggle id="dropdown-basic">
          {dropdownText}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item eventKey='en,English'>English</Dropdown.Item>
          <Dropdown.Item eventKey='es,Spanish'>Spanish</Dropdown.Item>
          <Dropdown.Item eventKey='de,German'>German</Dropdown.Item>
          <Dropdown.Item eventKey='fr,French'>French</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Button onClick={() => history.push('/click')}>Play Click the Pic</Button>
      <Button onClick={() => null}>Play Flip the Pic</Button>
    </div>
  )
}
