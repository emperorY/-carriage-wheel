import React, { Component } from 'react';

import IndexStyle from "./index.scss"//样式
import Lists from '../../components/list.js'
import NavMenu from "../../components/navmenu.js" //上传照片组件

import PickerView from "../../components/citys/pickerView"
import Navbar from "../../components/navbars"
import Kefu from '../../components/kefu.js'
import Wenhao from "../../components/wenhao.js"
// import CustomerService from "../customerService.js"

import AAA from "../../components/aaa"
//antd
import { Icon } from 'antd';
import "antd/dist/antd.css";
import 'antd-mobile/dist/antd-mobile.css';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // loading: false,
            modal2: false,
        };
    }
    //点击客服
    keFu() {
        this.setState({
            modal2: true,
        })
        // console.log(1)
    }

    render() {
        let {
            modal2 //客服显示隐藏
        } = this.state;
        return (
            <div className={IndexStyle.wrap}>
               <Navbar title="补换驾照"/>
                <div className={IndexStyle.nav}>
                    <span>订单提交</span>
                    <span className={IndexStyle.spn2}>填写收货地址</span>
                    <span className={IndexStyle.spn3}>正在办理</span>
                    <span className={IndexStyle.spn4}>办理完成</span>
                </div>
                <div className={IndexStyle.ban}>
                    <img src="../../../public/img/banner.jpg" alt="" />
                </div>
                <div className={IndexStyle.main}>
                    {/*<NavMenu/>**/}
                    <AAA />
                    {/**上传证件 */}
                    <div className={IndexStyle.list}>
                        <div className={IndexStyle.server}>
                            <span>服务类型</span>
                            <Lists data={{ title: '服务类型', Bar: '换驾照', type: 1 }} />
                        </div>
                        <div className={IndexStyle.drivingCard}>
                            <span>当前驾照签发城市</span>
                            <Wenhao />
                            {/*<img src="../../../public/img/问号.svg" alt="" className={IndexStyle.wen} onClick={this.picClick}/>**/}
                            <PickerView data={{ title: '当前驾照签发城市', Bar: '请选择签发地',txt:'当前签发城市',type: 2}}/>
                        </div>
                        <div className={IndexStyle.drivingCard}>
                            <span>可补换的签发城市</span>
                            <Wenhao/>
                            {/*<img src="../../../public/img/问号.svg" alt="" className={IndexStyle.wen} onClick={this.picClick}/>**/}
                            <PickerView data={{ title: '可补换的签发城市', Bar: '请选择补换地',txt:'可补换城市',type: 2}}/>
                        </div> 
                    </div>
                    <div className={IndexStyle.serverPrice}>
                        <span className={IndexStyle.serverTotal}>服务费</span>
                        <span className={IndexStyle.red}>￥399</span>
                    </div>
                    <div className={IndexStyle.discount}>
                        <div><span className={IndexStyle.youhui}>优惠</span><span>登陆后查看优惠券<Icon type="right" /></span></div>
                    </div>
                    <div className={IndexStyle.question}>
                        <u onClick={this.questionClick}>常见问题？</u>
                    </div>
                </div>
               <div>
                    <img 
                        onClick={()=>this.keFu()} 
                        src="../../../public/img/kf.png" alt="" 
                        className={IndexStyle.customerService}
                    />
               </div>
                <Kefu modal={modal2}/>
                <div className={IndexStyle.footer}>
                    <p>实付：<span className={IndexStyle.red}>￥399</span></p>
                    <button>立即支付</button>
                </div>
            </div>
        );
    }
    //常见问题
    questionClick = () => {
        // alert("正在开发，等等吧")
        this.props.history.push('/question')
        // console.log(this.props)
        
    }
    //问号
    // picClick = () => {
    //     alert("正在开发，等等吧")
    // }
    
}

export default Index;