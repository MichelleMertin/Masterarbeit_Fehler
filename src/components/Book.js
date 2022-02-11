import React from "react";

import "./Knopf.css";

const Book = (props) => {
  return (
    <div>
      <div>{props.books.title}</div>
      <div>{props.books.id}</div>
    </div>
  );
};

export default Book;
