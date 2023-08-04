import React, { Component } from "react";

import "./css/Home.css";
import SearchField from "./SearchField";
import CityInformation from "./CityInformation";

import 'bootstrap/dist/css/bootstrap.css';
import Login from "./Login";
import WeatherForecast from "./WeatherForecast";
import PopulationInfo from "./PopulationInfo";
import ExchangeRatesInfo from "./ExchangeRatesInfo";


class Home extends Component {
  state = {
    searchText: "",
    searchData: [],
    cityName: "Maputo",
    countryName: "Mozambique",
    currentTemperature: "20",
    minTemperature: "15",
    maxTemperature: "21",
    humidity: "3",
    currentPopulation: "33.524.125",
    gdp: "521.452325",
    base: "MZN",
  };

  callback = (data) => {
    this.setState({searchData: data})
    console.log(this.state.searchData)
    }

  render() {
    return (
      <>
        <div className="div-home">
          <SearchField onClick={this.callback} />
          <CityInformation cityName={this.state.searchData} countryName={this.state.countryName} />
          <WeatherForecast currentTemperature={this.state.currentTemperature} minTemperature={this.state.minTemperature}
            maxTemperature={this.state.maxTemperature} humidity={this.state.humidity} />
          <PopulationInfo currentPopulation={this.state.currentPopulation} gdp={this.state.gdp} />
          <ExchangeRatesInfo base={this.state.base} />
        </div>
      </>
    );
  }
}

export default Home;
