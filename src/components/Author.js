import React from "react";

import "./Knopf.css";

const Author = (props) => {
  const authors = [
    {
      text: "Stephen King",
      handler: props.actionProvider.recommend,
      id: 1
    },
    {
      text: "Joanne K. Rowling",
      handler: props.actionProvider.recommend,
      id: 2
    },
    {
      text: "Stephenie Meyer",
      handler: props.actionProvider.recommend,
      id: 3
    },
    {
      text: "Sebastian Fitzek",
      handler: props.actionProvider.recommend,
      id: 4
    },
    {
      text: "Simon Beckett",
      handler: props.actionProvider.recommend,
      id: 5
    },
    {
      text: "Nora Roberts",
      handler: props.actionProvider.recommend,
      id: 6
    }
  ];

  const authorHandler = (event) => {
    console.log(event.target.value);
    props.actionProvider.recommend(event.target.value);
  };

  const buttonsMarkup = authors.map((author) => (
    <button
      key={author.id}
      value={author.text}
      onClick={authorHandler}
      className="knopf-button"
    >
      {author.text}
    </button>
  ));

  return <div className="knopf-container">{buttonsMarkup}</div>;
};

export default Author;
