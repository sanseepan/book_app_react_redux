import React, { Component } from "react";
import BookList from "../Components/BookList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { addBook, removeBook } from "../actions/bookAction";

class Book extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };
  }

  handleChange = event => {
    this.setState({ text: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    let data = this.state.text;
    this.props.addNewBook(data);
    console.log(data, "has been added");

    // without redux
    /*let newBooks = this.state.books.concat(data);
    this.setState({
      books: newBooks
    });
    */
  };

  handleDelete = index => {
    this.props.removeOneBook(index);
    console.log(index, "note has been deleted");
  };

  // without redux
  /*
    let filteredBooks = this.state.books.filter((book, b) => b !== index);
    this.setState({
      books: filteredBooks
    });
    */

  render() {
    const books = this.props.books;

    return (
      <div>
        <input
          type="text"
          placeholder="type new book"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <FontAwesomeIcon
          icon={faPlusSquare}
          size="lg"
          onClick={this.handleSubmit}
          className="plus-square"
        />
        <BookList books={books} handleDelete={this.handleDelete} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.books
  };
};

const mapDisPatchToProps = dispatch => {
  return {
    addNewBook: book => dispatch(addBook(book)),
    removeOneBook: index => dispatch(removeBook(index))
  };
};
export default connect(
  mapStateToProps,
  mapDisPatchToProps
)(Book);
