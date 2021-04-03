import React, {Component} from 'react'
import {Route,Switch,Redirect} from "react-router-dom"
import {connect} from 'react-redux'


import NotFund from "../../components/not-found/not-fund";
import Community from '../community/community'
import Home from '../home/home'
import Personal from '../personal/personal'
import ListDetail from "../listDetail/listDetail";
import DelListDetail from "../listDetail/delListDetail"
import Comment from '../comment/comment'
import Delcomment from '../comment/delcomment'
import NavFooter from "../../components/nav-footer/nav-footer";
import TravelNote from '../travelNote/travelNote'
import TravelNoteDetail from '../travelnotDetail/travelnoteDetail'

class Main extends Component {

    navList = [
        {
            path:['/home/selected','/home/delicious','/home/recommend'],
            component:Home,
            title:'主页',
            icon:'home',
            text:'主页'
        },
        {
            path:['/community'],
            component:Community,
            title:'社区',
            icon:'community',
            text:'社区'
        },
        {
            path:['/personal'],
            component:Personal,
            title:'用户中心',
            icon:'personal',
            text:'个人'
        }
    ]

    render() {
        let cur_location =  this.props.location.pathname
        console.log("当前访问地址："+cur_location)
        const {username} = this.props
        // //试验开关。。。。。
        if(!username){
            return <Redirect to='/login'/>
        }
        if (cur_location === '/'){
            return <Redirect to='/home/selected'/>
        }

        //得到当前nav的list
        // 得到当前的 nav
        var flag = false
        this.navList.forEach((item) => {
            if (item.path.indexOf(cur_location) !== -1){
                flag = true
            }
        })
        // const currentNav = this.navList.find(nav => nav.path.indexOf(cur_location))

        return (
            <div>
                <Switch>
                    <Route path='/home'  component={Home} />
                    <Route path='/community' component={Community} />
                    <Route path='/personal' component={Personal}/>
                    <Route path='/listDetail/:id' component={ListDetail} />
                    <Route path='/Del_listDetail/:id' component={DelListDetail}/>
                    <Route path='/addComment' component={Comment} />
                    <Route path='/addDelComment' component={Delcomment}/>
                    <Route path='/addTravelNote/:id' component={TravelNote} />
                    <Route path='/travelnoteDetail/:id' component={TravelNoteDetail} />
                    <Route component={NotFund} />
                </Switch>
                {
                    flag ? <NavFooter navList={this.navList} />:null
                }

            </div>
        )
    }
}

export default connect(
    state => state.user
)(Main)