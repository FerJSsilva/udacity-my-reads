import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class Bookshelf extends PureComponent {
  static propTypes = {
    books: PropTypes.arrayOf(PropTypes.any),
    title: PropTypes.string,
    changeBookShelf: PropTypes.func.isRequired,
  };

  static defaultProps = {
    books: [],
    title: '',
  };

  render() {
    const { books, title, changeBookShelf } = this.props;
    const shelf = books.map(
      (book, index) => (
        <Book
          key={Number(index)}
          book={book}
          onChangeShelf={changeBookShelf}
        />
      ),
    );

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {shelf}
          </ol>
        </div>
      </div>
    );
  }
}


export default Bookshelf;
