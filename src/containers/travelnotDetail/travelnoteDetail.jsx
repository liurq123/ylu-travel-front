import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Icon, NavBar, WhiteSpace, WingBlank,Card} from "antd-mobile";

import {reqGet_Trip_TravelNote_ID} from '../../api/index'

class TravelNoteDetail extends Component{

    state = {
        width:'',
        innerwidth:'',
        data:{}
    }

    componentWillMount() {
        var wid = document.body.clientWidth
        // console.log('js浏览器宽'+wid)
        var width = wid - 60 +'px'
        this.setState({
            width:wid,
            innerwidth:width
        })
    }

    componentDidMount() {
        reqGet_Trip_TravelNote_ID({yjid:this.props.match.params.id}).then(
            r => {
                var result = r.data
                console.log(result)
                this.setState({
                    data:result.data
                })
            }
        )
    }

    render() {
        const {width,innerwidth,data} = this.state
        return(
            <div>
                <NavBar mode="light"
                        icon={<Icon type="left" />}
                        onLeftClick={() => window.history.back()}
                >TravelNoteDetal</NavBar>

                <img src={require('./img/scene1.jpg')} style={{width:width}}/>


                <div style={{marginTop:'-15px',marginLeft:'10px'}}>
                    <img src={require('./img/user.png') } style={{width:'50px'}}/>
                    <span style={{fontSize:'15px'}}>{data.username}</span>
                </div>

                <h2 style={{textAlign:"center"}}>{data.title}</h2>


                <WingBlank>
                    <div>
                        <div style={{marginTop:'8px'}} ><img src={require('./img/begintime.png')} style={{width:'30px'}}/>  <span style={{fontSize:'15px'}}>出发时间:{data.godate}</span> </div>
                        <div style={{marginTop:'8px'}}><img src={require('./img/daycount.png')} style={{width:'30px'}}/>  <span style={{fontSize:'15px'}}>出行天数:{data.daynumber} 天</span> </div>
                        <div style={{marginTop:'8px'}}><img src={require('./img/who.png')} style={{width:'30px'}}/>  <span style={{fontSize:'15px'}}>人物:{data.who}</span> </div>
                        <div style={{marginTop:'8px'}}><img src={require('./img/money.png')} style={{width:'30px'}}/>  <span style={{fontSize:'15px'}}>人均费用: {data.avgmoney} ￥</span> </div>
                    </div>

                    <WhiteSpace size='lg' />

                    <Card>
                        <Card.Header
                            title="游玩思路"
                            thumb={<img src={require('./img/thinking.png')} style={{width:'30px'}}/>}
                        />
                        <Card.Body>
                            <div>{data.thinking}</div>
                        </Card.Body>
                        <Card.Footer extra={<div>{data.date}</div>} />
                    </Card>

                    <WhiteSpace size='lg' />
                    <Card>
                        <Card.Header
                            title={data.touTitle1}
                            thumb={<div><img src={require('./img/tourist1 .png')} style={{width:'30px'}}/> <span style={{fontSize:'10px'}}>景点1</span> </div>}
                        />
                        <Card.Body>
                            <div>{data.touThinking1}</div>
                            <img src={data.img1} style={{width:innerwidth }}/>
                        </Card.Body>
                        <Card.Footer extra={<div>{data.date}</div>} />
                    </Card>

                    <WhiteSpace size='lg' />
                    <Card>
                        <Card.Header
                            title={data.touTitle2}
                            thumb={<div><img src={require('./img/tourist2 .png')} style={{width:'30px'}}/> <span style={{fontSize:'10px'}}>景点2</span> </div>}
                        />
                        <Card.Body>
                            <div>{data.touThinking2}</div>
                            <img src={data.img2} style={{width:innerwidth }}/>
                        </Card.Body>
                        <Card.Footer extra={<div>{data.date}</div>} />
                    </Card>

                    <WhiteSpace size='lg' />
                    <Card>
                        <Card.Header
                            title={data.touTitle3}
                            thumb={<div><img src={require('./img/tourist3.png')} style={{width:'30px'}}/> <span style={{fontSize:'10px'}}>景点3</span> </div>}
                        />
                        <Card.Body>
                            <div>{data.touThinking3}</div>
                            <img src={data.img3} style={{width:innerwidth }}/>
                        </Card.Body>
                        <Card.Footer extra={<div>{data.date}</div>} />
                    </Card>


                    <Card>
                        <Card.Header
                            title="总结"
                            thumb={<img src={require('./img/summary.png')} style={{width:'30px'}}/>}
                        />
                        <Card.Body>
                            <div>{data.summary}</div>
                        </Card.Body>
                        <Card.Footer extra={<div>{data.date}</div>} />
                    </Card>

                    <WhiteSpace size='lg' />
                    <WhiteSpace size='lg' />
                    <WhiteSpace size='lg' />
                    <WhiteSpace size='lg' />

                </WingBlank>

            </div>
        )
    }
}

export default connect(
    state => ({user:state.user})
)(TravelNoteDetail)