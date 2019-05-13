import React from 'react'
// import { connect } from 'dva'
import styles from './aaa.scss'

class AAA extends React.Component {
    state = {
        arrIdentity: [
            { id: 1, title: "身份证正面", img: require('../../public/img/id-a.png') },
            { id: 2, title: "身份证反面", img: require('../../public/img/id-b.png') },
            { id: 3, title: "驾驶证正面", img: require('../../public/img/licence-a.png') },
            { id: 4, title: "驾驶证反面", img: require('../../public/img/licence-b.png') },
            { id: 5, title: "白底半身照", img: require('../../public/img/photo.png') }],
        flg: true,
        keyy: 0,
    }

    mock = (key) => {
        console.log('key', key)
        this.setState({ flg: !this.state.flg })
        this.setState({ keyy: key })
        // this.setState({ img: this.state.img })
        // console.log(key)
        // this.setState({key})
        // console.log('index',key)
        console.log('img', this.state.keyy)
        // console.log(this.setState({img:this.state.arrIdentity[key].img}))
        // console.log(this.state.arrIdentity)
    }

    cancel = () => {
        this.setState({ flg: !this.state.flg })
    }

    render() {
        return (
            <div className={styles.addCav}>
                
              <div className={styles.cav}>
                    {
                        this.state.arrIdentity.map((item, key) => {
                            // console.log(item.id)
                            return <dl key={key} className={styles.dl}>
                                <dt className={styles.dt} onClick={() => this.mock(key)} ><img src={require('../../public/img/addto.svg')} alt="" /></dt>
                                <dd className={styles.dd}>{item.title}</dd>
                            </dl>
                            // console.log("mm",item)
                        })
                    }
                </div>
                <div className={styles.mock} id={this.state.flg ? styles.mockAction : ''} >
                    <div className={styles.identityImg}>
                        <img className={styles.IImg} src={this.state.arrIdentity[this.state.keyy].img} />
                    </div>
                    <div className={styles.identityBtn}>
                        <div className={styles.cavv}>
                            <div className={styles.graph}>拍照</div>
                            <div className={styles.album}>相册</div>
                        </div>
                        <div className={styles.cancel} onClick={this.cancel}>取消</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AAA
// id={this.state.flg ? styles.mockAction : '' }