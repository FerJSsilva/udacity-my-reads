import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as BooksAPI from '../utils/BooksAPI';

import Booklist from './pages/BookList';
import Booksearch from './pages/BookSearch';

import './App.css';

export class App extends Component {
  state = {
    myBooks: [],
  }

  componentDidMount() {
    this.fetchBookList();
  }

  fetchBookList = () => {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({ myBooks: books });
      });
  };

  changeBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.fetchBookList();
    });
  };

  render() {
    const { myBooks } = this.state;
    return (
      <BrowserRouter>
        <div className="app">
          <div>
            <Switch>
              <Route exact path="/" render={() => <Booklist myBooks={myBooks} changeBookShelf={this.changeBookShelf} />} />
              <Route path="/search" render={() => <Booksearch myBooks={myBooks} changeBookShelf={this.changeBookShelf} />} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
