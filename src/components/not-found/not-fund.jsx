import React,{Component} from "react";
import {Button} from "antd-mobile"

class NotFund extends Component{

    render() {
        return (
            <div>
                <div>
                    <h2>抱歉，找不到页面</h2>
                </div>
                <Button type="primary" onClick={()=>this.props.history.replace("/")}>回到首页</Button>
            </div>
        );
    }
}

export default NotFund