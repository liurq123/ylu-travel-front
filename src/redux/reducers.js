/*
    包含多个新生成的state的reducer函数
   
 */
import {combineReducers} from 'redux'
import {AUTH_SUCCESS,ERROR_MSG,RECEIVE_SELETED,RECEIVE_DELICIOUS,RECEIVE_RECOMMEND,GET_DETAIL} from './action-types'


const initUser = {
    username : '',
    msg:'',
    redirectTo:'',
}

function user(state = initUser,action) {
    console.log("我到了reducers的user方法中")
    switch (action.type) {
        case AUTH_SUCCESS: // 认证成功
            return {...action.data,msg: '登陆成功',redirectTo: '/'}
        case ERROR_MSG: // 错误信息提示
            return {...state,msg: action.data}
        default:
            return state
    }
}

const initList = {
    data:[],     //数据源
    hasMore:false,   //是否存在下一页
}

function showList(state = initList, action) {
    console.log("我到了reducers的showlist方法中")
    switch(action.type){
        case RECEIVE_SELETED:
            var data =  state.data.concat(action.data.data)
            console.log(data)
            return {data:data,hasMore: action.data.hasMore};
        default:
            return state;
    }
}

const initDetail = {
    Ddata:[],
    Dimg:[]
}
function getDetail(state = initDetail,action) {
    switch (action.type) {
        case GET_DETAIL:
            return {Ddata: action.data.showList,Dimg:action.data.dimg}
        default:
            return state
    }

}
//返回合并后的reducer函数
export default combineReducers({
    user,
    showList,
    getDetail
})