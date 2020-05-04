import React,{Component} from "react";
import {withRouter} from "react-router-dom"
import {TabBar} from "antd-mobile"
import PropTypes from "prop-types"


const Item = TabBar.Item
class NavFooter extends Component{
    static propTypes = {
        navList: PropTypes.array.isRequired
    }

    render() {
        // 当前请求的路径
        const {pathname} = this.props.location
        const {navList} = this.props
        return(
            <TabBar>
                {
                    navList.map((nav, index) => (
                        <Item key={nav.path}
                              title={nav.text}
                              icon={{uri: require(`./imgs/${nav.icon}.png`)}}
                              selectedIcon={{uri: require(`./imgs/${nav.icon}-selected.png`)}}
                              selected={nav.path.indexOf(pathname) !== -1? true:false}
                              onPress={() => {
                                  this.props.history.replace(nav.path[0])
                              }}
                        />
                    ))
                }
            </TabBar>
        )
    }

}

export default withRouter(NavFooter)