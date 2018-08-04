import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Bookshelf from '../common/BookShelf';

class BookList extends PureComponent {
  static propTypes = {
    myBooks: PropTypes.arrayOf(PropTypes.any),
    changeBookShelf: PropTypes.func.isRequired,
  }

  static defaultProps = {
    myBooks: [],
  }

  filterBooks = (shelf) => {
    const { myBooks } = this.props;
    return myBooks.filter(book => (book.shelf === shelf));
  }

  render() {
    const { changeBookShelf } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Bookshelf books={this.filterBooks('currentlyReading')} title="Currently Reading" changeBookShelf={changeBookShelf} />
          <Bookshelf books={this.filterBooks('wantToRead')} title="Want to Read" changeBookShelf={changeBookShelf} />
          <Bookshelf books={this.filterBooks('read')} title="Read" changeBookShelf={changeBookShelf} />
          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default BookList;
