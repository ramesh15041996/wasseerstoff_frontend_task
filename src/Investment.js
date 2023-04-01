import React from 'react'
import './css/investment.css';

import Ringprogress from './Ringprogress';

function Investment() {
  return (
    <div className='investment'>
      
        <div className='header_name'>Design faster</div>
        
        <div className='sidebar'>
            <div className='sidebar_chart'>
              <Ringprogress/>
              </div>
            <div className='profile_details'>
              <span className='earning earning1'>Total earning</span><br/>
              <span className='earning  data3'>$12,375</span><br/>
              <span className='earning data1'>compared to $12,504</span>
            </div>
            
            <div className='statistics'>
                <div className='statistics1'>
                  <span>Presentation</span>
                  <span>862</span>
                  <span></span>
                </div>

                <div className='statistics1'>
                <span>Development</span>
                  <span>753</span>
                  <span></span>
                </div>
                <div className='statistics1'>
                <span>Research</span>
                  <span>553</span>
                  <span></span>
                </div>
            </div>
        </div>
        <div className='second_sidebar'>
            <div className='total_earning'>

            </div>
            <div className='sales'>

            </div>
        </div>
        <div className='third_sidebar'>

        </div>
       
    </div>
  )
}

export default Investment
