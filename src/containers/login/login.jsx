import React,{Component} from "react";
import {NavBar, Icon, Button, WhiteSpace, WingBlank, InputItem, List} from "antd-mobile";
import Logo from "../../components/logo/logo";
import {login} from "../../redux/actions";
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import './login.css'
import wechat from './img/wechat.png'
import qq from './img/qq.png'
import zfb from './img/zfb.png'
import a from '../register/img/a.jpeg'


class Login extends Component{

    state = {
        username:'',
        password:'',
        checkCode:'',
        aaaL:''
    }

    handleChange = (name,value) => {
        this.setState({[name]:value})
    }

    toRegister = () =>{
        this.props.history.replace('/register')
    }

    logins = () => {
        console.log('我点击了login按钮')
        this.props.login(this.state)
    }

    flushCode = () => {
      let time = new Date();
      let checkCode = document.getElementById('checkCode');
      checkCode.src = 'http://127.0.0.1:8080/user/getCode?time=' + time;
    }

    render() {
        const {msg,redirectTo} = this.props
        if(redirectTo === '/'){
            return <Redirect to={redirectTo}/>
        }
        return(
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
                        <Button onClick={this.toRegister} key='0' size='small'>注册</Button>
                    ]}
                >  </NavBar>
                <Logo />
                <h2 className="titleCls">怡鹿账号登陆</h2>
                {msg?<p className="titleCls" style={{color:"red"}}>{msg}</p>:null}
                <WingBlank>
                    <List>
                        <WhiteSpace />
                        <InputItem onChange={val => this.handleChange('username',val)} type='text' placeholder='输入用户名'>
                            账号:
                        </InputItem>
                        <WhiteSpace />
                        <InputItem onChange={val => this.handleChange('password',val)} type='password' placeholder='输入密码'>
                            密&nbsp;&nbsp;&nbsp;码：
                        </InputItem>

                        <InputItem onChange={val => this.handleChange('checkCode',val)} type='text' placeholder='输入验证码'>
                            验证码：
                        </InputItem>
                        <span ><img id='checkCode' className='check' src='http://127.0.0.1:8080/user/getCode' /></span>
                        <span><a onClick={this.flushCode}>看不清</a></span>
                        <WhiteSpace />

                        <Button onClick={this.logins} type='primary' >
                            登录
                        </Button>
                        <WhiteSpace/>
                        <p ><span onClick={this.toRegister} className='bottomCls1'>还没账号</span><span className='bottomCls2'>境外手机登陆</span></p>
                        <WhiteSpace />
                        <WhiteSpace />
                        <div className='outlogin'>
                            <img src={wechat} />
                            <img src={qq}/>
                            <img src={zfb} />
                        </div>
                        <WhiteSpace />
                    </List>
                </WingBlank>
            </div>
        )
    }

}

export default connect(
    state => state.user,
    {login}
)(Login)