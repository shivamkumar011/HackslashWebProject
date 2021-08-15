import React from 'react';

import './Chap.css';

class Chap extends React.Component{
    render(){
        return(
                <div className= 'Chap'>
                    <div className='divimgchap'><img className='imgchap' src = './image/chap.svg' /></div>
                    
                    <div className='textchap'>
                        <h2> CHAP Accreditation and this line can be about this big</h2>
                        <p>UniversaCare, LLC will provide the following home health care programs at flexible schedules and cost-friendly service rates. </p>
                    </div>
                </div>
        );
    }
}

export default Chap;
    