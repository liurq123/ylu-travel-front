import React,{Component} from "react";
import {Button, Icon, NavBar,WhiteSpace,WingBlank} from "antd-mobile"
import {connect} from 'react-redux'

import {out} from '../../redux/actions'

class Personal extends Component {

    signOut = () => {
        this.props.out({
            username : '',
                msg:'',
                redirectTo:'',
        })
    }

    render() {
        return (
            <div>
                <NavBar mode="light"
                        rightContent={[
                            <Icon key="0" type="search" style={{marginRight:'16px'}} />,
                            <Icon key="1" type="ellipsis" />
                        ]}>Personal</NavBar>
                <WhiteSpace size='lg' />
                <WingBlank>
                    <div style={{textAlign:'center'}}>
                        <img src={require('./img/user.png')} style={{width:'80px'}}/>
                    </div>
                    <div style={{textAlign:'center'}}>
                        {this.props.user.username ? <h2>{this.props.user.username}</h2> : <h2>暂无名字</h2>}
                    </div>

                    <Button type="primary" onClick={()=> this.signOut()}>退出登陆</Button>
                    <WhiteSpace size='lg' />
                    <Button type="primary" onClick={()=>this.props.history.replace("/")}>回到首页</Button>
                </WingBlank>
            </div>
        );
    }
}

export default connect(
    state => ({user:state.user}),
    {out}
)(Personal)