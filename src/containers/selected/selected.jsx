import React,{Component} from 'react'
import {connect} from 'react-redux'


import ShowList from "../../components/showlist/showlist";
import LoadMore from "../../components/loadmore/loadmore";

import {showList} from '../../redux/actions'

let page = 0
let scrollTop=0
class Selected extends Component{


    state = {
        width:'',
        isLoadingMore:false,  //是否正在加载
        // page:0                   //当前代码
    }



    componentWillMount() {
        console.log('我到了select中willmount')
        var wid = document.body.clientWidth
        // console.log('js浏览器宽'+wid)
        var width = wid/2 - 20 +'px'
        this.setState({
            width:width
        })
    }

    componentDidMount() {
        window.addEventListener('scroll',this.handleScroll)
        console.log('我到了selected的didmount,开始获取首页数据:')

        // window.addEventListener('resize', this.handleResize.bind(this))
        //判断是否第一次刷新
        if(this.props.showLists.data.length === 0 ){
            this.loadFirstPageData()
        }

        // console.log('ScrollTop2:'+scrollTop)
        window.scrollTo(0,scrollTop)

    }

    handleScroll = () => {
        scrollTop = window.scrollY
        // console.log('ScrollTop1:'+scrollTop)
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('我到了selected的willupdate')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('我到了selected的didupdate')
    }

    loadFirstPageData = () => {
        console.log('正在发送第一个数据')
        this.props.showList('/selected',{page:page})
        page = page+1
    }


    loadMoreData = () => {
        //记录状态
        this.setState({
            isLoadingMore:true
        })

        //get请求
        this.props.showList('/selected',{page:page})

         page = page+1
        //增加page
        this.setState({
            isLoadingMore:false
        })

    }

    // 通过监听，获取页面宽度，｛不适应｝
    handleResize = (e) => {
        // console.log(e.target.innerWidth);
        var screen_length =  e.target.innerWidth;
        console.log('react浏览器宽'+screen_length)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll',this.handleScroll)
        // scrollTop = document.body.scrollTop
    }



    render() {
        const {data,hasMore} = this.props.showLists
        // console.log(data)
        return(
            <div>
                {
                    data.length ? <ShowList data={data}  /> : <div><p style={{float:'right',marginRight:this.state.width}}>加载中...</p></div>
                }

                {
                     hasMore ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData} />:''
                }

            </div>
        )
    }
}

export default connect(
    state => ({showLists:state.showList}),
    {showList}
)(Selected)