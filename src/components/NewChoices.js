import React from "react";

import "./Knopf.css";

const NewChoices = (props) => {
  const newChoices = [
    {
      text: "Neue Empfehlung",
      handler: props.actionProvider.chooseGenre,
      id: 1
    },
    { text: "Beenden", handler: props.actionProvider.endConv, id: 2 }
  ];

  const buttonsMarkup = newChoices.map((choice) => (
    <button key={choice.id} onClick={choice.handler} className="knopf-button">
      {choice.text}
    </button>
  ));

  return <div className="knopf-container">{buttonsMarkup}</div>;
};

export default NewChoices;
