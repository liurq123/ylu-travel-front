import React,{Component}  from 'react'
import {connect} from "react-redux";
import {NavBar, Icon, WhiteSpace, Slider, Button} from 'antd-mobile'


import {reqAdd_Comment} from '../../api/index'


class Comment extends Component{

    state = {
        content:'',
        score:'3',
        msg:'',
    }


    handleTextareaChange = (e) => {
        this.setState({
            content:e.target.value
        })
    }

    handleScoreChange = (val) => {
        this.setState({
            score:val
        })
    }

    submit = () => {
        reqAdd_Comment({uid:this.props.user.id,tid:this.props.location.query.tid,content:this.state.content,score:this.state.score})
            .then(r => {
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
        return (
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => window.history.back()}
                    rightContent={[
                        <Icon key="0" type="ellipsis" />,
                    ]}
                >Insert comment</NavBar>
                <WhiteSpace />
                <div>
                    <img src={require('./img/tar_tourist.png')} style={{width:'60px'}}/>
                    <span style={{fontSize:'25px'}}>{this.props.location.query.title}</span>
                    {/*<span style={{fontSize:'25px'}}>青青森林AAAaaa</span>*/}
                </div>
                <WhiteSpace />
                <WhiteSpace />
                {this.state.msg ? <div style={{color:'rgb(255,0,0)',fontSize:'20px',textAlign:'center'}}>信息有误，请重新填写</div> : ' '}
                <WhiteSpace />
                <WhiteSpace />
                <div>
                    <img src={require('./img/right.png')} style={{width:'30px'}}/>
                    <span style={{fontSize:'20px'}}>添加评论内容</span>
                </div>
                <WhiteSpace size="lg" />
                <div>
                    <textarea value={this.state.content} onChange={this.handleTextareaChange}  style={{fontSize:'18px',borderRadius:'10px',padding:'10px',width:document.body.clientWidth - 40 + 'px',height:'200px'}} />
                    <WhiteSpace />
                    <WhiteSpace />
                    <div>
                        <span style={{fontSize:'20px'}}>评分：</span>
                        <div>
                            <Slider
                                style={{ marginTop:20, marginLeft: 10, marginRight: 50}}
                                defaultValue={3}
                                min={0}
                                max={5}
                                onChange={(val) => this.handleScoreChange(val)}
                            />
                            <span id='sc' style={{float:'right',fontSize:'20px',border:'solid',borderWidth:'1px',marginRight:'5px',padding:'2px',color:'rgb(176,0,0)'}}>{this.state.score}</span>
                        </div>


                    </div>
                    <WhiteSpace />
                    <WhiteSpace />
                    <div style={{marginTop:'20px'}}>
                        <Button onClick={() => this.submit()} type='primary'>提交</Button>
                    </div>

                </div>

            </div>
        )
    }
}

export default connect(
    state => ({user:state.user}),
    {}
)(Comment)