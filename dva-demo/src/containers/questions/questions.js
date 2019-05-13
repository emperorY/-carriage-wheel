import React, { Component } from 'react';
import Navbar from "../../components/navbars"

import QuestionsCss from "./questions.scss";
// import data from "./mock.js"
class Questions extends Component {
    // componentDidMount() {
        
    // }
    render() {
        // let {
        //     data
        // } = this.state;
        // console.log(data,'1111155')
        return (
            <div className={QuestionsCss.wrap}>
                <Navbar title="补换驾照常见问题"/>
                <div className={QuestionsCss.Box}>
                    <h1 className={QuestionsCss.txt}>补换驾照常见问题</h1>
                    <div className={QuestionsCss.con}>
                        <h4 className={QuestionsCss.wen}>问：驾照过期了怼我来说有什么影响么？</h4>
                        <p className={QuestionsCss.da}>答：驾照过期就等同于无证驾驶，不能驾驶机动车，一旦查处，罚款200-2000元，并处以15日以下拘留。</p>
                    </div>

                    <div className={QuestionsCss.con}>
                        <h4 className={QuestionsCss.wen}>问：驾照过期了怼我来说有什么影响么？</h4>
                        <p className={QuestionsCss.da}>答：驾照过期就等同于无证驾驶，不能驾驶机动车，一旦查处，罚款200-2000元，并处以15日以下拘留。</p>
                    </div>
                    <div className={QuestionsCss.con}>
                        <h4 className={QuestionsCss.wen}>问：驾照过期了怼我来说有什么影响么？</h4>
                        <p className={QuestionsCss.da}>答：驾照过期就等同于无证驾驶，不能驾驶机动车，一旦查处，罚款200-2000元，并处以15日以下拘留。</p>
                    </div>
                    <div className={QuestionsCss.con}>
                        <h4 className={QuestionsCss.wen}>问：驾照过期了怼我来说有什么影响么？</h4>
                        <p className={QuestionsCss.da}>答：驾照过期就等同于无证驾驶，不能驾驶机动车，一旦查处，罚款200-2000元，并处以15日以下拘留。</p>
                    </div>
                    <div className={QuestionsCss.con}>
                        <h4 className={QuestionsCss.wen}>问：驾照过期了怼我来说有什么影响么？</h4>
                        <p className={QuestionsCss.da}>答：驾照过期就等同于无证驾驶，不能驾驶机动车，一旦查处，罚款200-2000元，并处以15日以下拘留。</p>
                    </div>
                </div>
                
                
            </div>
        );
    }
}

export default Questions;