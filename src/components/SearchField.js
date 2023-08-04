import React, { Component } from "react";

import './css/Home.css';

class SearchField extends Component {
  state = {};
  render() {
    return (
      <>
    <div className="d-flex align-items-center justify-content-center vh-100 flex-column gap-4">
      <form className="d-flex">
        <input className="form-control me-1 search-field" type="search" placeholder="Type a destination city name here..." aria-label="Search" />
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form>
    </div>
      </>
    );
  }
}

export default SearchField;
