import React,{Component} from 'react'
import pic1 from "../delicious/img/pic1.jpg";
import pic2 from "../delicious/img/pic2.jpg";
import pic3 from './img/pic3.jpg'

class Delicious extends Component{

    state = {
        width:''
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
        console.log('我到了didmount')

        // window.addEventListener('resize', this.handleResize.bind(this))
    }

    render() {
        return(
            <div>
                <div className='first' style={{ marginBottom:'3px',marginTop:'2px', float:'left',textAlign:'center',height:'160px',width:this.state.width,borderWidth:'0px',borderStyle:'solid',borderRadius:'10px',borderColor:'rgb(255,255,255)',backgroundColor:'rgb(255,255,255)'}}>
                    <a href="#"><img className='fir_img' src={pic1} style={{height:'100px',width:this.state.width,borderRadius:'10px'}}/></a>
                    <p style={{margin:'0px 0px 2px 10px',textAlign:'left'}}>高州仙人洞风景区</p>
                    <p style={{margin:'0px 0px 2px 10px',textAlign:'left',font:'normal 11px "宋体"'}}>高州景点人气榜</p>
                    <p style={{margin:'0px 0px 2px 10px',textAlign:'left',fontSize:'17px',color:'rgb(255,0,0)'}}>￥45</p>
                </div>
                <div className='first' style={{ marginBottom:'3px',marginTop:'2px',float:'right',textAlign:'center',height:'160px',width:this.state.width,borderWidth:'0px',borderStyle:'solid',borderRadius:'10px',borderColor:'rgb(255,255,255)',backgroundColor:'rgb(255,255,255)'}}>
                    <a href="#"><img className='fir_img' src={pic2} style={{height:'100px',width:this.state.width,borderRadius:'10px'}}/></a>
                    <p style={{margin:'0px 0px 2px 10px',textAlign:'left'}}>高州仙人洞风景区</p>
                    <p style={{margin:'0px 0px 2px 10px',textAlign:'left',font:'normal 11px "宋体"'}}>高州景点人气榜</p>
                    <p style={{margin:'0px 0px 2px 10px',textAlign:'left',fontSize:'17px',color:'rgb(255,0,0)'}}>￥45</p>
                </div>



                <div className='first' style={{ marginBottom:'3px',marginTop:'2px', float:'left',textAlign:'center',height:'160px',width:this.state.width,borderWidth:'0px',borderStyle:'solid',borderRadius:'10px',borderColor:'rgb(255,255,255)',backgroundColor:'rgb(255,255,255)'}}>
                    <a href="#"><img className='fir_img' src={pic1} style={{height:'100px',width:this.state.width,borderRadius:'10px'}}/></a>
                    <p style={{margin:'0px 0px 2px 10px',textAlign:'left'}}>高州仙人洞风景区</p>
                    <p style={{margin:'0px 0px 2px 10px',textAlign:'left',font:'normal 11px "宋体"'}}>高州景点人气榜</p>
                    <p style={{margin:'0px 0px 2px 10px',textAlign:'left',fontSize:'17px',color:'rgb(255,0,0)'}}>￥45</p>
                </div>
                <div className='first' style={{ marginBottom:'3px',marginTop:'2px',float:'right',textAlign:'center',height:'160px',width:this.state.width,borderWidth:'0px',borderStyle:'solid',borderRadius:'10px',borderColor:'rgb(255,255,255)',backgroundColor:'rgb(255,255,255)'}}>
                    <a href="#"><img className='fir_img' src={pic2} style={{height:'100px',width:this.state.width,borderRadius:'10px'}}/></a>
                    <p style={{margin:'0px 0px 2px 10px',textAlign:'left'}}>高州仙人洞风景区</p>
                    <p style={{margin:'0px 0px 2px 10px',textAlign:'left',font:'normal 11px "宋体"'}}>高州景点人气榜</p>
                    <p style={{margin:'0px 0px 2px 10px',textAlign:'left',fontSize:'17px',color:'rgb(255,0,0)'}}>￥45</p>
                </div>

                <div className='first' style={{ marginBottom:'3px',marginTop:'2px', float:'left',textAlign:'center',height:'160px',width:this.state.width,borderWidth:'0px',borderStyle:'solid',borderRadius:'10px',borderColor:'rgb(255,255,255)',backgroundColor:'rgb(255,255,255)'}}>
                    <a href="#"><img className='fir_img' src={pic1} style={{height:'100px',width:this.state.width,borderRadius:'10px'}}/></a>
                    <p style={{margin:'0px 0px 2px 10px',textAlign:'left'}}>高州仙人洞风景区</p>
                    <p style={{margin:'0px 0px 2px 10px',textAlign:'left',font:'normal 11px "宋体"'}}>高州景点人气榜</p>
                    <p style={{margin:'0px 0px 2px 10px',textAlign:'left',fontSize:'17px',color:'rgb(255,0,0)'}}>￥45</p>
                </div>
                <div className='first' style={{ marginBottom:'3px',marginTop:'2px',float:'right',textAlign:'center',height:'160px',width:this.state.width,borderWidth:'0px',borderStyle:'solid',borderRadius:'10px',borderColor:'rgb(255,255,255)',backgroundColor:'rgb(255,255,255)'}}>
                    <a href="#"><img className='fir_img' src={pic2} style={{height:'100px',width:this.state.width,borderRadius:'10px'}}/></a>
                    <p style={{margin:'0px 0px 2px 10px',textAlign:'left'}}>高州仙人洞风景区</p>
                    <p style={{margin:'0px 0px 2px 10px',textAlign:'left',font:'normal 11px "宋体"'}}>高州景点人气榜</p>
                    <p style={{margin:'0px 0px 2px 10px',textAlign:'left',fontSize:'17px',color:'rgb(255,0,0)'}}>￥45</p>
                </div>



                <div className='first' style={{ marginBottom:'3px',marginTop:'2px', float:'left',textAlign:'center',height:'160px',width:this.state.width,borderWidth:'0px',borderStyle:'solid',borderRadius:'10px',borderColor:'rgb(255,255,255)',backgroundColor:'rgb(255,255,255)'}}>
                    <a href="#"><img className='fir_img' src={pic1} style={{height:'100px',width:this.state.width,borderRadius:'10px'}}/></a>
                    <p style={{margin:'0px 0px 2px 10px',textAlign:'left'}}>高州仙人洞风景区</p>
                    <p style={{margin:'0px 0px 2px 10px',textAlign:'left',font:'normal 11px "宋体"'}}>高州景点人气榜</p>
                    <p style={{margin:'0px 0px 2px 10px',textAlign:'left',fontSize:'17px',color:'rgb(255,0,0)'}}>￥45</p>
                </div>
                <div className='first' style={{ marginBottom:'3px',marginTop:'2px',float:'right',textAlign:'center',height:'160px',width:this.state.width,borderWidth:'0px',borderStyle:'solid',borderRadius:'10px',borderColor:'rgb(255,255,255)',backgroundColor:'rgb(255,255,255)'}}>
                    <a href="#"><img className='fir_img' src={pic2} style={{height:'100px',width:this.state.width,borderRadius:'10px'}}/></a>
                    <p style={{margin:'0px 0px 2px 10px',textAlign:'left'}}>高州仙人洞风景区</p>
                    <p style={{margin:'0px 0px 2px 10px',textAlign:'left',font:'normal 11px "宋体"'}}>高州景点人气榜</p>
                    <p style={{margin:'0px 0px 2px 10px',textAlign:'left',fontSize:'17px',color:'rgb(255,0,0)'}}>￥45</p>
                </div>

                <div className='first' style={{ marginBottom:'3px',marginTop:'2px', float:'left',textAlign:'center',height:'160px',width:this.state.width,borderWidth:'0px',borderStyle:'solid',borderRadius:'10px',borderColor:'rgb(255,255,255)',backgroundColor:'rgb(255,255,255)'}}>
                    <a href="#"><img className='fir_img' src={pic1} style={{height:'100px',width:this.state.width,borderRadius:'10px'}}/></a>
                    <p style={{margin:'0px 0px 2px 10px',textAlign:'left'}}>高州仙人洞风景区</p>
                    <p style={{margin:'0px 0px 2px 10px',textAlign:'left',font:'normal 11px "宋体"'}}>高州景点人气榜</p>
                    <p style={{margin:'0px 0px 2px 10px',textAlign:'left',fontSize:'17px',color:'rgb(255,0,0)'}}>￥45</p>
                </div>
                <div className='first' style={{ marginBottom:'3px',marginTop:'2px',float:'right',textAlign:'center',height:'160px',width:this.state.width,borderWidth:'0px',borderStyle:'solid',borderRadius:'10px',borderColor:'rgb(255,255,255)',backgroundColor:'rgb(255,255,255)'}}>
                    <a href="#"><img className='fir_img' src={pic2} style={{height:'100px',width:this.state.width,borderRadius:'10px'}}/></a>
                    <p style={{margin:'0px 0px 2px 10px',textAlign:'left'}}>高州仙人洞风景区</p>
                    <p style={{margin:'0px 0px 2px 10px',textAlign:'left',font:'normal 11px "宋体"'}}>高州景点人气榜</p>
                    <p style={{margin:'0px 0px 2px 10px',textAlign:'left',fontSize:'17px',color:'rgb(255,0,0)'}}>￥45</p>
                </div>



                <div className='first' style={{ marginBottom:'3px',marginTop:'2px', float:'left',textAlign:'center',height:'160px',width:this.state.width,borderWidth:'0px',borderStyle:'solid',borderRadius:'10px',borderColor:'rgb(255,255,255)',backgroundColor:'rgb(255,255,255)'}}>
                    <a href="#"><img className='fir_img' src={pic1} style={{height:'100px',width:this.state.width,borderRadius:'10px'}}/></a>
                    <p style={{margin:'0px 0px 2px 10px',textAlign:'left'}}>高州仙人洞风景区</p>
                    <p style={{margin:'0px 0px 2px 10px',textAlign:'left',font:'normal 11px "宋体"'}}>高州景点人气榜</p>
                    <p style={{margin:'0px 0px 2px 10px',textAlign:'left',fontSize:'17px',color:'rgb(255,0,0)'}}>￥45</p>
                </div>
                <div className='first' style={{ marginBottom:'3px',marginTop:'2px',float:'right',textAlign:'center',height:'160px',width:this.state.width,borderWidth:'0px',borderStyle:'solid',borderRadius:'10px',borderColor:'rgb(255,255,255)',backgroundColor:'rgb(255,255,255)'}}>
                    <a href="#"><img className='fir_img' src={pic2} style={{height:'100px',width:this.state.width,borderRadius:'10px'}}/></a>
                    <p style={{margin:'0px 0px 2px 10px',textAlign:'left'}}>高州仙人洞风景区</p>
                    <p style={{margin:'0px 0px 2px 10px',textAlign:'left',font:'normal 11px "宋体"'}}>高州景点人气榜</p>
                    <p style={{margin:'0px 0px 2px 10px',textAlign:'left',fontSize:'17px',color:'rgb(255,0,0)'}}>￥45</p>
                </div>

                <div className='first' style={{ marginBottom:'3px',marginTop:'2px', float:'left',textAlign:'center',height:'160px',width:this.state.width,borderWidth:'0px',borderStyle:'solid',borderRadius:'10px',borderColor:'rgb(255,255,255)',backgroundColor:'rgb(255,255,255)'}}>
                    <a href="#"><img className='fir_img' src={pic1} style={{height:'100px',width:this.state.width,borderRadius:'10px'}}/></a>
                    <p style={{margin:'0px 0px 2px 10px',textAlign:'left'}}>高州仙人洞风景区</p>
                    <p style={{margin:'0px 0px 2px 10px',textAlign:'left',font:'normal 11px "宋体"'}}>高州景点人气榜</p>
                    <p style={{margin:'0px 0px 2px 10px',textAlign:'left',fontSize:'17px',color:'rgb(255,0,0)'}}>￥45</p>
                </div>
                <div className='first' style={{ marginBottom:'3px',marginTop:'2px',float:'right',textAlign:'center',height:'160px',width:this.state.width,borderWidth:'0px',borderStyle:'solid',borderRadius:'10px',borderColor:'rgb(255,255,255)',backgroundColor:'rgb(255,255,255)'}}>
                    <a href="#"><img className='fir_img' src={pic2} style={{height:'100px',width:this.state.width,borderRadius:'10px'}}/></a>
                    <p style={{margin:'0px 0px 2px 10px',textAlign:'left'}}>高州仙人洞风景区</p>
                    <p style={{margin:'0px 0px 2px 10px',textAlign:'left',font:'normal 11px "宋体"'}}>高州景点人气榜</p>
                    <p style={{margin:'0px 0px 2px 10px',textAlign:'left',fontSize:'17px',color:'rgb(255,0,0)'}}>￥45</p>
                </div>



                <div className='first' style={{ marginBottom:'3px',marginTop:'2px', float:'left',textAlign:'center',height:'160px',width:this.state.width,borderWidth:'0px',borderStyle:'solid',borderRadius:'10px',borderColor:'rgb(255,255,255)',backgroundColor:'rgb(255,255,255)'}}>
                    <a href="#"><img className='fir_img' src={pic1} style={{height:'100px',width:this.state.width,borderRadius:'10px'}}/></a>
                    <p style={{margin:'0px 0px 2px 10px',textAlign:'left'}}>高州仙人洞风景区</p>
                    <p style={{margin:'0px 0px 2px 10px',textAlign:'left',font:'normal 11px "宋体"'}}>高州景点人气榜</p>
                    <p style={{margin:'0px 0px 2px 10px',textAlign:'left',fontSize:'17px',color:'rgb(255,0,0)'}}>￥45</p>
                </div>
                <div className='first' style={{ marginBottom:'3px',marginTop:'2px',float:'right',textAlign:'center',height:'160px',width:this.state.width,borderWidth:'0px',borderStyle:'solid',borderRadius:'10px',borderColor:'rgb(255,255,255)',backgroundColor:'rgb(255,255,255)'}}>
                    <a href="#"><img className='fir_img' src={pic2} style={{height:'100px',width:this.state.width,borderRadius:'10px'}}/></a>
                    <p style={{margin:'0px 0px 2px 10px',textAlign:'left'}}>高州仙人洞风景区</p>
                    <p style={{margin:'0px 0px 2px 10px',textAlign:'left',font:'normal 11px "宋体"'}}>高州景点人气榜</p>
                    <p style={{margin:'0px 0px 2px 10px',textAlign:'left',fontSize:'17px',color:'rgb(255,0,0)'}}>￥45</p>
                </div>

            </div>

        )
    }
}

export default Delicious