import React from 'react'
import SideBar from './SideBar'

const Layout = () => {
  return (
    <div className='h-screen flex flex-row justify-start'>
    
        <SideBar/>
        <div className='bg-primaryweak flex-1 p-4 text-qlyellow '>
            place for things
        
        </div>
    </div>
  )
}

export default Layout