import React from 'react'
import Sidebar from './Sidebar'

function App() {
  return (
    <div className='d-flex vh-100'>
      <div className='w-20'><Sidebar/></div>
      <div className='w-50'>Feed</div>
      <div className='w-30'>Suggetions</div>
    </div>
  )
}

export default App

//rfce