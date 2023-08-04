import React, { Component } from "react";

import "./css/Home.css";
import SearchField from "./SearchField";
import CityInformation from "./CityInformation";
import Login from "./Login";
import WeatherForecast from "./WeatherForecast";
import PopulationInfo from "./PopulationInfo";
import ExchangeRatesInfo from "./ExchangeRatesInfo";

import 'bootstrap/dist/css/bootstrap.css';


class Home extends Component {
  state = {
    searchText: "",
    searchData: [],
    cityName: "",
    countryName: "",
    currentTemperature: "",
    minTemperature: "",
    maxTemperature: "",
    humidity: "",
    currentPopulation: "",
    gdp: "",
    base: "",
  };

  callback = (data) => {
    this.setState({ searchData: data });
    this.setState({
      cityName: this.state.searchData.city.name });
    this.setState({ countryName: this.state.searchData.gdpPerCapita.country.value });
    this.setState({ currentTemperature: this.state.searchData.city.weather.currentTemperature });
    this.setState({ minTemperature: this.state.searchData.city.weather.minTemperature });
    this.setState({ maxTemperature: this.state.searchData.city.weather.maxTemperature });
    this.setState({ humidity: this.state.searchData.city.weather.humidity });
    this.setState({ currentPopulation:  "33.524.125" });
    this.setState({ gdp: this.state.searchData.gdpPerCapita.value });
    this.setState({ base: this.state.searchData.exchangeRate.rates[0].id });
    console.log(this.state.searchData.city.name)
  }

  render() {
    return (
      <>
        <div className="div-home-main">
          <div className="container">
            <div class="row">
              <div class="col"><SearchField onClick={this.callback} /></div>
            </div>
            <div class="row">
              <div class="col"><CityInformation cityName={this.state.cityName} countryName={this.state.countryName} /></div>
            </div>
            <div class="row">
              <div class="col"><WeatherForecast currentTemperature={this.state.currentTemperature} minTemperature={this.state.minTemperature}
                maxTemperature={this.state.maxTemperature} humidity={this.state.humidity} /></div>
            </div>
            <div class="row">
              <div class="col"><PopulationInfo currentPopulation={this.state.currentPopulation} gdp={this.state.gdp} /></div>
              <br /><br /><br /><br />
              <div class="col"><ExchangeRatesInfo base={this.state.base} /></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
