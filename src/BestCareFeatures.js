import React from 'react';
import './BestCareFeatures.css';

class BestCareFeatures extends React.Component{
    render(){
        return(
            <div className = 'BestFeatures'>
                <img src = {this.props.imgtag} alt='best'/>
                    <h2>{this.props.title}</h2>
                    <p>{this.props.content}</p>
            </div>
        );
    }
}
export default BestCareFeatures;