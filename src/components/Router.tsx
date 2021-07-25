import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Book } from "../pages/Book";
import { BookList } from "../pages/BookList";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/books/:title">
          <Book />
        </Route>
        <Route path="/">
          <BookList />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
