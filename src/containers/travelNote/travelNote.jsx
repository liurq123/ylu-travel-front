import React,{Component} from 'react'
import {connect} from 'react-redux'

import {reqAdd_Trip_TravelNote} from '../../api/index'
import {
    Icon,
    NavBar,
    WhiteSpace,
    WingBlank,
    List,
    InputItem,
    DatePicker,
    Picker,
    ImagePicker,
    TextareaItem,
    Button
} from "antd-mobile";


const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let moneyKeyboardWrapProps;
if (isIPhone) {
    moneyKeyboardWrapProps = {
        onTouchStart: e => e.preventDefault(),
    };
}

const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);

const district =[
        {
            label:'和朋友',
            value: '和朋友'
        },
        {
            label: '和父母',
            value: '和父母'
        },
    {
        label:'情侣',
        value: '情侣'
    },
    {
        label: '个人',
        value: '个人'
    },
    {
        label:'夫妻',
        value: '夫妻'
    },
    {
        label: '亲子',
        value: '亲子'
    },
    ]


class TravelNote extends Component{

    state = {
        title:'',
        godate:now,
        daynumber:'',
        who:'',
        cover: [],
        avgmoney:'',
        thinking:'',
        touTitle1:'',
        touThinking1:'',
        img1:[],
        touTitle2:'',
        touThinking2:'',
        img2:[],
        touTitle3:'',
        touThinking3:'',
        img3:[],
        summary:'',
        msg:''
    }

    handleSubmit  = () => {
        //封装数据
        var reqdata = new Object()
        reqdata.uid = this.props.user.id
        reqdata.title = this.state.title
        reqdata.cover = this.state.cover.length === 0  ? '':this.state.cover[0].url

        var myyear = this.state.godate.getFullYear();
        var mymonth = this.state.godate.getMonth() + 1;
        var myweekday = this.state.godate.getDate();

        if (mymonth < 10) {
            mymonth = "0" + mymonth;
        }
        if (myweekday < 10) {
            myweekday = "0" + myweekday;
        }
        var godata = myyear + "-" + mymonth + "-" + myweekday

        reqdata.godate = godata
        reqdata.daynumber = this.state.daynumber
        reqdata.who = this.state.who
        reqdata.avgmoney = this.state.avgmoney
        reqdata.thinking = this.state.thinking
        reqdata.touTitle1 = this.state.touTitle1
        reqdata.touThinking1 = this.state.touThinking1
        reqdata.img1 = this.state.img1.length === 0 ? '':this.state.img1[0].url
        reqdata.touTitle2 = this.state.touTitle2
        reqdata.touThinking2 = this.state.touThinking2
        reqdata.img2 = this.state.img2.length === 0 ? '':this.state.img2[0].url
        reqdata.touTitle3 = this.state.touTitle3
        reqdata.touThinking3 = this.state.touThinking3
        reqdata.img3 = this.state.img3.length === 0 ? '':this.state.img3[0].url
        reqdata.summary = this.state.summary

        console.log(reqdata)

        reqAdd_Trip_TravelNote(reqdata).then(r => {
            console.log(r.data)
            var result = r.data;    //result 是一个对象
            if (result.code === 1){
                //添加成功，跳转返回
                window.history.back()
            }
            else {
                //添加失败，继续填写表单
                this.setState({
                    msg:result.msg
                })
            }

        })

    }



