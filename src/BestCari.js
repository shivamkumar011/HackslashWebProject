import React from 'react';
import './BestCari.css';

import BestCareFeatures from './BestCareFeatures.js';

class BestCari extends React.Component{
    render() {
        return(
            <div className = 'BestCari' >
                <div>
                    <h1>How We Find <span>Best Careviger</span> For You</h1>
                </div>
                <div className='content-container'>
                    <BestCareFeatures imgtag= "./image/featureone.svg" title="1. Initial Consultation" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non."/>
                    <BestCareFeatures imgtag= "./image/featuretwo.svg" title="2. Customized Care Plan" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non."/>
                    <BestCareFeatures imgtag= "./image/featurethree.svg" title="3. Caregiver Matching" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non."/>
                    <BestCareFeatures imgtag= "./image/featurefour.svg" title="4. Ongoing Support & Supervision" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non."/>
                </div>
                
            </div>
        );
    }
}

export default BestCari;