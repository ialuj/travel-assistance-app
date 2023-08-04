import React, { Component } from "react";

import "./css/Home.css";
import 'bootstrap/dist/css/bootstrap.css';

class ExchangeRatesInfo extends Component {
    state = {
    };
    render() {
        return (
            <>
                <div className="city-info">
                    <div class="text-center">
                        <h3>Exchange Rates Information</h3>
                        <br />
                        <div class="container">
                            <div class="row row-cols-2">
                                <div class="col border border-success">Local Currency: </div>
                                <div class="col border border-success">{this.props.base}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ExchangeRatesInfo;
