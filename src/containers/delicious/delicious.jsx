import React,{Component} from 'react'
import DelShowList from "../../components/showlist/delshowlist";
import LoadMore from "../../components/loadmore/loadmore";
import {connect} from "react-redux";
import {showList} from "../../redux/actions";


let page = 0
let scrollTop=0

class Delicious extends Component{

    state = {
        width:'',
        isLoadingMore:false,  //是否正在加载
    }

    componentWillMount() {
        // console.log('我到了willmount')
        var wid = document.body.clientWidth
        // console.log('js浏览器宽'+wid)
        var width = wid/2 - 20 +'px'
        this.setState({
            width:width
        })
    }

    componentDidMount() {
        window.addEventListener('scroll',this.handleScroll)
        console.log('我到了delicious的didmount,开始获取首页数据:')

        //判断是否第一次刷新
        if(this.props.showLists.data.length === 0 ){
            this.loadFirstPageData()
        }
        window.scrollTo(0,scrollTop)
    }

    handleScroll = () => {
        scrollTop = window.scrollY
    }

    loadFirstPageData = () => {
        console.log('正在发送第一个数据')
        this.props.showList('/delicious',{page:page})
        page = page+1
    }

    loadMoreData = () => {
        //记录状态
        this.setState({
            isLoadingMore:true
        })

        //get请求
        this.props.showList('/delicious',{page:page})

        page = page+1
        //增加page
        this.setState({
            isLoadingMore:false
        })

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
                    data.length ? <DelShowList data={data}  /> : <div><p style={{float:'right',marginRight:this.state.width}}>加载中...</p></div>
                }

                {
                    hasMore ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData} />:''
                }

            </div>
        )

        // return(
        //     <div>
        //         <div className='first' style={{ marginBottom:'3px',marginTop:'2px', float:'left',textAlign:'center',height:'160px',width:this.state.width,borderWidth:'0px',borderStyle:'solid',borderRadius:'10px',borderColor:'rgb(255,255,255)',backgroundColor:'rgb(255,255,255)'}}>
        //             <a href="#"><img className='fir_img' src={pic1} style={{height:'100px',width:this.state.width,borderRadius:'10px'}}/></a>
        //             <p style={{margin:'0px 0px 2px 10px',textAlign:'left'}}>高州仙人洞风景区</p>
        //             <p style={{margin:'0px 0px 2px 10px',textAlign:'left',font:'normal 11px "宋体"'}}>高州景点人气榜</p>
        //             <p style={{margin:'0px 0px 2px 10px',textAlign:'left',fontSize:'17px',color:'rgb(255,0,0)'}}>￥45</p>
        //         </div>
        //         <div className='first' style={{ marginBottom:'3px',marginTop:'2px',float:'right',textAlign:'center',height:'160px',width:this.state.width,borderWidth:'0px',borderStyle:'solid',borderRadius:'10px',borderColor:'rgb(255,255,255)',backgroundColor:'rgb(255,255,255)'}}>
        //             <a href="#"><img className='fir_img' src={pic2} style={{height:'100px',width:this.state.width,borderRadius:'10px'}}/></a>
        //             <p style={{margin:'0px 0px 2px 10px',textAlign:'left'}}>高州仙人洞风景区</p>
        //             <p style={{margin:'0px 0px 2px 10px',textAlign:'left',font:'normal 11px "宋体"'}}>高州景点人气榜</p>
        //             <p style={{margin:'0px 0px 2px 10px',textAlign:'left',fontSize:'17px',color:'rgb(255,0,0)'}}>￥45</p>
        //         </div>
        //
        //     </div>
        //
        // )
    }
}

export default connect(
    state => ({showLists:state.showList_Del}),
    {showList}
)(Delicious)