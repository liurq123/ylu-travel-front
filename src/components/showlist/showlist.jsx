import React, {Component} from 'react'
import PropTypes from 'prop-types'


import pic1 from "../../containers/selected/img/pic1.jpeg";
import pic2 from "../../containers/selected/img/pic2.jpg";


class ShowList extends Component{

    static propTypes = {
        data:PropTypes.array.isRequired
    }

    state = {
        width:''
    }

    componentWillMount() {
        console.log('我到showlist的了willmount')
        var wid = document.body.clientWidth
        // console.log('js浏览器宽'+wid)
        var width = wid/2 - 20 +'px'
        this.setState({
            width:width
        })
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('我到了showlist的willupdate')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('我到了showlist的didupdate')
    }

    componentDidMount() {
        console.log('我到了showlist的didmount ')
    }

    render() {
        const {data} = this.props
        const len = data.length
        console.log('len'+len)
        var wid = this.state.width
        return(
            <div>
                {
                    data.map(function (item,index) {
                        // console.log(index)
                        if (index % 2 === 0){
                            var url = 'http://localhost:3000/#/listDetail/'+item.rid
                            return (
                                <div key={index} className='first' style={{ marginBottom:'3px',marginTop:'2px', float:'left',textAlign:'center',height:'160px',width:wid,borderWidth:'0px',borderStyle:'solid',borderRadius:'10px',borderColor:'rgb(255,255,255)',backgroundColor:'rgb(255,255,255)'}}>
                                    <a href={url}><img className='fir_img' src={require('./'+item.rimage)} style={{height:'100px',width:wid,borderRadius:'10px'}}/></a>
                                    <p style={{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap", margin:'0px 0px 2px 10px',textAlign:'left'}}>{item.rname}</p>
                                    <p style={{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",margin:'0px 0px 2px 10px',textAlign:'left',font:'normal 11px "宋体"'}}>{item.routeIntroduce}</p>
                                    <p style={{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",margin:'0px 0px 2px 10px',textAlign:'left',fontSize:'17px',color:'rgb(255,0,0)'}}>￥{item.price}</p>
                                </div>
                            )
                        }
                        else {
                            var url = 'http://localhost:3000/#/listDetail/'+item.rid
                            return (
                                <div key={index} className='first' style={{ marginBottom:'3px',marginTop:'2px',float:'right',textAlign:'center',height:'160px',width:wid,borderWidth:'0px',borderStyle:'solid',borderRadius:'10px',borderColor:'rgb(255,255,255)',backgroundColor:'rgb(255,255,255)'}}>
                                    <a href={url}><img className='fir_img' src={require('./'+item.rimage)} style={{height:'100px',width:wid,borderRadius:'10px'}}/></a>
                                    <p style={{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap", margin:'0px 0px 2px 10px',textAlign:'left'}}>{item.rname}</p>
                                    <p style={{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",margin:'0px 0px 2px 10px',textAlign:'left',font:'normal 11px "宋体"'}}>{item.routeIntroduce}</p>
                                    <p style={{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",margin:'0px 0px 2px 10px',textAlign:'left',fontSize:'17px',color:'rgb(255,0,0)'}}>￥{item.price}</p>
                                </div>
                            )
                        }

                    })}


                {/*//                 str = str + '<div className='first' style={{ marginBottom:'3px',marginTop:'2px', float:'left',textAlign:'center',height:'160px',width:this.state.width,borderWidth:'0px',borderStyle:'solid',borderRadius:'10px',borderColor:'rgb(255,255,255)',backgroundColor:'rgb(255,255,255)'}}>*/}
                {/*//     <a href="#"><img className='fir_img' src={data[i].rimage} style={{height:'100px',width:this.state.width,borderRadius:'10px'}}/></a>*/}
                {/*//     <p style={{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap", margin:'0px 0px 2px 10px',textAlign:'left'}}>高州仙人洞风景区高州仙人洞风景区高州仙人洞风景区</p>*/}
                {/*//     <p style={{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",margin:'0px 0px 2px 10px',textAlign:'left',font:'normal 11px "宋体"'}}>高州景点人气榜</p>*/}
                {/*//     <p style={{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",margin:'0px 0px 2px 10px',textAlign:'left',fontSize:'17px',color:'rgb(255,0,0)'}}>￥45</p>*/}
                {/*//     </div>'*/}
                {/*//*/}
                {/*// }*/}
                {/*// }*/}
                {/*// }*/}

            {/*    <div className='first' style={{ marginBottom:'3px',marginTop:'2px',float:'right',textAlign:'center',height:'160px',width:this.state.width,borderWidth:'0px',borderStyle:'solid',borderRadius:'10px',borderColor:'rgb(255,255,255)',backgroundColor:'rgb(255,255,255)'}}>*/}
            {/*        <a href="#"><img className='fir_img' src={pic2} style={{height:'100px',width:this.state.width,borderRadius:'10px'}}/></a>*/}
            {/*        <p style={{margin:'0px 0px 2px 10px',textAlign:'left'}}>高州仙人洞风景区</p>*/}
            {/*        <p style={{margin:'0px 0px 2px 10px',textAlign:'left',font:'normal 11px "宋体"'}}>高州景点人气榜</p>*/}
            {/*        <p style={{margin:'0px 0px 2px 10px',textAlign:'left',fontSize:'17px',color:'rgb(255,0,0)'}}>￥45</p>*/}
            {/*    </div>*/}



            {/*    <div className='first' style={{ marginBottom:'3px',marginTop:'2px', float:'left',textAlign:'center',height:'160px',width:this.state.width,borderWidth:'0px',borderStyle:'solid',borderRadius:'10px',borderColor:'rgb(255,255,255)',backgroundColor:'rgb(255,255,255)'}}>*/}
            {/*        <a href="#"><img className='fir_img' src={pic1} style={{height:'100px',width:this.state.width,borderRadius:'10px'}}/></a>*/}
            {/*        <p style={{margin:'0px 0px 2px 10px',textAlign:'left'}}>高州仙人洞风景区</p>*/}
            {/*        <p style={{margin:'0px 0px 2px 10px',textAlign:'left',font:'normal 11px "宋体"'}}>高州景点人气榜</p>*/}
            {/*        <p style={{margin:'0px 0px 2px 10px',textAlign:'left',fontSize:'17px',color:'rgb(255,0,0)'}}>￥45</p>*/}
            {/*    </div>*/}
            {/*    <div className='first' style={{ marginBottom:'3px',marginTop:'2px',float:'right',textAlign:'center',height:'160px',width:this.state.width,borderWidth:'0px',borderStyle:'solid',borderRadius:'10px',borderColor:'rgb(255,255,255)',backgroundColor:'rgb(255,255,255)'}}>*/}
            {/*        <a href="#"><img className='fir_img' src={pic2} style={{height:'100px',width:this.state.width,borderRadius:'10px'}}/></a>*/}
            {/*        <p style={{margin:'0px 0px 2px 10px',textAlign:'left'}}>高州仙人洞风景区</p>*/}
            {/*        <p style={{margin:'0px 0px 2px 10px',textAlign:'left',font:'normal 11px "宋体"'}}>高州景点人气榜</p>*/}
            {/*        <p style={{margin:'0px 0px 2px 10px',textAlign:'left',fontSize:'17px',color:'rgb(255,0,0)'}}>￥45</p>*/}
            {/*    </div>*/}
            {/*</div>*/}
            </div>
                )
    }
}

export default ShowList

