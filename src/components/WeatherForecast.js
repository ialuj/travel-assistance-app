import React, { Component } from "react";

import "./css/Home.css";
import 'bootstrap/dist/css/bootstrap.css';

class WeatherForecast extends Component {
    state = {
    };
    render() {
        return (
            <>
                <div className="city-info">
                    <div class="text-center">
                        <h3>Weather Information</h3>
                        <br />
                        <div class="container">
                            <div class="row row-cols-2">
                                <div class="col border border-success">Current Temperature: </div>
                                <div class="col border border-success">{this.props.currentTemperature} Celsius</div>
                                <div class="col border border-success">Minimun Temperature: </div>
                                <div class="col border border-success">{this.props.minTemperature} Celsius</div>
                                <div class="col border border-success">Maximum Temperature: </div>
                                <div class="col border border-success">{this.props.maxTemperature} Celsius</div>
                                <div class="col border border-success">Humidity: </div>
                                <div class="col border border-success">{this.props.humidity}%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default WeatherForecast;
