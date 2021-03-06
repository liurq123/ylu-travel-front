import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Switch,Route} from "react-router-dom";
import {Provider} from 'react-redux'

import store from './redux/store'
import Login  from './containers/login/login'
import Register from "./containers/register/register";
import Main from "./containers/main/main";
import './assets/css/index.less'


ReactDOM.render(
    <Provider store={store}>
        {/*{console.log("我到了index.js")}*/}
        <HashRouter>
            {console.log("我到了index.js")}
            <Switch>
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register}/>
                <Route component={Main}/>
            </Switch>
        </HashRouter>
    </Provider>
    , document.getElementById('root'));

