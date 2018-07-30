import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import * as BooksAPI from '../utils/BooksAPI';

import Booklist from './pages/BookList';
import Booksearch from './pages/BookSearch';

import './App.css';

export class App extends Component {
  componentDidMount() {
    // fetch will go here
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <div>
            <Switch>
              <Route exact path="/" component={Booklist} />
              <Route path="/search" component={Booksearch} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
