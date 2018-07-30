import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Bookshelf from '../common/BookShelf';

class BookList extends Component {
  static propTypes = {
    myBooks: PropTypes.arrayOf(PropTypes.any),
  }

  static defaultProps = {
    myBooks: [],
  }

  filterBooks = (shelf) => {
    const { myBooks } = this.props;
    return myBooks.filter(book => (book.shelf === shelf));
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Bookshelf books={this.filterBooks('currentlyReading')} title="Currently Reading" />
          <Bookshelf books={this.filterBooks('read')} title="Read" />
          <Bookshelf books={this.filterBooks('wantToRead')} title="Want to Read" />
          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default BookList;
