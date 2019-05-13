import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';

class Navbar extends Component {
    static defaultProps = {
        title: '这是标题'
    }
    render() {
        return (
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" style={{ color: '#000' }}/>}
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
                        
                        <Icon key="1" type="ellipsis" style={{color:'#000'}}/>
                    ]}
                >{this.props.title}</NavBar>

                {/*<NavBar
                    mode="dark"
                    leftContent="Back"
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}
                >NavBar</NavBar>**/}
            </div>
        );
    }
}

export default Navbar;
// <Icon key="0" type="search" style={{ marginRight: '16px' }} />,