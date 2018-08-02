import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as BooksAPI from '../utils/BooksAPI';

import Booklist from './pages/BookList';
import Booksearch from './pages/BookSearch';
import Loading from './common/Loading';

import './App.css';

export class App extends Component {
  state = {
    myBooks: [],
    isLoading: false,
  }

  componentDidMount() {
    this.fetchBookList();
  }

  fetchBookList = () => {
    this.setState({ isLoading: true });
    BooksAPI.getAll()
      .then((books) => {
        this.setState({
          myBooks: books,
          isLoading: false,
        });
      });
  };

  changeBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.fetchBookList();
    });
  };

  render() {
    const { myBooks, isLoading } = this.state;
    return (
      <BrowserRouter>
        <div className="app">
          {
            isLoading && <Loading />
          }
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
