import React, { Component } from "react";

import "./css/Home.css";

import 'bootstrap/dist/css/bootstrap.css';


class CityInformation extends Component {
    state = {
      };
  render() {
    return (
      <>
    <div class="container text-center">
        <div class="row row-cols-2">
           <div class="col">City</div>
           <div class="col">{this.props.cityName}</div>
           <div class="col">Country</div>
           <div class="col">{this.props.countryName}</div>
       </div>
    </div>
      </>
    );
  }
}

export default CityInformation;
