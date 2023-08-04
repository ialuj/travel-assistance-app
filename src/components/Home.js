import React, { Component } from "react";

import "./css/Home.css";
import SearchField from "./SearchField";
import CityInformation from "./CityInformation";

import 'bootstrap/dist/css/bootstrap.css';


class Home extends Component {
  state = {
    cityName: "Maputo",
    countryName: "Mozambique"
  };
  render() {
    return (
      <>
        <div className="div-home">
          <SearchField />
          <CityInformation cityName={this.state.cityName} countryName={this.state.countryName} />
        </div>
      </>
    );
  }
}

export default Home;
