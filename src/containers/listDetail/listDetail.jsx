import React,{Component} from 'react'

import {NavBar, Icon, Carousel, WingBlank, WhiteSpace, Card, Button} from 'antd-mobile'
import {connect} from 'react-redux'

import {detail} from '../../redux/actions'
import pic1 from './img/product/size4/1a276fb64f35d765c941aade4e436e2d.jpg'

class ListDetail extends Component{
    state = {
        data :[],
        imgHeight:176
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
        this.props.detail({rid:this.props.match.params.id})

        setTimeout(() => {
            const {Dimg} = this.props
            var index = []
            Dimg.forEach((item) => {
                index.push(item.bigPic)
            } )
            this.setState({
                data: index
            });
        }, 100);
        window.scrollTo(0,0)
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
                                    src={require("./"+val)}
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
                        <h2>{this.props.Ddata.rname}</h2>
                    </div>
                    <Card full>
                        <Card.Header
                            title={<p style={{color:'rgb(255,0,0)',fontSize:'25px',fontWeight:'bold'}} >{this.props.Ddata.price}</p>}
                            thumb={<img src={require('./img/money.png')} style={{width:'37px',height:'37px'}}/>}
                            extra={<p style={{color:'rgb(0,191,255)',fontSize:'17px',fontStyle:'italic'}}>4.6 分</p>}
                            style={{height:'40px'}}
                        />

                        <Card.Body style={{padding:'0px 0px 0px 10px'}}>
                            <WhiteSpace size='lg' />
                            <div style={{fontSize:'15px'}}><span style={{fontWeight:'bold'}}>介绍：</span>{this.props.Ddata.routeIntroduce}</div>
                        </Card.Body>
                        <Card.Footer content=" " extra={<div>{this.props.Ddata.rdate}</div>} />
                    </Card>

                    <WhiteSpace size="lg" />

                    <div>
                        <img src={require('./img/comment.png')} style={{width:'40px',height:'43px'}}/>
                        <span>点评</span>
                        <a href="#"><img src={require('./img/insert.png')} style={{width:'30px',height:'30px',float:'right',marginTop:'10px',marginRight:'9px'}} /></a>
                    </div>

                    <Card>
                        <Card.Header
                            thumb={<img src={require('./img/user.png')} style={{width:'25px',height:'25px'}}/>}
                            extra={<p style={{color:'rgb(0,191,255)',fontSize:'14px',fontStyle:'italic'}}>4.6 分</p>}
                            style={{height:'30px'}}
                        />
                        <Card.Body style={{padding:'0px 0px 0px 10px'}}>
                            <div><p style={{overflow:"hidden"}}>This is content of `Card` This is content of `Card`This is content of `Card` This is content of `Card`This is content of `Card` This is content of `Card` </p></div>
                        </Card.Body>
                        <Card.Footer content=" " extra={<div>2010-12-04</div>} />
                    </Card>
                    <WhiteSpace />

                    <Card>
                        <Card.Header
                            thumb={<img src={require('./img/user.png')} style={{width:'25px',height:'25px'}}/>}
                            extra={<p style={{color:'rgb(0,191,255)',fontSize:'14px',fontStyle:'italic'}}>4.6 分</p>}
                            style={{height:'30px'}}
                        />
                        <Card.Body style={{padding:'0px 0px 0px 10px'}}>
                            <div><p style={{overflow:"hidden"}}>This is content of `Card` This is content of `Card`This is content of `Card` This is content of `Card`This is content of `Card` This is content of `Card` </p></div>
                        </Card.Body>
                        <Card.Footer content=" " extra={<div>2010-12-04</div>} />
                    </Card>
                    <WhiteSpace />

                    <Card>
                        <Card.Header
                            thumb={<img src={require('./img/user.png')} style={{width:'25px',height:'25px'}}/>}
                            extra={<p style={{color:'rgb(0,191,255)',fontSize:'14px',fontStyle:'italic'}}>4.6 分</p>}
                            style={{height:'30px'}}
                        />
                        <Card.Body style={{padding:'0px 0px 0px 10px'}}>
                            <div><p style={{overflow:"hidden"}}>This is content of `Card` This is content of `Card`This is content of `Card` This is content of `Card`This is content of `Card` This is content of `Card` </p></div>
                        </Card.Body>
                        <Card.Footer content=" " extra={<div>2010-12-04</div>} />
                    </Card>
                    <WhiteSpace />

                    <Button style={{marginBottom:'10px'}} type="primary" onClick={() => {window.scrollTo(0,0)}}>回到顶部</Button>
                </WingBlank>
            </div>
        )
    }
}
export default connect(
    state => ({Ddata:state.getDetail.Ddata,Dimg:state.getDetail.Dimg}),
    {detail}
)(ListDetail)
