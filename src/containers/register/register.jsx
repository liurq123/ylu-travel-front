import React,{Component} from "react";
import {Button, Icon, NavBar, List, InputItem, WingBlank, WhiteSpace,Radio} from "antd-mobile";


import './register.css'
import a from "./img/a.jpeg";
import {connect} from "react-redux";
import {register} from "../../redux/actions";
import {Redirect} from "react-router-dom";

const RadioItem = Radio.RadioItem;
class Register extends Component{

    state = {
        username:'',
        password:'',
        email:'',
        name:'',
        number:'',
        gender:'男',
        birthdayDate:'',
        checkCode:'',
        flag:0
    }


    //处理输入框变化，收集数据到state
    handleChange = (name,value) => {
        this.setState({[name]:value});
    }

    //跳转到login路由
    toLogin = () => {
        this.props.history.replace('/login')
    }
    //注册
    registers = () => {
        console.log('我点击了register按钮')
        this.props.register(this.state)
    }

    //复选框状态改变函数
    onChange = (flag,label) => {
        // console.log('checkbox');
        this.setState({
            gender:label,
            flag:flag
        });
    };

    //更新验证码
    flushCode = () => {
        let time = new Date();
        let checkCode = document.getElementById('checkCode');
        checkCode.src = 'http://127.0.0.1:8080/user/getCode?time=' + time;
    }

    render() {
        const data = [
            { flag: 0, label: '男' },
            { flag: 1, label: '女' },
        ];
        const {flag} = this.state
        const {msg,redirectTo} = this.props
        if(redirectTo){
            return <Redirect to={redirectTo}/>
        }
        return(
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                > 怡鹿用户注册 </NavBar>
                {msg?<p className="titleCls" style={{color:"red"}}>{msg}</p>:null}
                <WingBlank>
                    <List renderHeader={() => '填表'}>
                        <InputItem
                            type="text"
                            placeholder='请输入账号'
                            onChange={val => this.handleChange('username',val)}
                        >账号:</InputItem>
                        <WhiteSpace />

                        <InputItem
                            type="password"
                            placeholder="请输入密码"
                            onChange={value => this.handleChange('password',value)}
                        >密码:</InputItem>
                        <WhiteSpace />

                        <InputItem
                            type="text"
                            placeholder="请输入邮箱"
                            onChange={value => this.handleChange('email',value)}
                        >邮箱:</InputItem>
                        <WhiteSpace />

                        <InputItem
                            type="text"
                            placeholder="请输入姓名"
                            onChange={value => this.handleChange('name',value)}
                        >姓名:</InputItem>
                        <WhiteSpace />


                        <InputItem
                            type="phone"
                            placeholder="请输入手机号"
                            onChange={value => this.handleChange('number',value) }
                        >手机号:</InputItem>
                        <WhiteSpace />

                        <List renderHeader={() => '性别'}>
                            {data.map(i => (
                                <RadioItem key={i.flag} checked={flag === i.flag} onChange={() => this.onChange(i.flag,i.label)} >
                                    {i.label}
                                </RadioItem>
                            ))}
                        </List>
                        <WhiteSpace />

                        <WhiteSpace />
                        <InputItem
                            type='text'
                            placeholder='输入日期'
                            onChange={value => this.handleChange('birthdayDate',value) }
                        >出生日期:</InputItem>
                        <WhiteSpace />

                        <InputItem
                            type='text'
                            placeholder='输入验证码'
                            onChange={value => this.handleChange('checkCode',value) }
                        >验证码：</InputItem>

                        <span ><img id='checkCode' className='check' src='http://127.0.0.1:8080/user/getCode' /></span>
                        <span><a onClick={this.flushCode}>看不清</a></span>
                        <WhiteSpace />

                        <Button onClick={this.registers} type='primary'>注册</Button>
                    </List>
                    <a onClick={this.toLogin} className='bottomCls3'>已有账号</a>
                </WingBlank>
            </div>
        )
    }
}
export default connect(
    state => state.user,
    {register}
)(Register)