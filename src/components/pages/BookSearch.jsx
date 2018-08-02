import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { debounce } from 'throttle-debounce';
import Book from '../common/Book';
import * as BooksAPI from '../../utils/BooksAPI';

class BookSearch extends Component {
  searchBooks = debounce(400, (searchParameter) => {
    if (searchParameter.length > 0) {
      BooksAPI.search(searchParameter, 10)
        .then((response) => {
          if (response.length > 0) {
            this.setState({
              books: response,
            });
          }
        });
    } else {
      this.setState({
        books: [],
      });
    }
  });

  static propTypes = {
    myBooks: PropTypes.arrayOf(PropTypes.any),
    changeBookShelf: PropTypes.func.isRequired,
  }

  static defaultProps = {
    myBooks: [],
  }

  state = {
    books: [],
    searchParameter: '',
  }

  onSearchInputChange = (e) => {
    const searchParameter = e.target.value;
    this.setState({
      searchParameter,
    });

    this.searchBooks(searchParameter);
  }

  renderBooks = () => {
    const { books } = this.state;
    const { myBooks, changeBookShelf } = this.props;

    return books && books.map((unshelfed) => {
      const book = unshelfed;

      myBooks.forEach((myBook) => {
        if (book.id === myBook.id) {
          book.shelf = myBook.shelf;
        }
      });

      return (
        <Book
          key={book.id}
          book={book}
          onChangeShelf={changeBookShelf}
        />
      );
    });
  }

  render() {
    const { searchParameter } = this.state;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={searchParameter}
              onChange={this.onSearchInputChange}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.renderBooks()}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookSearch;