    render() {
        const { cover,img1,img2,img3} = this.state;

        return (
            <div>
                <NavBar mode="light"
                        icon={<Icon type="left" />}
                        onLeftClick={() => window.history.back()}
                        >Add TravelNote</NavBar>
                <WhiteSpace />

                {this.state.msg ? <div style={{color:'rgb(255,0,0)',fontSize:'20px',textAlign:'center'}}>信息有误，请重新填写</div> : ' '}

                <h3>please fill in the form</h3>
                <WingBlank>
                    <List>

                        <InputItem
                            type='text'
                            placeholder="请输入标题(15字左右)"
                            clear
                            onChange={(v) => { this.setState({title:v}) }}
                        >
                            <div style={{fontSize:'15px'}}><img src={require('./img/title.png')}/>标题</div>

                        </InputItem>

                        <List.Item>
                            <div style={{fontSize:'15px'}}><img src={require('./img/cover.png')}/>封面(一张图片)</div>
                            <ImagePicker
                                files={cover}
                                onChange={(files, type, index) => {

                                    this.setState({
                                        cover:files
                                    });
                                }}
                                // onImageClick={(index, fs) => console.log(index, fs)}
                                selectable={cover.length < 1}

                            />
                        </List.Item>

                        <DatePicker
                            value={this.state.godate}
                            format='YYYY-MM-DD HH:mm'
                            onChange={godate =>{this.setState({ godate:godate})} }
                        >
                            <List.Item arrow="horizontal">
                                <div style={{fontSize:'15px'}}><img src={require('./img/begintime.png')}/>出发时间</div>
                            </List.Item>
                        </DatePicker>

                        <InputItem
                            type='money'
                            placeholder="请输入整数"
                            extra='/天'
                            clear
                            onChange={val => {this.setState({daynumber:val})}}
                            moneyKeyboardAlign="left"
                            moneyKeyboardWrapProps={moneyKeyboardWrapProps}
                        >
                            <div style={{fontSize:'15px'}}><img src={require('./img/daycount.png')}/>出行天数</div>
                        </InputItem>

                        <Picker data={district} cols={1} value={[this.state.who]} onChange={val => this.setState({who:val[0]})} >
                            <List.Item arrow="horizontal">
                                <div style={{fontSize:'15px'}}><img src={require('./img/accompang.png')}/>人物</div>
                            </List.Item>
                        </Picker>

                        <InputItem
                            type='money'
                            placeholder="请输入整数"
                            extra='￥'
                            clear
                            onChange={val => this.setState({avgmoney:val})}
                            moneyKeyboardAlign="left"
                            moneyKeyboardWrapProps={moneyKeyboardWrapProps}
                        >
                            <div style={{fontSize:'15px'}}><img src={require('./img/money.png')}/>人均费用</div>
                        </InputItem>
                    </List>

                    <WhiteSpace size='lg' />
                    <TextareaItem
                        title={<div style={{fontSize:'15px'}}><img src={require('./img/thinking.png')}/>思路</div>}
                        placeholder="请填写游玩的大概描述(100左右)"
                        data-seed="logId"
                        autoHeight
                        onChange={(val) => this.setState({thinking:val})}
                    />

                    <WhiteSpace size='lg' />
                    <InputItem
                        type='text'
                        placeholder="输入景点名称"
                        clear
                        onChange={(v) => { this.setState({touTitle1:v}) }}
                    >
                        <div style={{fontSize:'15px'}}><img src={require('./img/tourist1 .png')}/>景点1</div>
                    </InputItem>
                    <TextareaItem
                        title={<div style={{fontSize:'15px'}}><img src={require('./img/describe.png')}/>描述内容</div>}
                        placeholder="介绍游玩景点1的心得"
                        data-seed="logId"
                        autoHeight
                        onChange={(val) => this.setState({touThinking1:val})}
                    />
                    <List.Item>
                        <div style={{fontSize:'15px'}}><img src={require('./img/cover.png')}/>景点1(一张图片)</div>
                        <ImagePicker
                            files={img1}

                            onChange={(files, type, index) => {

                                this.setState({
                                    img1:files
                                });
                            }}
                            // onImageClick={(index, fs) => console.log(index, fs)}
                            selectable={img1.length < 1}
                        />
                    </List.Item>


                    <WhiteSpace size='lg' />
                    <InputItem
                        type='text'
                        placeholder="输入景点名称"
                        clear
                        onChange={(v) => { this.setState({touTitle2:v}) }}
                    >
                        <div style={{fontSize:'15px'}}><img src={require('./img/tourist2 .png')}/>景点2</div>
                    </InputItem>
                    <TextareaItem
                        title={<div style={{fontSize:'15px'}}><img src={require('./img/describe.png')}/>描述内容</div>}
                        placeholder="介绍游玩景点2的心得"
                        data-seed="logId"
                        autoHeight
                        onChange={(val) => this.setState({touThinking2:val})}
                    />
                    <List.Item>
                        <div style={{fontSize:'15px'}}><img src={require('./img/cover.png')}/>景点2(一张图片)</div>
                        <ImagePicker
                            files={img2}
                            onChange={(files, type, index) => {

                                this.setState({
                                    img2:files
                                });
                            }}
                            // onImageClick={(index, fs) => console.log(index, fs)}
                            selectable={img2.length < 1}

                        />
                    </List.Item>


                    <WhiteSpace size='lg' />
                    <InputItem
                        type='text'
                        placeholder="输入景点名称"
                        clear
                        onChange={(v) => { this.setState({touTitle3:v}) }}
                    >
                        <div style={{fontSize:'15px'}}><img src={require('./img/tourist3.png')}/>景点3</div>
                    </InputItem>
                    <TextareaItem
                        title={<div style={{fontSize:'15px'}}><img src={require('./img/describe.png')}/>描述内容</div>}
                        placeholder="介绍游玩景点3的心得"
                        data-seed="logId"
                        autoHeight
                        onChange={(val) => this.setState({touThinking3:val})}
                    />
                    <List.Item>
                        <div style={{fontSize:'15px'}}><img src={require('./img/cover.png')}/>景点3(一张图片)</div>
                        <ImagePicker
                            files={img3}
                            onChange={(files, type, index) => {

                                this.setState({
                                    img3:files
                                });
                            }}
                            // onImageClick={(index, fs) => console.log(index, fs)}
                            selectable={img3.length < 1}

                        />
                    </List.Item>

                    <WhiteSpace />
                    <TextareaItem
                        title={<div style={{fontSize:'15px'}}><img src={require('./img/summary.png')}/>小总结</div>}
                        data-seed="logId"
                        autoHeight
                        onChange={(val) => this.setState({summary:val})}
                    />

                </WingBlank>

                <WhiteSpace size='lg' />
                <Button type='primary' onClick={() => this.handleSubmit()} style={{marginBottom:'20px'}}>提交</Button>
            </div>
        )
    }
}



export default connect(
    state => ({user:state.user}),
    {}
)(TravelNote)