import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/selectors";
import "./index.css";

export default function Account() {
  const user = useSelector(selectUser);

  return (
    <div>
      <h1 className="head">Hello {user.name}!</h1>
      <h5 className="scoresHead">Your scores</h5>
    </div>
  );
}
