
import React from 'react'
import Investment from './Investment'
import Footer from './Footer'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Worlddata from './Worlddata'
import Finalfooter from './Finalfooter'
import Mychart from './Mychart'


function App() {
  return (
    <div className='app_wrapper'>
      
      <Navbar />
      <Worlddata/>
      <div className='body_app'>
        <Sidebar/>
        
      </div>
      <Footer/>
      <Finalfooter/>
      <Mychart/>
      <Investment/> 
      
      
    </div>
  )
}

export default App
