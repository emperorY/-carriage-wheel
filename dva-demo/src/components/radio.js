import React, { Component } from "react";
import { Radio } from "antd";
const RadioGroup = Radio.Group;

class Radios extends Component {
    state = {
        value: "换驾照"
    }
    render() {
        return (
            <RadioGroup onChange={this.onChange} value={this.state.value}>
                <p><Radio value={"换驾照"}>换驾照</Radio></p>
                <p><Radio value={"补驾照"}>补驾照</Radio></p>
            </RadioGroup>
        );
    }
    onChange = e => {
        console.log(e.target.value);
        this.setState({
            value: e.target.value
        });
    }
}

export default Radios;