import React,{Component} from "react";
import yil from './image/yil.png'

import './logo.css'

export default class Logo extends Component{
    render() {
        return(
            <div className='logoDiv'>
                <img src={yil} alt="logo" className="imageLogo" />
            </div>
        )
    }

}