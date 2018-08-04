import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';

class Book extends PureComponent {
  static propTypes = {
    book: PropTypes.objectOf(PropTypes.any).isRequired,
    onChangeShelf: PropTypes.func.isRequired,
  };

  changeShelf = (e) => {
    const { book, onChangeShelf } = this.props;
    const shelf = e.target.value;
    onChangeShelf(book, shelf);
  }

  render() {
    const { book } = this.props;

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url("${book.imageLinks && book.imageLinks.thumbnail}")`,
              }}
            />
            <div className="book-shelf-changer">
              <select onChange={this.changeShelf} value={book.shelf || 'none'}>
                <option disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">
            {book.title}
          </div>
          <div className="book-authors">
            {book.authors}
          </div>
        </div>
      </li>
    );
  }
}

export default Book;
