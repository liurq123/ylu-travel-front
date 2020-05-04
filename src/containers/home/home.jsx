import React,{Component} from "react";
import {Button,SearchBar,WingBlank,WhiteSpace,Carousel,Grid,SegmentedControl} from "antd-mobile"
import {Route,Switch,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import trip1 from './imgs/trip1.jpg'
import trip2 from './imgs/trip2 .jpg'
import trip3 from './imgs/trip3.jpeg'

import tourist from './imgs/travel.png'
import arr_trip from './imgs/arr_travel.png'
import hotel from './imgs/hotel.png'
import food from './imgs/food.png'
import car from './imgs/car.png'
import location from './imgs/location.png'

import Selected from "../selected/selected";
import Delicious from "../delicious/delicious";
import Recommend from "../recommend/recommend";

class Home extends Component{
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
        link : [],
        index:0,
        style:{},
        width:''
    }

    Grid_data = [{icon:tourist,text:'旅游',link:'#'},{icon: arr_trip,text: '周边游',link: '#'},
                 {icon:hotel,text:'酒店',link: '#'},{icon:food,text:'美食',link: '#'},{icon:car,text:'自驾游',link: '#'},
        {icon:location,text:'定位',link: '#'}]

    componentWillMount() {
        console.log('我到home的了willmount')
        var wid = document.body.clientWidth
        // console.log('js浏览器宽'+wid)
        var width = wid-25 + 'px'
        this.setState({
            width:width
        })
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('我到了home的didupdate')
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('我到了home的willupdate')
    }

    componentDidMount() {
        console.log('我到了home的didmount')
        setTimeout(() => {
            this.setState({
                data: [trip1, trip2, trip3],
                link: ['https://www.leesharing.com/malaysia-resort/','https://88razzi.com/%E3%80%9029%E4%B8%AA%E4%B8%9C%E5%8D%97%E4%BA%9A%E5%BF%85%E5%8E%BB%E3%81%AE%E6%97%85%E6%B8%B8%E6%99%AF%E7%82%B9%E3%80%91%E9%83%BD%E6%98%AF%E8%87%AA%E7%94%B1%E8%A1%8C%E7%88%B1%E5%A5%BD%E8%80%85%E3%80%81%E8%83%8C%E5%8C%85%E5%AE%A2%E7%9A%84%E6%97%85%E6%B8%B8%E5%A5%BD%E5%8E%BB%E5%A4%84%E5%93%A6%EF%BC%81','https://www.sohu.com/a/228913928_100017627']
            });
        }, 100);
        window.addEventListener('scroll',this.handleScroll)
        // window.addEventListener('resize',this.handleResize)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll',this.handleScroll)
    }

    handleScroll  = (event) =>{
        // let clientHeight = document.documentElement.clientHeight; //可视区域高度
        // let scrollTop  = document.documentElement.scrollTop;  //滚动条滚动高度
        // let scrollHeight =document.documentElement.scrollHeight; //滚动内容高度

        let move_height = window.scrollY

        // console.log(clientHeight)
        // console.log(scrollTop)
        // console.log(scrollHeight)

        // console.log(move_height)
        if(move_height >= 447){
            this.setState({
                style:{position:'fixed',top:0}
            })
        }
        else {
            this.setState({
                style:{position:'relative'}
            })
        }

    }

    // 分段器改变，更新state中的index值
    updateIndex = (value,value1) => {
        this.setState({
            index:value
        })
        // console.log(value,value1)
        // 跳转精选的页面
        if (value1 ==='精选'){
            this.props.history.replace('/home/selected')
        }
        if (value1 ==='美食'){
            this.props.history.replace('/home/delicious')
        }
        if (value1 === '推荐'){
            this.props.history.replace('/home/recommend')
        }
    }



    render() {
        // const Grid_data = Array.from(new Array(6)).map((_val, i) => ({
        //     icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
        //     text: `name${i}`,
        // }));
        const cur_path = this.props.location.pathname
        if(cur_path ===  '/home'){
            return <Redirect to="/home/selected"/>
        }

        // console.log(this.Grid_data)
        const Grid_data = this.Grid_data
        return (
        <div>
            <div className="search">
                <SearchBar  placeholder="Search" maxLength={8} />
            </div>

            <Carousel className="space-carousel"
                      frameOverflow="visible"
                      cellSpacing={10}
                      slideWidth={0.8}
                      autoplay
                      infinite
                      beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                      afterChange={index => this.setState({ slideIndex: index })}
            >
                {this.state.data.map((val, index) => (
                    <a
                        key={val}
                        href={this.state.link[index]}
                        style={{
                            display: 'block',
                            position: 'relative',
                            top: this.state.slideIndex === index ? -10 : 0,
                            height: this.state.imgHeight,
                            boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                        }}
                    >
                        <img
                            src={val}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                            }}
                        />
                    </a>
                ))}
            </Carousel>
            <WhiteSpace/>
            <WingBlank>
                <div>
                    <Grid data={Grid_data} columnNum={3} hasLine={false}  itemStyle={{ height: '100px', background: 'rgba(245,245,249)' }}
                          renderItem={dataItem => (
                              <div style={{ padding: '12.5px' }}>
                                  <img src={dataItem.icon} style={{ width: '55px', height: '55px' }} alt="" />
                                  <div style={{ color: '#888', fontSize: '14px' }}>
                                      <span>{dataItem.text}</span>
                                  </div>
                              </div>
                          )} onClick={dataItem => console.log(dataItem.link)}/>
                </div>
                <WhiteSpace />

                <div className='category' style={this.state.style} >
                    <SegmentedControl
                        values={['精选', '美食', '推荐']}
                        selectedIndex={this.state.index}
                        tintColor={'#C0C0C0'}
                        style={{ height: '30px', width: this.state.width}}
                        onChange={e => this.updateIndex(e.nativeEvent.selectedSegmentIndex,e.nativeEvent.value)}
                        onValueChange={(value) => console.log(value)}
                        className='inner_category'
                    />

                </div>
                <Switch>
                    <Route path='/home/selected' component={Selected}/>
                    <Route path='/home/delicious' component={Delicious}/>
                    <Route path='/home/recommend' component={Recommend}/>
                </Switch>
            </WingBlank>

        </div> )
    }
}

export default connect(
    state => state.user,
)(Home)