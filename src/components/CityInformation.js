import React, { Component } from "react";

import "./css/Home.css";
import 'bootstrap/dist/css/bootstrap.css';


class CityInformation extends Component {
  state = {
  };
  render() {
    return (
      <>
        <div className="city-info">
          <div class="text-center">
            <h3>City Information</h3>
            <br />
            <div class="container">
              <div class="row row-cols-2">
                <div class="col border border-success">City: </div>
                <div class="col border border-success">{this.props.cityName}</div>
                <div class="col border border-success">Country: </div>
                <div class="col border border-success">{this.props.countryName}</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CityInformation;
