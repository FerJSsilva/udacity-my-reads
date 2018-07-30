import React from 'react';
import Book from './Book';

const Bookshelf = () => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">Read</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        <li>
          <Book />
        </li>
        <li>
          <Book />
        </li>
        <li>
          <Book />
        </li>
      </ol>
    </div>
  </div>
);

export default Bookshelf;
