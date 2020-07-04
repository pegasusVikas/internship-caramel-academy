import React, {Component} from 'react';
import './Background.css';

class back extends Component{
    render(){
        
    return(
        <div className="BackGround">
        {this.props.children}
        </div>
        )
    }
}
export default back;