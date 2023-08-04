import React, { Component } from "react";

import "./css/Home.css";
import 'bootstrap/dist/css/bootstrap.css';

class PopulationInfo extends Component {
    state = {
    };
    render() {
        return (
            <>
                <div className="city-info">
                    <div class="text-center">
                        <h3>Population and GDP per capita</h3>
                        <br />
                        <div class="container">
                            <div class="row row-cols-2">
                                <div class="col border border-success">Current Population: </div>
                                <div class="col border border-success">{this.props.currentPopulation}</div>
                                <div class="col border border-success">GDP per capita: </div>
                                <div class="col border border-success">{this.props.gdp}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default PopulationInfo;
