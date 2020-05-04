import React,{Component} from 'react'
import PropTypes from 'prop-types'

class LoadMore extends Component{

    static propTypes = {
        isLoadingMore:PropTypes.bool.isRequired,
        loadMoreFn:PropTypes.func.isRequired
    }

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
        //使用滚动自动加载更多
        // const loadMoreFn = this.props.loadMoreFn
        // const wrapper = this.refs.wrapper
        // let timeoutId
        // function callback(){
        //     const top = wrapper.getBoundingClientRect().top
        //     const windowHeight = window.screen.height
        //     if(top && top<windowHeight){
        //         //wrapper 已经被滚到页面的可视范围内
        //         loadMoreFn()
        //     }
        // }
        //
        // window.addEventListener('scroll',function () {
        //     if (this.props.isLoadingMore){
        //         return
        //     }
        //     if (timeoutId){
        //         clearTimeout(timeoutId)
        //     }
        //     timeoutId = setTimeout(callback,50)
        // }.bind(this),false)
    }


    loadMoreHandle = () => {
        console.log("我点击了 loadmorehandle")
        // 执行传输过来的函数
        this.props.loadMoreFn()
    }

    render() {

        return (
            <div className="load-more" ref="wrapper">
                {this.props.isLoadingMore ?
                    <span>加载中.....</span> :
                    <p onClick={() => this.loadMoreHandle(this)} style={{
                        float: 'right',
                        marginRight: this.state.width,
                        marginBottom: '70px',
                        textAlign: 'center'
                    }}>加载更多</p>
                }
            </div>
        )
    }
}

export default LoadMore