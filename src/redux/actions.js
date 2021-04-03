/*
    包含所有action creator 函数
 */
import {AUTH_SUCCESS,
ERROR_MSG,RECEIVE_SELETED,RECEIVE_DELICIOUS,RECEIVE_RECOMMEND,GET_DETAIL,REGISTER_SUCCESS,SIGN_OUT}
from './action-types'


import {
    reqRegister,
    reqLogin,
    reqShowList_Selected,
    reqShowList_Delicious,
    reqShowList_Recommend,
    reqGet_Detail,
    reqGet_Del_Detail
} from '../api'

//同步错误消息
const  errorMsg = (msg) => ({type:ERROR_MSG,data:msg})
//同步登陆成功响应
const authSuccess = (user) => ({type:AUTH_SUCCESS,data:user})
//同步注册成功响应
const registerSuccess = (user) => ({type:REGISTER_SUCCESS,data:user})
//同步获取selected列表信息
const receiveSelected = (reData) => ({type:RECEIVE_SELETED,data:reData})
//同步获取delicious列表信息
const receiveDelicious = (reData) => ({type:RECEIVE_DELICIOUS,data:reData})
//同步获取recommends列表信息
const receiveRecommend = (reData) => ({type:RECEIVE_RECOMMEND,data:reData})
//同步获取详细信息
const getDetail = (reData) => ({type:GET_DETAIL,data:reData})
//同步退出登陆信息
const signOut = (redata) => ({type:SIGN_OUT,data:redata})



/*
    异步登陆
 */
export const login = (user) => {
    console.log('我到action的login了,需要发送的数据是：')
    // console.log(user)
    const {username,password,checkCode} = user
    if (!username || !password){
        console.log('用户或密码不能为空')
        return errorMsg('用户或密码不能为空')
    }
    if (!checkCode){
        console.log('验证码不能为空')
        return errorMsg('验证码不能为空')
    }

    return async dispatch => {
        console.log('我执行到async了')
        const response = await reqLogin(user)
        // 这里默认登陆返回的是一个对象，所以用json解析（对象）
        const result = response.data

        //登陆成功
        if (result.code === 1){
            dispatch(authSuccess(result.data))
        }
        else {
            dispatch(errorMsg(result.msg))
        }

    }
}

/*
    异步注册
 */
export const register = (user) => {
    console.log('我到action的register了,需要发送的数据是：')
    console.log(user)
    const {username,password,email,name,number,gender,birthdayDate,checkCode} = user
    // 判空操作
    if(!username){
        return errorMsg('账号不能为空')
    }
    if(!password){
        return errorMsg('密码不能为空')
    }
    if(!email){
        return errorMsg('邮箱不能为空')
    }
    if (!name){
        return errorMsg('用户名不能为空')
    }
    if (!number){
        return errorMsg('电话不能为空')
    }
    if (!gender){
        return errorMsg('性别不能为空')
    }
    if (!birthdayDate){
        return errorMsg('生日不能为空')
    }
    if (!checkCode){
        return errorMsg('验证码不能为空')
    }

    return async dispatch => {
        // console.log('我执行到async了')
        const response = await reqRegister(user)
        // 这里默认登陆返回的是一个对象，所以用json解析（对象）
        const result = response.data
        // console.log(response.json())
        //登陆成功
        if (result.code === 1){
            dispatch(registerSuccess(result.data))
        }
        else {
            dispatch(errorMsg(result.msg))
        }
    }
}

/*
    异步获取展示数据，有三个分类：selected、delicious，recommend
 */
export const showList = (url,param) => {
    if (url === '/selected'){
        console.log('/selected发送get01请求')
        return async dispatch => {
            console.log('/selected发送get02请求')
            const response = await reqShowList_Selected(param)
            const result = response.data
            console.log(result)
            dispatch(receiveSelected(result.data))
        }
    }
    else if (url === '/delicious'){
        return async dispatch => {
            const response = await reqShowList_Delicious(param)
            const result = response.data
            console.log(result)
            dispatch(receiveDelicious(result.data))
        }
    }
    else {
        return async dispatch => {
            const response = await reqShowList_Recommend(param)
            const result = response.data
            console.log(result)
            dispatch(errorMsg(result.msg))
        }
    }

}

/*
    异步获取精选详情页信息
 */
export const detail = (data) => {

    if('tid' in data){
        return async dispatch => {
            const response = await reqGet_Detail(data)
            const result = response.data
            console.log(result)
            dispatch(getDetail(result.data))
        }
    }
    else {
        return async dispatch => {
            const response = await reqGet_Del_Detail(data)
            const result = response.data
            console.log(result)
            dispatch(getDetail(result.data))
        }
    }

}

export const out = (data) => {
    return dispatch => {
        dispatch(signOut(data))
    }
}

