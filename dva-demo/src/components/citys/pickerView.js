import React, { Component } from "react";

// import { Picker, List, WhiteSpace } from "antd-mobile";
import { Picker, List } from "antd-mobile";
import { createForm } from "rc-form";
import arrayTreeFilter from "array-tree-filter";

import { district, provinceLite } from "antd-mobile-demo-data";

import PickerCss from "./pickerView.scss"
import 'antd-mobile/dist/antd-mobile.css';
class PickerViews extends Component {
  state = {
    data: [],
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
      district,
      (c, level) => c.value === value[level]
    );
    return treeChildren.map(v => v.label).join(",");
  }
  render() {
    const {
      data
    } = this.props;
    return (
      <div className={PickerCss.picker}>
        <Picker 
          extra={data.Bar}
          data={district}
          title={data.txt}
          value={this.state.pickerValue}
          onChange={v => this.setState({ pickerValue: v })}
          onOk={v => this.setState({ pickerValue: v })}
          cols={data.type}
        >
          <List.Item arrow="horizontal">
            <span></span>
            
          </List.Item>
        </Picker>
          {/*<span className={PickerCss.wen}><img src="../../../public/img/问号.svg" alt="" /></span>
            <Picker
            title={district}
            extra={data.Bar}
            data={district}
            value={this.state.pickerValue}
            onChange={v => this.setState({ pickerValue: v })}
            onOk={v => this.setState({ pickerValue: v })}
            clos={data.type}>
            <List.Item>
              <span>{data.title}</span>
              <span><img src="../../../public/img/问号.svg" alt=""/></span>
              </List.Item>
          </Picker>**/}
          

          {/*<Picker
            visible={this.state.visible}
            data={district}
            value={this.state.pickerValue}
            onChange={v => this.setState({ pickerValue: v })}
            onOk={() => this.setState({ visible: false })}
            onDismiss={() => this.setState({ visible: false })}>
            <List.Item
              className={PickerCss.listItem}
              extra={this.getSel()}
              onClick={() => this.setState({ visible: true })}>
              <span>{this.props.type === '0' ? '当前驾照签发城市' : '可补换的签发城市'}</span>
              <span><img src="../../../public/img/问号.svg" alt="" /></span>
            </List.Item>
          </Picker>
                      className={PickerCss.listItem}
              extra={this.getSel()}
              onClick={() => this.setState({ visible: true })}
              clos={data.type}>**/}
      </div>
    );
  }
}
const TestWrapper = createForm()(PickerViews);

export default TestWrapper;
