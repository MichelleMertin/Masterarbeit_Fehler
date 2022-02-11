import React from "react";

import "./Knopf.css";

const Help = (props) => {
  const helpChoices = [
    {
      text: "Genre",
      handler: props.actionProvider.chooseGenre,
      id: 1
    },
    { text: "Autor", handler: props.actionProvider.chooseAuthor, id: 2 },
    { text: "Beliebtheit", handler: () => {}, id: 3 }
  ];

  const buttonsMarkup = helpChoices.map((help) => (
    <button key={help.id} onClick={help.handler} className="knopf-button">
      {help.text}
    </button>
  ));

  return <div className="knopf-container">{buttonsMarkup}</div>;
};

export default Help;
