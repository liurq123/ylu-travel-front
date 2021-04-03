import React,{Component} from 'react'

import {NavBar, Icon, Carousel, WingBlank, WhiteSpace, Card, Button} from 'antd-mobile'
import {connect} from 'react-redux'

import {detail} from '../../redux/actions'
import {reqGet_DelCommentById} from '../../api/index'

class DelListDetail extends Component{
    state = {
        data :[],
        imgHeight:176,
        commentList:[],
        average:''
    }

    componentWillMount() {
        console.log('我到了listdetail的willmount')
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('我到了listdetail的willupdate')
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('我到了listdetail的didupdate')
    }

    componentDidMount() {
        console.log('我到了listdetail的didmount')
        this.props.detail({fid:this.props.match.params.id})

        reqGet_DelCommentById({fid:this.props.match.params.id})
            .then(r => {
                var result = r.data;
                this.setState({
                    average:result.msg,
                    commentList:result.data
                })
            })

        setTimeout(() => {
            const {Dimg} = this.props
            var index = []
            Dimg.map((value) => {
                index.push(value.img)
            })

            this.setState({
                data: index
            });
        }, 100);

        window.scrollTo(0,0)
    }

    toAddComment = () => {
        this.props.history.push({pathname:'/addDelComment',query:{fid:this.props.match.params.id,title:this.props.Ddata.title}})
    }

    render() {

        return(
            <div>
                <NavBar mode="light"
                        icon={<Icon type="left" />}
                        onLeftClick={() => window.history.back()}
                        rightContent={[
                            <Icon key="0" type="search" style={{marginRight:'16px'}} />,
                            <Icon key="1" type="ellipsis" />
                        ]}>Detail</NavBar>


                <Carousel
                    autoplay={false}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                >
                    {this.state.data.map(val => (
                        <a
                            key={val}
                            href="#"
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <img
                                src={val}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top',borderRadius:'10px' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                    ))}
                </Carousel>

                <WingBlank size="lg">

                    <div>
                        <h2>{this.props.Ddata.title}</h2>
                    </div>
                    <Card full>
                        <Card.Header
                            title={<p style={{color:'rgb(255,0,0)',fontSize:'25px',fontWeight:'bold'}} >{this.props.Ddata.price}</p>}
                            thumb={<img src={require('./img/money.png')} style={{width:'37px',height:'37px'}}/>}
                            extra={<p style={{color:'rgb(0,191,255)',fontSize:'17px',fontStyle:'italic'}}>{this.state.average} 分</p>}
                            style={{height:'40px'}}
                        />

                        <Card.Body style={{padding:'0px 0px 0px 10px'}}>
                            <WhiteSpace size='lg' />
                            <div style={{fontSize:'15px',padding:'3px', borderWidth:'1px',borderStyle:'solid',borderRadius:'10px',borderColor:'rgb(192,192,192)'}}><span style={{fontWeight:'bold'}}>地点：</span>{this.props.Ddata.address ? this.props.Ddata.address : "暂无信息" }</div>
                            <WhiteSpace />
                            <div style={{fontSize:'15px',padding:'3px', borderWidth:'1px',borderStyle:'solid',borderRadius:'10px',borderColor:'rgb(192,192,192)'}}><span style={{fontWeight:'bold'}}>开放时间：</span>{this.props.Ddata.openTime ? this.props.Ddata.openTime:"暂无信息"}</div>
                            <WhiteSpace />
                            <div id='intro' style={{height:'100px',overflowY:'hidden',fontSize:'15px',padding:'3px', borderWidth:'1px',borderStyle:'solid',borderRadius:'10px',borderColor:'rgb(192,192,192)'}}><span style={{fontWeight:'bold'}}>介绍：</span>{this.props.Ddata.intro ? this.props.Ddata.intro:"暂无信息"}</div>
                            <WhiteSpace />
                            <a id='show'style={{display:'block',float:'right',marginRight:'10px',color:'rgb(152,0,0)'}} onClick={() => {document.getElementById('intro').style.height='500px'
                                document.getElementById('show').style.display='none'
                                document.getElementById('hidden').style.display='block'
                            }}>展开</a>

                            <a  id='hidden' style={{display:'none',float:"right",marginRight:'10px',color:'rgb(152,0,0)'}} onClick={() => {document.getElementById('intro').style.height='100px'
                                document.getElementById('show').style.display='block'
                                document.getElementById('hidden').style.display='none'
                            }} >关闭</a>
                        </Card.Body>
                        <Card.Footer content=" " extra={<div>{this.props.Ddata.rdate}</div>} />
                    </Card>

                    <WhiteSpace size="lg" />

                    <div>
                        <img src={require('./img/comment.png')} style={{width:'40px',height:'43px'}}/>
                        <span>点评</span>
                        <a onClick={() => {this.toAddComment()}}><img src={require('./img/insert.png')} style={{width:'30px',height:'30px',float:'right',marginTop:'10px',marginRight:'9px'}} /></a>
                    </div>

                    {
                        this.state.commentList.length !== 0 ? (
                            this.state.commentList.map((value,index) => (
                                <div key={value.uid}>
                                    <Card>
                                        <Card.Header
                                            title={value.name}
                                            thumb={<img src={require('./img/user.png')} style={{width:'25px',height:'25px'}}/>}
                                            extra={<p style={{color:'rgb(0,191,255)',fontSize:'14px',fontStyle:'italic'}}>{value.score} 分</p>}
                                            style={{height:'30px'}}
                                        />
                                        <Card.Body style={{padding:'0px 0px 0px 10px'}}>
                                            <div><p style={{overflow:"hidden"}}>{value.content}</p></div>
                                        </Card.Body>
                                        <Card.Footer content=" " extra={<div>{value.date}</div>} />
                                    </Card>
                                    <WhiteSpace />
                                </div>
                            ))
                        ): <p style={{fontSize:'20px'}}>暂无评论</p>
                    }

                    <Button style={{marginBottom:'20px'}} type="primary" onClick={() => {window.scrollTo(0,0)}}>回到顶部</Button>
                </WingBlank>
            </div>
        )
    }
}
export default connect(
    state => ({Ddata:state.getDetail.Ddata,Dimg:state.getDetail.Dimg}),
    {detail}
)(DelListDetail)
