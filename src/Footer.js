import React from 'react'
import "./css/footer.css";

import FloatingChart from './FloatingChart';

function Footer() {
  return (
    <div className='footer'>
      <div className='salesfigure'>
      <div className='flowchart'>
      <FloatingChart/>
      </div>
      {/* <div className='data'>Sales Figures</div>
      <div className='number_data'>$10,430</div> */}
     

      </div>
      
      
      
      
      
    </div>
  )
}

export default Footer
