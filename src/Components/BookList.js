import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const BookList = props => {
  if (props.books.length === 0) {
    return <h3>no more books</h3>;
  } else {
    return (
      <div>
        <h4>{props.books.length} books available</h4>
        {props.books.map((book, index) => {
          return (
            <div key={index} className="list-items">
              {book}
              <FontAwesomeIcon
                icon={faTimesCircle}
                size="lg"
                onClick={() => {
                  props.handleDelete(index);
                }}
                className="times-circle"
              />
            </div>
          );
        })}
      </div>
    );
  }
};
export default BookList;
