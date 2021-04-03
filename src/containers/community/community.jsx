import React,{Component} from "react";
import {Button, Grid, WhiteSpace, WingBlank,NoticeBar,Icon,Card} from "antd-mobile"
import {connect} from 'react-redux'

import {reqGet_Trip_TravelNote} from '../../api/index'


import hot from "./img/hot.png";
import neccsary from "./img/neccsary.png";
import way from "./img/way.png";





class Community extends Component{

    state = {
        width:'100px',
        midwid:'50px',
        listdata:[]
    }

    Grid_data = [{icon:neccsary,text:'必看',link:'#'},{icon: hot,text: '热门',link: '#'},
        {icon:way,text:'攻略',link: '#'}]

    componentWillMount() {
        console.log('我到community的willmount')
        var wid = document.body.clientWidth
        // console.log('js浏览器宽'+wid)
        var width = wid-60 + 'px'
        var midwid = (wid - 60)/2 + 'px'
        this.setState({
            width:width,
            midwid:midwid
        })
    }

    componentDidMount() {
        window.scrollTo(0,0)
        //获取游记数据
        reqGet_Trip_TravelNote().then(
            r => {
                var result = r.data
                this.setState({
                    listdata:result.data
                })
            }
        )
    }



    render() {
        var url = 'http://localhost:3000/#/addTravelNote/'+this.props.user.id
        const Grid_data = this.Grid_data
        const {listdata,width} = this.state
        return (
            <div>
                <WingBlank>
                    <img src={require('./img/YluTravelCommunity .png')} style={{height:'50px',marginTop:'5px'}}/>

                    <WhiteSpace size="lg" />
                    <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
                        Notice: The arrival time of incomes and transfers of Yu &#39;E Bao will be delayed during National Day.
                    </NoticeBar>

                    <WhiteSpace size="lg" />
                    <div style={{borderRadius:'10px'}}>
                        <Grid data={Grid_data} columnNum={3} hasLine={false}  itemStyle={{ height: '85px', background: 'rgb(255,255,255)' }}
                              renderItem={dataItem => (
                                  <div style={{ padding: '12.5px' }}>
                                      <img src={dataItem.icon} style={{ width: '50px', height: '50px' }} alt="" />
                                      <div style={{ color: '#888', fontSize: '14px' }}>
                                          <span>{dataItem.text}</span>
                                      </div>
                                  </div>
                              )} onClick={dataItem => console.log(dataItem.link)}/>
                    </div>
                    <WhiteSpace />
                    <WhiteSpace />

                    <div>
                        <a href={url}>
                            <img src={require('./img/insert.png')} style={{width:'40px'}}/>
                            <span style={{fontFamily:'STKaiti',fontSize:'17px'}}>可以动手添加攻略游记呦~</span>
                        </a>
                    </div>

                    <div>

                        {listdata.length !== 0 ? listdata.map(function(val,index){

                            var urll = 'http://localhost:3000/#/travelnoteDetail/'+val.yjid
                            return(

                                    <div key={index} style={{borderRadius:'10px'}}>
                                        <WhiteSpace size='lg'/>
                                        <a href={urll}  >
                                            <Card full>
                                                <Card.Header
                                                    title={<p>
                                                        <span style={{display:'inline-block',fontSize:'23px'}}>{val.username}</span>
                                                        <span style={{display:'inline-block',fontWeight:'lighter',fontSize:'13px',color:'rgb(88,88,88)'}}>{val.date} 图文</span>
                                                    </p>}
                                                    thumb={<img src={require('./img/user1.png')} style={{height:'35px'}}/>}
                                                    extra={<span>代补充</span>}
                                                    style={{height:'55px'}}
                                                />
                                                <Card.Body style={{padding:'0px 0px 0px 10px'}}>
                                                    <div>
                                                        <h3>{val.title}</h3>
                                                        <img src={val.cover} style={{width:width,height:'180px'}} />
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </a>
                                    </div>

                                )
                            }
                            )
                            :<h2>加载中...</h2>
                        }

                        {/*<WhiteSpace size="lg" />*/}
                        {/*<a  href={'#'}>*/}
                        {/*    <Card full>*/}
                        {/*        <Card.Header*/}
                        {/*            title={<p>*/}
                        {/*                <span style={{display:'inline-block',fontSize:'23px'}}>user11111</span>*/}
                        {/*                <span style={{display:'inline-block',fontWeight:'lighter',fontSize:'13px',color:'rgb(216,216,216)'}}>21小时前 图文 *****</span>*/}
                        {/*            </p>}*/}
                        {/*            thumb={<img src={require('./img/user1.png')} style={{height:'35px'}}/>}*/}
                        {/*            extra={<span>代补充</span>}*/}
                        {/*            style={{height:'55px'}}*/}
                        {/*        />*/}
                        {/*        <Card.Body style={{padding:'0px 0px 0px 10px'}}>*/}
                        {/*            <div>*/}
                        {/*                <h3>One Drive扩容25T教程</h3>*/}
                        {/*                <img src={require('./img/pic2.jpg')} style={{width:this.state.width,height:'180px'}} />*/}
                        {/*            </div>*/}
                        {/*        </Card.Body>*/}
                        {/*        <WhiteSpace />*/}
                        {/*        <div style={{marginBottom:'30px',borderTop:'1px solid #B8B8B8',position:'relative'}}>*/}
                        {/*            <div style={{ineHeight:'40px',position:'absolute',left:'30px'}}>*/}
                        {/*                <img src={require('./img/good.png')} style={{height:'30px'}}/>*/}
                        {/*                <span style={{color:'rgb(216,216,216)'}} >688</span>*/}
                        {/*            </div>*/}
                        {/*            <div style={{lineHeight:'40px',position:'absolute',left:this.state.midwid}}>*/}
                        {/*                <img src={require('./img/comment.png')} style={{height:'30px'}}/>*/}
                        {/*                <span style={{color:'rgb(216,216,216)'}}>688</span>*/}
                        {/*            </div>*/}
                        {/*            <div style={{lineHeight:'40px',position:'absolute',right:'30px'}}>*/}
                        {/*                <img src={require('./img/trammit.png')} style={{height:'30px'}}/>*/}
                        {/*                <span style={{color:'rgb(216,216,216)'}}>688</span>*/}
                        {/*            </div>*/}

                        {/*        </div>*/}
                        {/*    </Card>*/}
                        {/*</a>*/}

                    </div>



                </WingBlank>

                <Button style={{marginBottom:'80px',marginTop:'20px'}} type="primary" onClick={()=>this.props.history.replace("/")}>回到首页</Button>
            </div>
        );
    }
}

export default connect(
    state => ({user:state.user})
)(Community)