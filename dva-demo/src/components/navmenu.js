import React, { Component } from 'react';
// import Uploads from "./upload.js" //上传照片组件

import AAA from "./aaa.js"
// import IndexStyle from "../containers/Driving/index.scss"//样式
class Navbar extends Component {
    render() {
        return (
            <div>
                {/*<div className={IndexStyle.con}>
                        <dl>
                        <dt><AAA/></dt>
                            <dd>身份证正面</dd>
                        </dl>
                        <dl>
                        <dt><AAA /></dt>
                            <dd>身份证反面</dd>
                        </dl>
                        <dl>
                        <dt><AAA /></dt>
                            <dd>驾驶证正页</dd>
                        </dl>
                        <dl>
                        <dt><AAA /></dt>
                            <dd>驾驶证副页</dd>
                        </dl>
                        <dl>
                        <dt><Uploads /></dt>
                            <dd>白底半身照</dd>
                        </dl>
                    
        </div>**/}
        <AAA />
            </div>
        );
    }
}

export default Navbar;