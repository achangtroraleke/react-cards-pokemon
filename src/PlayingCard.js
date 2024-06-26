import React, { useState } from "react";
import backOfCard from "./back.png";
import "./PlayingCard.css"
import useToggleState from "./hooks/useToggleState";

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  const [isFacingUp, toggleIsFacingUp] =  useToggleState(true);

  return (
    <img
      src={isFacingUp ? front : back}
      alt="playing card"
      onClick={toggleIsFacingUp}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
