import React from 'react'
import styles from './wenhao.scss'

class Wenhao extends React.Component {
    state = {
        flg: true
    }
    identityImg = () => {
        this.setState({ 
            flg: !this.state.flg 
        })
        // console.log('ppppp', this.state.flg)
    }
    render() {
        let {
            flg
        } = this.state;
        console.log('ggggggggggggggggg', flg)
        return (
            <div className={styles.box}>
                <img onClick={this.identityImg} src='../../public/img/问号.svg' alt="" className={styles.wen}/>
                <div onClick={this.imgMock} className={styles.imgMock} id={this.state.flg ? styles.mockAction : ''}>
                    <div className={styles.imgMockImg}>
                        <img src={require('../../public/img/card.png')} alt="" />
                        <p className={styles.txt}>不同签发城市价格不同,车轮保证全国通用</p>
                    </div>
                    
                </div>
            </div>
        )
    }
    imgMock = () => {
        this.setState({ 
            flg: !this.state.flg
        })
        // console.log('sssssssss', this.state.flg)
            // < div className = { styles.imgMockImg } >
            //     <img src={require('../../public/img/licence.png')} alt="" />
            //         </div >
    }
}
export default Wenhao;