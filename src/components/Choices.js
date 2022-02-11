import React from "react";

import "./Knopf.css";

const Choices = (props) => {
  const choices = [
    {
      text: "Kaufen",
      handler: props.actionProvider.buyBook,
      id: 1
    },
    {
      text: "Kenne ich schon",
      handler: (event) => {
        console.log(event.target.value);
        props.actionProvider.recommend(event.target.value);
      },
      id: 2
    },
    {
      text: "Anderer Autor",
      handler: props.actionProvider.chooseAuthor,
      id: 3
    },
    { text: "Anderes Genre", handler: props.actionProvider.chooseGenre, id: 4 },
    {
      text: "Anderes Erscheinungsjahr",
      handler: (event) => {
        console.log(event.target.value);
        props.actionProvider.recommend(event.target.value);
      },
      id: 5
    },
    {
      text: "Beenden",
      handler: props.actionProvider.endConv,
      id: 6
    }
  ];

  const buttonsMarkup = choices.map((choice) => (
    <button
      key={choice.id}
      value="Tom Clancy"
      onClick={choice.handler}
      className="knopf-button"
    >
      {choice.text}
    </button>
  ));

  return <div className="knopf-container">{buttonsMarkup}</div>;
};

export default Choices;
