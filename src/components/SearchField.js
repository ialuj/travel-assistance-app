import React, { Component, useEffect } from "react";
import axios from 'axios';
import './css/Home.css';
import 'bootstrap/dist/css/bootstrap.css';

class SearchField extends Component {
  state = {
    searchText: "",
    searchData: []
  };

  onSearchInputChange = (event) => {
    event.preventDefault();
    this.setState({ searchText: event.target.value });
  }

  searchCityInfo = () => {
    axios({
      method: "GET",
      url: "http://localhost:8080/v1/search/city/" + this.state.searchText
    }).then((response) => {
      const data = response.data
      this.setState({ searchData: data })
      this.props.onClick(this.state.searchData)
    }).catch((error) => {
      if (error.response) {
        console.log(error.response);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
    })
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <>
        <div className="div-home-main">
          <div className="form-group has-search">
            <form className="d-flex" onSubmit={this.handleSubmit}>
              <input className="form-control me-1 search-field" type="search"
                placeholder="Type a destination city name here..." aria-label="Search"
                value={this.state.searchText} onChange={this.onSearchInputChange} onKeyPress={this.searchCityInfo} />
              <button className="btn btn-outline-primary" type="submit" onClick={this.searchCityInfo}>Search</button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default SearchField;
