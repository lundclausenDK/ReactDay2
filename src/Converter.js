import React from "react";
import './index.css';

class Converter extends React.Component {

    constructor() {
        super();
        this.changer = this.changer.bind(this);
    }

    changer(event) {
        if (event.target.name === "kilo") {
            this.poundInput.value = event.target.value * 2.20462262185;
        } else if (event.target.name === "pound") {
            this.kiloInput.value = event.target.value * 0.45359237;
        }
    }

    render() {
        return (
            <div className="converter-container">
                <label>Kilo: </label>
                <input type="number" name="kilo" onChange={this.changer} ref={(input) => {this.kiloInput = input}} /><br/>

                <label>Pound: </label>
                <input type="number" name="pound" onChange={this.changer} ref={(input) => {this.poundInput = input}} />
            </div>
        );
    }
}

export default Converter;