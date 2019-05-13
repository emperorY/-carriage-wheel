import React,{ Component } from "react";
import { Modal, List, Button } from 'antd-mobile';

import kefuStyle from "./kefu.scss"
class Kefu extends Component {
    showModal = key => (e) => {
        e.preventDefault(); // 修复 Android 上点击穿透
        this.setState({
            [key]: true,
        });
    }
    onClose = key => () => {
        this.setState({
            [key]: false,
        });
    }
    // popup
    // visible = { this.state.modal2 }
    // onClose = { this.onClose('modal2') }
    // animationType = "slide-up"
    // afterClose = {() => { alert('afterClose'); }}
    render() {
        let { modal } = this.props;
        return (
            <div>
                {/*<Button onClick={this.showModal('modal1')}>basic</Button>**/}
                {/*<WhiteSpace />**/}
                {/*<Modal
                    visible={this.state.modal1}
                    transparent
                    maskClosable={false}
                    onClose={this.onClose('modal1')}
                    title="Title"
                    footer={[{ text: 'Ok', onPress: () => { console.log('ok'); this.onClose('modal1')(); } }]}
                    wrapProps={{ onTouchStart: this.onWrapTouchStart }}
                    afterClose={() => { alert('afterClose'); }}
                >
                    <div style={{ height: 100, overflow: 'scroll' }}>
                        scoll content...<br />
                        scoll content...<br />
                        scoll content...<br />
                        scoll content...<br />
                        scoll content...<br />
                        scoll content...<br />
                    </div>
                </Modal>**/}

              {/*  <Button onClick={this.showModal('modal2')}>popup</Button>
            <WhiteSpace />**/}
                <Modal
                    popup
                    visible={modal}
                    onClose={this.onClose('modal2')}
                    animationType="slide-up"
                    className={kefuStyle.Box}
                >
                    <List className="popup-list">
                        {['联系客服', '拨打电话'].map((i, index) => (
                            <List.Item key={index} className={kefuStyle.list}>{i}</List.Item>
                        ))}
                    <List.Item>
                            <Button type="primary" onClick={this.onClose('modal2')} className={kefuStyle.close}>取消</Button>
                    </List.Item>
                    </List>
                    
                </Modal>
            </div>
        );
    }
}
export default Kefu;