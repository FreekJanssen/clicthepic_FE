import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/selectors";
import "./index.css";

export default function Account() {
  const user = useSelector(selectUser);

  return (
    <div className="entireAccountArea">
      <h1 className="head">Hello {user.name}!</h1>
      <div className="scoreTable">
        <h4 className="scoresHead">Your scores</h4>
        <div className="scoreList">
          <hr className="hrLine"></hr>
          <p>English: {user?.scoreList?.en} points</p>
          <p>German: {user?.scoreList?.de} points</p>
          <p>Spanish: {user?.scoreList?.es} points</p>
          <p>French: {user?.scoreList?.fr} points</p>
        </div>
      </div>
    </div>
  );
}
