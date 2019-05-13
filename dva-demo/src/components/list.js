import React, { Component } from "react";
// import { Modal,Icon } from "antd";
// import Radio from './radio'

// import { Picker, List, WhiteSpace } from "antd-mobile";
import { Picker, List } from "antd-mobile";
import { createForm } from "rc-form";
import arrayTreeFilter from "array-tree-filter";

// import { district, provinceLite } from "antd-mobile-demo-data";
import { provinceLite,serviceType } from "antd-mobile-demo-data";

import PickerCss from "../components/citys/pickerView.scss"
import 'antd-mobile/dist/antd-mobile.css';

// import IndexStyle from "../containers/Driving/index.scss"
// function info() {
//     Modal.info({
//         content: (
//             <div>
//                 <Radio />
//             </div>
//         ),
//         onOk() { }
//     });
// }

class Lists extends Component {
    state = {
        data:[],
        pickerValue: [],
        visible: false,
    };
    onClick = () => {
        setTimeout(() => {
            this.setState({
                data: provinceLite
            });
        }, 120);
    };

    getSel() {
        const value = this.state.pickerValue;
        if (!value) {
            return "";
        }
        const treeChildren = arrayTreeFilter(
            serviceType,
            (c, level) => c.value === value[level]
        );
        return treeChildren.map(v => v.label).join(",");
    }
    // render() {
    //     return (
    //         <div>
    //             <span onClick={info} className={IndexStyle.Driving}>换驾照<Icon type="right" /></span>
    //         </div>
    //     );
    // }
    render() {
        console.log(serviceType,'1111')
        const {
            data
        } = this.props;
        return (
            <List className={PickerCss.pickerList}>
                <Picker
                    extra={data.Bar}
                    data={serviceType}
                    title={data.title}
                    value={this.state.pickerValue}
                    onChange={v => this.setState({ pickerValue: v })}
                    onOk={v => this.setState({ pickerValue: v })}
                    cols={data.type}
                >
                    <List.Item arrow="horizontal">
                        <span></span>
                    </List.Item>
                </Picker>
            </List>
        );
    }
}
const TestWrapper = createForm()(Lists);

export default TestWrapper;
// export default Lists;
